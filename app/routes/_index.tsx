import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Framer Motion Collections" },
    { name: "description", content: "Code by Abiee." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center">
      <h1 className="text-center text-lg font-medium">
        Framer Motion Collections
      </h1>
      <div className="border rounded-3xl max-w-xs w-full p-4 m-4">
        <Link to="/vision-pro" className="underline underline-offset-2">
          Vision Pro
        </Link>
      </div>
    </div>
  );
}
