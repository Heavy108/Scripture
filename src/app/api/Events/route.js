
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();

export async function fetchData() {
  try {
    const data = await Magazine.find(
      { tags: "Events" },
      { _id: 1, image: 1, Date: 1, Title: 1, Description: 1 ,tags:1}
    ).lean().exec();
    const plainObjects = data.map(obj => {
      return {
        ...obj,
        Date: obj.Date.toJSON(),
        image:obj.image.toString('base64'),
      };
    });
    // console.log(plainObjects)
    return plainObjects;
    // console.log(Data)
    // return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

