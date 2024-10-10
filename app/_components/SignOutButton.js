import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 max-md:py-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex max-md:flex-col items-center max-md:gap-0 max-md:text-lg gap-4  xl:font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-6 w-6 max-md:h-5 max-md:w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
