/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import pool from "../db";

export async function GET() {
    try {
        const db = await pool.getConnection();
        const [projects]: any = await db.execute('SELECT * FROM projects');

        // Enrich each project with its related stacks through the pivot table
        const enrichedProjects = await Promise.all(projects.map(async (project: any) => {
            const [stacks]: any = await db.execute(
                `
                SELECT stacks.* FROM stacks
                INNER JOIN project_stacks ON stacks.id = project_stacks.stack_id
                WHERE project_stacks.project_id = ?
                `,
                [project.id]
            );

            return {
                ...project,
                stacks,
            };
        }));

        db.release();
        return NextResponse.json(enrichedProjects);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
