const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="bg-[#AEECFF] h-10 hidden md:block">
        <div className="max-w-[1440px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <div className="text-sm font-semibold">
            Prices rising soon, Rs 40,000 from Jan’25
          </div>
          <div className="px-2 py-1 bg-black text-[#EAB308] rounded text-sm font-semibold">
            18 Days to go
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-cyan-500 font-bold text-lg">
              <span className="text-gray-800">Product</span> Space
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Syllabus
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Mentors
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
