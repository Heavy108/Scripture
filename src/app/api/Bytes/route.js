
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();

export async function fetchData() {
  try {
    const Data = await Magazine.find({tags:"GDSC"});
   
    return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

