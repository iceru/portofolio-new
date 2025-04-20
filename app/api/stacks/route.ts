/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import pool from "../db";

export async function GET() {
    try {
        const db = await pool.getConnection();
        const [stacks]: any = await db.execute('SELECT * FROM stacks');

        db.release();
        return NextResponse.json(stacks);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
