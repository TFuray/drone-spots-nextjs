import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()

  const newComment = await prisma.comment.create({
    data: {
      text: body.text,
      
    }
  })
}