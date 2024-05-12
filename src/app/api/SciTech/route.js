import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();

export async function fetchData() {
  try {
    const Data = await Magazine.find({tags:"Research"}).lean().exec();
    // console.log("data is", Data);
    
    const plainObjects = Data.map(obj => {
      return {
        ...obj,
        Date: obj.Date.toJSON(),
        image:obj.image.toString('base64'),
        pdfaddress:obj.pdfaddress.toString('base64')
      };
    });
    // console.log(plainObjects)
    return plainObjects;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

