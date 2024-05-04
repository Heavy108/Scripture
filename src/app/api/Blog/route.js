
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/Models/BlogModel";

connect();

export async function fetchBlogData() {
  try {
    // console.log("here from blog route :",id)
    
    const Data = await Blog.find({ref_id: 'SC3'});
   console.log("from roteblog: ",Data.length ,Data)
    return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

