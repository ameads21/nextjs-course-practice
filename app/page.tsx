import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ProductCart from "./components/ProductCart";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}

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
