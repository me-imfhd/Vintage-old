import { Button } from "@/components/ui/button"
import { getUserAuth } from "@/lib/auth/utils";
import { UserButton } from "@clerk/nextjs";
import { ComputerData } from "@/lib/client-side-hooks/ComputerData";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <main className="">
      <UserButton afterSignOutUrl="/" />
      <pre>{JSON.stringify(userAuth, null, 2)}</pre>
      <ComputerData></ComputerData>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <form>
        <Button>Submit</Button>
      </form>
    </section>
    </main>
  );
}
