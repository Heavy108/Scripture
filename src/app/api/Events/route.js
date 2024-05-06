
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();

export async function fetchData() {
  try {
    const Data = await Magazine.find({tags:"events"}).lean().exec();
    const plainObjects = Data.map(obj => {
      return {
        ...obj,
        Date: obj.Date.toJSON()
      };
    });
    console.log(plainObjects)
    return plainObjects;
    // console.log(Data)
    // return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

