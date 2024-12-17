import posts from "@/lib/db/posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const {
      name,
      image,
      alt,
      content
    } = body;

    if (!name || !image || !alt || !content) {
      return NextResponse.json(
        {
          status: "error",
          code: 40001,
          message: "All required fields must be provided.",
          data: null,
        },
        { status: 400 }
      );
    }

    const result = await posts.create_post(name,image,alt,content);

    if (result && result.affectedRows === 1) {
      return NextResponse.json({
        status: "success",
        code: 201,
        message: "Post added successfully.",
        data: { post_id: result.insertId },
      });
    }

    return NextResponse.json(
      {
        status: "error",
        code: 50001,
        message: "Failed to add post.",
        data: null,
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("Error adding post:", error);

    return NextResponse.json(
      {
        status: "error",
        code: 50002,
        message: "An unexpected error occurred.",
        data: null,
      },
      { status: 500 }
    );
  }
}


export async function GET(req:NextRequest) {
    try {
      const rows = await posts.getPosts();
      if(!rows)
        {
          return new Response("No Rows Found", { status: 404 });
        }
      console.log(rows);
      return NextResponse.json({
        status: "success",
        code: 200,
        message: "Posts fetched successfully.",
        data: rows,
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
  
      return NextResponse.json(
        {
          status: "error",
          code: 50001,
          message: "Failed to fetch posts.",
          data: null,
        },
        { status: 500 }
      );
    }
  }