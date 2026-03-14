import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">

      {/* Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[85%] max-w-6xl 
      bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl px-8 py-4 z-50">

        <nav className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold text-teal-600 tracking-wide">
            MyApp
          </h1>

          {/* Links */}
          <div className="flex gap-8 text-gray-700 font-medium">

            <Link
              to="/"
              className="hover:text-teal-600 transition duration-300 hover:scale-110"
            >
              Home
            </Link>

            <Link
              to="/reduxtoolkit"
              className="hover:text-teal-600 transition duration-300 hover:scale-110"
            >
              Redux Toolkit
            </Link>

            <Link
              to="/zustand"
              className="hover:text-teal-600 transition duration-300 hover:scale-110"
            >
              Zustand
            </Link>

          </div>

        </nav>
      </header>

      {/* Content */}
      <main className="flex-grow pt-28 w-[85%] max-w-6xl m-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">

        <div className="grid md:grid-cols-4 gap-10 w-[85%] max-w-6xl m-auto py-14">

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About</h2>
            <p className="text-sm leading-6">
              Modern React layout with Tailwind CSS. Clean design, fast UI and
              responsive structure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Pages</h2>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 cursor-pointer">Home</li>
              <li className="hover:text-teal-400 cursor-pointer">Redux Toolkit</li>
              <li className="hover:text-teal-400 cursor-pointer">Zustand</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 cursor-pointer">Docs</li>
              <li className="hover:text-teal-400 cursor-pointer">Tutorials</li>
              <li className="hover:text-teal-400 cursor-pointer">Examples</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
            <p>Email: example@mail.com</p>
            <p>GitHub: github.com</p>
          </div>

        </div>

        <div className="border-t border-gray-700 text-center py-5 text-sm">
          © 2026 MyApp. All rights reserved.
        </div>

      </footer>

    </div>
  );
};

export default Layout;