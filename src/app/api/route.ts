import { NextResponse } from 'next/server';
import clientPromise from '../../lib/db';

export async function GET() {
  const client = await clientPromise;
  const collection = client.db('ops').collection('num');
  const res = await collection.findOne();

  return NextResponse.json({ number: res?.number });
}

export async function POST() {
  const client = await clientPromise;
  const collection = client.db('ops').collection('num');
  const res = await collection.findOneAndUpdate({}, { $inc: { number: 1 } });
  console.log(res);
  //@ts-ignore
  return NextResponse.json(res.value);
}
