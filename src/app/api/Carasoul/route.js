
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Carasoul from "@/Models/CarasoulModel";

connect();

export async function fetchCarasoulData() {
  try {
    const Data = await Carasoul.find();
   
    return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

