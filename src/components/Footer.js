import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12 mb-8">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">

          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link href="/about" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">À propos</Link>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Relations investisseurs</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Emplois</a>
            <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
          </nav>

          <div className="flex gap-4">
            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Other social media icons */}
          </div>

        </div>

        <div className="py-8 text-center text-sm text-gray-400">© 2021-2023 - Présent Autovolo. Tous droits réservés.</div>
      </footer>
    </div>
  );
};

export default Footer;
