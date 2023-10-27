"use client";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default; // Use imports this way if the page is starting to bog down
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// "use client";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// import _ from 'lodash';
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// }); // Only use this method for large heavy components

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <main>
//       <h1>Hello World</h1>
//       <button onClick={() => setIsVisible(true)}>Show</button>
//       {isVisible && <HeavyComponent />}
//     </main>
//   );
// }

// import { Metadata } from "next";
// import { getServerSession } from "next-auth";
// import Link from "next/link";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import HeavyComponent from "./components/HeavyComponent";
// import ProductCart from "./components/ProductCart";

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main>
//       <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//       <HeavyComponent />
//       <Link href="/users">Users</Link>
//       <ProductCart />
//     </main>
//   );
// }

// export async function generateMetadata(): Promise<Metadata> {
//   // const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "...",
//   };
// }

// import Image from "next/image";

// export default async function Home() {
//   return (
//     <main className="relative h-screen">
//       <Image
//         src="https://bit.ly/react-cover"
//         alt="Chocolate Bar"
//         fill
//         className="object-contain"
//         sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" // This is only letting nextjs know how to size the image based upon the columns that are set
//         quality={100}
//         priority
//         // style={{ objectFit: "cover" }}
//         // Objectfit: contain = fits within the container. But most of the time, use cover
//       />
//     </main>
//   );
// }
