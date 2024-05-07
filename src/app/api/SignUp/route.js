import { connect } from "@/dbconfig/dbconfig";
import Login from "@/Models/LoginModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await Login.findOne({ username });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(username,hashedPassword)
    await Login.create({ name:username, pass:hashedPassword });
    return NextResponse.json(
      { message: "User added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
