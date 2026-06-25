"use client";
import { useState, useEffect } from "react";

export default function StockApp(){

 const [stock, setStock] = useState<any>(null);

  useEffect(() => {
    getStock("EMP-A");
  }, []);

  const getStock = async (symbol: string) => {
    const res = await fetch(`/api/stock?symbol=${symbol}`);
    const data = await res.json();

    console.log(data);

    setStock(data);
  };

return(
    <section className="w-full mt-6">
    <div className="
        relative
        overflow-hidden
        rounded-3xl
        border border-violet/30
        bg-[#F172A]/80
        p-7.5
        backdrop-blur-xl
        ">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(167,85,247,0.60),transparent_65%)]"/>

        <div className="relative z-10">
        {/*header*/}
        <div className="flex items-center justify-between">
        <h3 className="text-lg fornt-semibold">
           {stock?.name ?? "Stock"}
        </h3>

        <span className="text-sm text-green-500">
          ● Market Open
        </span>
        </div>

        <div className="mt-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            ${stock?.price ?? "—"}
          </h2>

          <p className="mt-2 text-green-500">
            ▲ {stock?.changePercent ?? "0.00"} Today
          </p>
        </div>

        {/*chart*/}
        <div className="mt-8 h-40">
          <svg
            viewBox="0 0 300 120"
            className="h-full w-full"
            fill="none"
            >
            <path
              d="
              M0 95
              L20 90
              L40 70
              L60 60
              L80 75
              L100 65
              L120 45
              L140 50
              L160 70
              L180 60
              L200 68
              L220 40
              L240 55
              L260 45
              L280 35
              L300 10
              "
              stroke="#8b5cf6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />  
            </svg>
        </div>
        </div>
        </div>
      </section>

)
}