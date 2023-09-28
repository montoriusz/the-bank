import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center gap-10 bg-gray-800 p-10 md:flex-row">
      <div className="flex basis-1/2 flex-col items-center justify-center text-green-500">
        <h1 className="bg-gray-800 bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-7xl text-transparent">
          The Bank
        </h1>
        <div className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text font-bold text-transparent">
          Today, tomorrow or never
        </div>
      </div>
      <div className=" flex basis-1/2 flex-col items-center justify-center">
        <Image
          src="/homer.png"
          alt="Homer"
          className="rounded-full object-cover"
          width={300}
          height={200}
        />
      </div>
    </main>
  );
}
