import NavigationItem from "../molecules/NavigationItem";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#123f38] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-lg font-bold tracking-wide sm:text-xl"
        >
          PANGASINAN HERITAGE
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-4 text-sm sm:gap-6 sm:text-base"
        >
          <NavigationItem href="/" label="Home" />
          <NavigationItem href="/heritage" label="Heritage" />
          <NavigationItem href="/places" label="Places" />
          <NavigationItem href="/about" label="About" />
        </nav>
      </div>
    </header>
  );
}