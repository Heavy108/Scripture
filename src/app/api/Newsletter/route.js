import { connect } from "@/dbconfig/dbconfig";
import { NextResponse,NextRequest } from "next/server";
import NewsLetter from "@/Models/NewsletterModel";
import { sendEmail } from "@/JS/verify";

connect();

export async function POST(request){
    try{
        const reqBody =await request.json()
        const {username ,email,date} =reqBody
        
        console.log(reqBody);
         //check if user already exists
         const user = await NewsLetter.findOne({Email:email})
         console.log("Existing User:", user);
         if(user){
        
             return NextResponse.json({error: "User already exists"}, {status: 400})
         }
         else{
           const SaveUser= await NewsLetter.create({Username: username ,Email:email,Date:date,IsVerified:false});
            await sendEmail({email , userId:SaveUser._id})
            return NextResponse.json({ message: "User added successfully" }, { status: 200 });
         }

    }catch(error){
        console.error("Error in POST /api/Newsletter:", error);
       return NextResponse.json({error:error.message},{status:500})
    }
    
}