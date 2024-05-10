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
    

    // Extract other form fields
    const id = data.get('_id');
    const title = data.get('title');
    const text = data.get('text');
    const address = data.get('address');
    const bgColor = data.get('bg_color');

    await Carasoul.findOneAndUpdate(
      { _id: id },
      {
        image: `/pdf/${fileName}`, 
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
