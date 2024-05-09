import { connect } from "@/dbconfig/dbconfig";
import Carasoul from "@/Models/CarasoulModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    console.log("id is ",reqBody._id)

    // Update your Carasoul model with the request body data
    const updatedCarasoulItem = await Carasoul.findOneAndUpdate(
      { _id: reqBody._id },
      reqBody,
      { new: true }
    );

    return NextResponse.json({message:'Successfully updated'}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}