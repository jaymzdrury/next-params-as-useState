import { Schema } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { success } = Schema.safeParse({ id });
  if (!success) notFound();

  const isTrue = id === "true";

  return (
    <main>
      <h1>{isTrue ? "Show" : "Hidden"}</h1>
      <Link href={isTrue ? "false" : "true"} replace>
        <button>Switch</button>
      </Link>
    </main>
  );
}
