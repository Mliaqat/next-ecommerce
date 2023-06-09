import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/admin");
  };
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="./about">About</Link>
        </li>
        <h2>Nested Routing in this Route</h2>
        <li>
          <Link href="./product">Product</Link>
        </li>
        <li>
          <Link href="./events">Event</Link>
        </li>
        <h3>Navigate in next</h3>
        <li onClick={handleNavigate}>Got Admin Page</li>
        <h3>Static Generation</h3>
        <li ><Link href={"./staticGeneration"}>staticGeneration</Link></li>
      </ul>
    </>
  );
}
