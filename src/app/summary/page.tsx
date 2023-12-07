export default function Home() {
  return (
    <div className="px-6 py-3">
      <header className="flex justify-between">
        <a href="https://eightify.app/el">
          <img
            src="https://eightify.app/seo-static/logo.svg"
            alt="Eightify"
            width="172"
            height="40"
          />
        </a>

        <a
          className="hidden md:inline-flex items-center justify-center space-x-2 w-[32%] py-3 font-semibold text-md bg-gray-100 rounded-md"
          href="https://eightify.app/install?&amp;platform=chrome-extension&amp;place=seo&amp;link_location=sticky-header">
          <img
            width="20"
            height="20"
            alt=""
            src="https://eightify.app/seo-static/Chrome_icon.svg"
          />
          <span>Install Chrome extension</span>
        </a>
      </header>
    </div>
  );
}
