import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import pool from "../../db";

// Define only POST handler
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

        const filePath = path.join(process.cwd(), "public/uploads", filename);
        await writeFile(filePath, buffer);

        // Insert into DB
        const db = await pool.getConnection();
        const [result] = await db.execute(
            "INSERT INTO images (project_id, filename, path) VALUES (?, ?, ?)",
            [id, filename, `/uploads/${filename}`]
        );

        return NextResponse.json({ message: "Uploaded and saved to DB", result }, { status: 201 });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "File upload failed." }, { status: 500 });
    }
}
