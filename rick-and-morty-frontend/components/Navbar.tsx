import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Rick and Morty App
        </Link>
        <Link href="/characters" className="text-secondary hover:text-primary">
          Personagens
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
