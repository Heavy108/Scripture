import {connect} from "@/dbconfig/dbconfig";
import Login from "@/Models/LoginModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()

export async function POST({request}){
    try {

        const reqBody = await request.json()
        const {username, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await Login.findOne({username})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        return NextResponse.json(
            { message: "User Login successfully" },
            { status: 200 }
          );
        

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}