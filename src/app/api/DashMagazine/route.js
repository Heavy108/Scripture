import { connect } from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import Magazine from "@/Models/MagazineModel";
import multer from 'multer';
import path from 'path';
connect();

  
export async function POST(request) {
  try {
   

    const reqBody = await request.json();
    const {
      _id,
      field,
      tags,
      Date,
      Title,
      Description,
      image,
      Para1,
      pdfadress,
    } = reqBody;

    console.log(reqBody);
    //check if Id already exists
    const user = await Magazine.findOne({ _id });

    if (user) {
      return NextResponse.json(
        { error: "Magazine already exists" },
        { status: 400 }
      );
    } else {
      await Magazine.create({
        _id: _id,
        field: field,
        tags: tags,
        Date: Date,
        Title: Title,
        Description: Description,
        image: image,
        Para1: Para1,
        pdfaddress: pdfadress,
      });
      return NextResponse.json(
        { message: "magazine added successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    // console.error("Error in POST /api/Newsletter:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
