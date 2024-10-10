import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] max-md:grid-cols-1 max-md:grid-rows-[1fr_auto] h-full gap-12 max-md:gap-0 max-md:h-full">
      <SideNavigation />
      {/* The div containing children now occupies full width on mobile */}
      <div className="py-1 max-md:w-full max-md:px-1">{children}</div>
    </div>
  );
}
