import { db } from "@/dbconfig/dbfirebase";
import { collection, addDoc ,getFirestore} from "firebase/firestore"; 
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";




export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    console.log(reqBody);

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(username, hashedPassword);

    // Store the user data in Firestore
    const docRef =await addDoc(collection(db, "Users"),{
      name: username,
      password: hashedPassword,
    });
    console.log("Document written with ID: ", docRef.id);
    return NextResponse.json(
      { message: "User added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}