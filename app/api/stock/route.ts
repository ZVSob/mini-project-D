import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");

  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.AV_API_KEY}`
  );

  const data = await res.json();

  console.log("RAW:", data);

  const quote = data?.["Global Quote"];

  if (!quote || Object.keys(quote).length === 0) {
    return NextResponse.json({ error: "No data"});
  }

 return NextResponse.json({
    price: quote["05. price"],
    changePercent: quote["10. change percent"],
    name: quote["01. symbol"],
  });
}