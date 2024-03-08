import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const isTrue = params.id === "true";
  return (
    <main>
      <h1>{isTrue ? "Show" : "Hidden"}</h1>
      <Link href={isTrue ? "false" : "true"} replace>
        <button>Switch</button>
      </Link>
    </main>
  );
}
