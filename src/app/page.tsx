import Image from "next/image";
import Logo from "@/app/assets/images/logo.png"

export default function Home() {
  return (
    <div className='wrapper w-full h-full'>
      <section className='header min-h-22 w-full bg-black '>
        <Image
          className="dark:invert"
          src={Logo}
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        dfsd
      </section>
      <main className='main bg-white w-full h-screen rounded-4xl -mt-20'>
        sdf
      </main>
    </div>
  );
}
