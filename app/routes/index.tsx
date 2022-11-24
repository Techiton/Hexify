export default function Index() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-44 p-2 rounded-full" src="Hexify.png" />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-xl justify-center">
            <a className="ml-10 font-NavBarFont font-semibold text-green-900">
              Home
            </a>
            <a className="ml-10 font-NavBarFont font-semibold text-green-900">
              Discover Talent
            </a>
            <a className="ml-10 font-NavBarFont font-semibold text-green-900">
              Explore Jobs
            </a>
            <a className="ml-10 font-NavBarFont font-semibold text-green-900">
              Hexify+
            </a>
          </nav>
          <button className="inline-flex items-center border-2 border-green-900 rounded-full py-1 px-3 focus:outline-none text-lg font-semibold text-green-900 tracking-widest font-NavBarFont mt-4 md:mt-0">
            Signup
          </button>
          <button className="ml-6 inline-flex items-center border-2 border-green-900 rounded-full py-1 px-3 focus:outline-none text-lg font-semibold text-green-900 tracking-widest font-NavBarFont mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
