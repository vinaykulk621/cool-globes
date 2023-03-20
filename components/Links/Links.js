import Link from "next/link";

export function Links({ prev, next }) {
  return (
    <div className="m-5 flex items-center justify-around font-spotify text-2xl text-white">
      <a
        href={`/${prev}`}
        className="rounded-lg bg-gray-600 p-4 hover:bg-black">
        Previous page
      </a>
      <a
        href={`/${next}`}
        className="rounded-lg bg-gray-600 p-4 hover:bg-black">
        Next Page
      </a>
    </div>
  );
}
