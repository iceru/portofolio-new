import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import pool from "../../db";

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Missing ID in query parameters." }, { status: 400 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
        return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = file.name.replace(/\s/g, "_"); // sanitize filename

        const filePath = path.join(process.cwd(), "public/uploads/stacks", filename);
        await writeFile(filePath, buffer);

        // Insert into DB
        const db = await pool.getConnection();
        const [result] = await db.execute(
            "UPDATE stacks SET image = ? WHERE id = ?",
            [`/uploads/stacks/${filename}`, id]
        );

        return NextResponse.json({ message: "Uploaded and saved to DB", result }, { status: 201 });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "File upload failed." }, { status: 500 });
    }
}
