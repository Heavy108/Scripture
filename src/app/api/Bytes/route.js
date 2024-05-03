import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();

export async function fetchData() {
    console.log("halu");
  try {
    const Data = await Magazine.find();
    console.log("Data = ", Data);
    console.log("data is", Data.length);
    return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// const Data1 = () => {
//     const data = fetchData();
// };

// export default Data1;
