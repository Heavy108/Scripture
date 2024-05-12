import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { join } from 'path';
import { connect } from '@/dbconfig/dbconfig';
import Carasoul from '@/Models/CarasoulModel';

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    const file = data.get('image');
    
   
    if (!file) {
      return NextResponse.json({ success: false });
    }
   
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = file.name;
    const filePath = join(process.cwd(), 'public', 'uploads', fileName);

    await writeFile(filePath, buffer);
    const id = data.get('_id')
    const CarasoulItems = await Carasoul.find({_id:id})

    // Extract other form fields
    
    const title = data.get('title') || CarasoulItems.title;
    const text = data.get('text') || CarasoulItems.text;
    const address = data.get('address') || CarasoulItems.address;
    const bgColor = data.get('bg_color') || CarasoulItems.bgColor;
    // console.log()
    await Carasoul.findOneAndUpdate(
      { _id: id },
      {
        image: `/uploads/${fileName}`, 
        title:title,
        text:text,
        address:address,
        bg_color: bgColor,
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating document:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
