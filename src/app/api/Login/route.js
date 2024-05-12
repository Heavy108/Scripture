import {db} from "@/dbconfig/dbfirebase";
import Login from "@/Models/LoginModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function POST(request) {
    try {
      const reqBody = await request.json();
      const { username, password } = reqBody;
      console.log(reqBody);
  
      // Query Firestore for the user document
      const userDocRef = db.collection('Users').doc(username);
      const userDoc = await userDocRef.get();
  
      if (!userDoc.exists) {
        return NextResponse.json({ error: "User does not exist" }, { status: 400 });
      }
  
      const userData = userDoc.data();
      console.log("User exists");
  
      // Check if password is correct
      const validPassword = await bcryptjs.compare(password, userData.Password);
      if (!validPassword) {
        return NextResponse.json({ error: "Invalid password" }, { status: 400 });
      }
  
      console.log(userData);
      return NextResponse.json(
        { message: "User Login successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }