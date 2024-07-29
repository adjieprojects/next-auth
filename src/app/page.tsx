import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Page</h1>

      <Link href={'/login'}>Go To Login</Link>
      <br/><Link href={'/dashboard'}>Go To Dashboard</Link>
    </>
  );
}
