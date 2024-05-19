
import { connect,disconnect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";



export async function fetchData() {
  await connect();
  try {
    const Data = await Magazine.find({},{image:1,field:1,_id:1}).lean().exec();
    
    const plainObjects = Data.map(obj => {
      return {
        ...obj,
        // Date: obj.Date.toJSON(),
        image:obj.image.toString('base64'),
        // pdfaddress:obj.pdfaddress.toString('base64')
      };
    });
    console.log("Lates Item: ", plainObjects[plainObjects.length - 1].field)
    return plainObjects;
    // return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

