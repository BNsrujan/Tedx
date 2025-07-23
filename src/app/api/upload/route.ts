import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = 'edge'

export async function POST(req: Request) {
    try {
        console.log('Upload API called');

        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            console.error('Missing BLOB_READ_WRITE_TOKEN');
            return NextResponse.json(
                { error: "Missing BLOB_READ_WRITE_TOKEN environment variable" },
                { status: 401 }
            )
        }

        const filename = req.headers.get('x-vercel-filename') || 'file.txt'
        const contentType = req.headers.get('content-type') || 'application/octet-stream'

        console.log('Filename:', filename);
        console.log('Content-Type:', contentType);

        if (!req.body) {
            return NextResponse.json(
                { error: "No file data received" },
                { status: 400 }
            )
        }

        // Handle content type parsing more safely
        const fileType = contentType.includes('/') ? `.${contentType.split('/')[1]}` : '.bin'

        const finalName = filename.includes(fileType)
            ? filename
            : `${filename}${fileType}`

        console.log('Final filename:', finalName);

        const blob = await put(finalName, req.body, {
            contentType,
            access: 'public',
            addRandomSuffix: true
        })

        console.log('Upload successful:', blob.url);
        return NextResponse.json(blob)
    } catch (error) {
        console.error('Upload error:', error)
        return NextResponse.json(
            { error: `Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        )
    }
}
