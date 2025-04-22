import { NextResponse } from "next/server";
import Pusher from "pusher";
import { connect } from "@/dbconfig/dbconfig";

import Comment from "@/Models/Comment"; // your Mongoose schema

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

export async function POST(req) {
  const { blogId, name, email, comment } = await req.json();

  await connect();
  const newComment = await Comment.create({ blogId, name, email, comment });

  await pusher.trigger("comments-channel", "new-comment", {
    blogId,
    comment: newComment,
  });

  return NextResponse.json({ success: true });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("blogId");

  await connect();
  const comments = await Comment.find({ blogId }).sort({ createdAt: -1 });

  return NextResponse.json(comments);
}
