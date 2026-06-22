import Image from "next/image";
import Link from "next/link";
//import StockApp from "@/components/ui/StockApp";
import { ThemeToggle } from "./theme-toggle";
import SwiperComponent from "@/components/ui/SwiperComponent";


export default function Home() {
        {/*Array of Tools Data*/}
      const tools = [
        {
          name: "DXP Command Centre",
          image: "/NewRB.png",
          href: "https://techsolutionsdashboards.empireco.ca/dashboard/119df35b-3209-4254-8ba3-4697f3bee82b?selected-page=NzA4NzAyfFZJWnxEQVNIQk9BUkR8NDcwMDYzMjA",
          description: "Track, Troubleshoot, and Optimize"
        },
        
        {
          name: "Place Holder",
          image: "/",
          href: "",
        },

        {
          name: "Place Holder",
          image: "/",
          href: "",
        },

        {
          name: "Place Holder",
          image: "/",
          href: "",
        },
      ];

      const shareData = [
          {time:"9AM", value: 44},
          {time:"10AM", value: 46},
          {time:"11AM", value: 45},
          {time:"12PM", value: 48},
          {time:"1PM", value: 47},
          {time:"2PM", value: 46},
          {time:"3PM", value: 50},
          {time:"4PM", value: 40},
          {time:"5PM", value: 53},
      ];


  return (
     <div className="min-h-screen dark:bg-[#050814] dark:text-white bg-[#f7f7fb] text-zinc-950 transition-all duration-300">
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/enobg.png"
              alt="Logo"
              width={150}
              height={40}
              priority
              className="rounded-sm"
            />
          </div>
          {/*Nav Bar*/}
          <div className="ml-auto mr-6 flex items-center gap-4 md:gap-9 text-sm md:text-base font-bold">
            
          <Link href="/" className="font-medium text-zinc-300 transition hover:text-white">
            Place Holder
          </Link>
          
          <Link href="" className="font-medium text-zinc-300 transition hover:text-white">
            Place Holder
          </Link>
          
          <Link href="" className="font-medium text-zinc-300 transition hover:text-white">
            Place Holder
          </Link>
          
          <Link href="https://www.empireco.ca/quarterly-reports" className="font-medium text-zinc-300 transition hover:text-white">
            Quarterly Reports
          </Link>
          </div>
          <ThemeToggle/>
        </div>
        </header>


        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
          backgroundImage: "url('/her.jpg')",
           }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/80 to-transparent" />

        {/* Purple Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,0.25),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050814] " />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-32 md:py-44 pb-20 md:pb-28">
        <h1 className="max-w-2xl text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          Technology Solutions
        <span className="text-purple-400"> Quick Start</span>
        </h1>

        <div className="mt-6 h-1 w-20 rounded-full bg-purple-500" />
        </div>
        </section>

        <main className="relative z-20 mx-auto -mt-20 max-w-7xl px-4 md:px-8 pb-10">
        {/*Boxes inside the body of the page*/}  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {tools.map((tool, i) => (
            <a
            key={i}
            href={tool.href}
            target="_blank"
            className="
            relative
            group
            h-52 md:h-44
            rounded-3xl
            overflow-hidden
            hover:shadow-[0_0_30px_rgba(255,241,144,0.40)]
            hover:scale-105
            bg-conic/decreasing
            bg-gradient-to-r from-[#340854] to-[#0B1124]
            transition-all
            duration-300
            p-4 md:p-5
            m-0
            "
          >

          {/*Box image*/}
          <div
            className="absolute -inset-10 bg-contain bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${tool.image})`,
            }}
          />

          {/* Dark Overlay */}
          <div
            className="
            absolute
            inset-0
           bg-black/50
           group-hover:bg-black/65
            transition-all
            duration-300
          "
          />

          {/*Box text*/}
          <div className="absolute bottom-2 left-5 right-5 z-10">
          <p className="
            text-sm text-zinc-200
            opacity-0
            translate-y-4
            transition-all duration-300
            group-hover:opacity-200
            group-hover:translate-y-1
            mb-2
          ">
          {tool.description}
          </p>
        <h3 className="text-lg text-white">
          {tool.name}
        </h3>
        </div>
        </a>
        ))}

      </div>

    {/*New share and news section */}
     <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
      {/*News*/}
      <div>
        <section 
        className="
        rounded-3xl
        border border-white/10
        bg-[radial-gradient(circle_at_110%_-10%,rgba(124,58,237,0.60),transparent_60%),radial-gradient(circle_at_-10%_110%,rgba(67,56,202,0.70),transparent_60%)]
        p-6
        mt-6
        backdrop-blur-xl
        ">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold ">
            Latest News
          </h2>
          
          <button className="text-sm text-purple-600 hover:text-purple-700">
            View All 
          </button>
        </div>
        <div className="space-y-4">
          {[
            "News place holder",
            "News",
            "News from empire",
          ].map((news,index) => (
            <div key={index} 
            className="flex item-start gap-4 
            rounded-2xl
            border border-white/50
            bg-white/[0.09]
            p-4
            transition-all
            duration-300
            hover:border-purple-400/30
            hover:bg-white/[0.04]
            "
            >
            <div className="mt-2 h-2 w-2 rounded-full bg-purple-500"/>
            <div className="font-medium">
              <h3>
                {news}
              </h3>

            <p className="mt-1 text-sm ">
              June 10
            </p>
        </div>
        </div>
        ))}
        </div>
        </section>
      </div>
    {/*Stock*/}
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

        <div className="relative z_10">
        <div className="flex items-center justify-between">
        <h3 className="text-lg fornt-semibold">
          Empire Share 
        </h3>

        <span className="text-sm text-green-500">
          ● Market Open
        </span>
        </div>

        <div className="mt-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            $48.12
          </h2>

          <p className="mt-2 text-green-500">
            ▲ 2.34% Today
          </p>
        </div>
 
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
      </div>
      <div className="mt-20 mb-10">
        <SwiperComponent />
      </div>
      </main>

      {/*Footer*/}
     <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10">
  <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 md:px-9 py-7 text-sm">
          {/*Logo*/}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="rounded-xl">
            <Image
              src="/EMP.png"
              alt="Footer Logo"
              width={100}
              height={50} 
            />
            </div>
            <p className="text-zinc-400 text-sm mt-2">
            © 2026 Empire Company Limited 
            </p>
          </div>
          <div className="flex flex-col text-sm items-center md:items-start">
            <p className="text-mauve-400">Contact Us</p>
            <div className="h-1 w-30 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full mt-1 mb-3" />
            <p className=" text-mauve-400">902 752-8371</p>
            <Link href="https://www.empireco.ca/contact" className="hover:text-mauve-100 text-mauve-400">Contact Form →</Link>
            <p className=" text-mauve-400">115 King Street Stellarton B0K 1S0</p>
          </div>
        </div>
      </footer>
     </div>
  );
}
