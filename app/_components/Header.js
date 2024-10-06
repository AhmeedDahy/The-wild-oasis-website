import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { auth } from "../_lib/auth";
async function Header() {
  const session = await auth();
  return (
    <header className="border-b border-primary-900 px-8 py-5 max-md:px-4 max-md:py-3 max-sm:px-2 max-sm:py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        <Logo />
        <Navigation session={session} />
      </div>
    </header>
  );
}

export default Header;
