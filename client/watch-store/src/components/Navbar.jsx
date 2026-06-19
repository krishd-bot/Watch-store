const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-10">
        <div className="flex gap-8 text-white text-sm">
          <a href="/wear">MEN</a>
          <a href="/wear">WOMEN</a>
          <a href="/wear">FAQ</a>
        </div>

        <h1 className="text-white text-xl tracking-[8px]">
          POTER
        </h1>

        <div className="flex gap-6 text-white">
          <span>🔍</span>
          <span>🛒</span>
          <span>☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;