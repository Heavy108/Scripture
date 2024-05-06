
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Magazine from "@/Models/MagazineModel";

connect();
function monthNameToNumber(monthName) {
  const monthMap = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
  };

  
  return monthMap[monthName];
}


export async function fetchSearchData(month,year) {
  try {
    const monthNumber = monthNameToNumber(month);
    console.log(year)
    const Data = await Magazine.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $year: { $toDate: "$Date" } }, parseInt(year)] },
              { $eq: [{ $month: { $toDate: "$Date" } }, monthNumber] }
            ]
          }
        }
      }
    ]);
    
    const plainObjects = Data.map(obj => {
      return {
        ...obj,
        Date: obj.Date.toJSON()
      };
    });
    // console.log(plainObjects)
    return plainObjects;
  
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

