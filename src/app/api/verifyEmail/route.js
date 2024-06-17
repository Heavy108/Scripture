import {connect} from "@/dbconfig/dbconfig";
import { NextRequest,NextResponse } from "next/server";
import Newsletter from "@/Models/NewsletterModel";

export async function POST(request){
    
try{
    await connect();
    const reqBody =await request.json()
    const {token} =reqBody;
    console.log(token);

    const user =await Newsletter.findOne({verifyToken:token ,verifyTokenExpiry:{$gt:Date.now()}})
    if (!user){
        return NextResponse.json({error:"Invalid Token"},{status:200})
    }
    console.log(user);
    user.IsVerified =true
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();
    return NextResponse.json({
        message: "Email verified successfully",
        success: true
    })
}catch (error){
    return NextResponse.json({error: error.message}, {status: 500})

}
}