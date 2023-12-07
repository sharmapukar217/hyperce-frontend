export default function Home() {
  return (
    <div className="px-6 py-3">
      {/* header */}
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

      {/* main content */}
      <main></main>

      {/* Footer */}
      <footer className="block">
        <div className="flex flex-wrap my-auto gap-x-6 gap-y-8">
          <div className="flex items-start min-w-[384px]">
            <img
              width="48"
              height="41"
              className="mr-4 mt-3"
              src="https://eightify.app/shared/static/footer/footer-logo.svg"
              alt="Eightify"
            />
            <div>
              <p className="mb-1">Rational Expressions, Inc</p>
              <p>2023</p>
            </div>
          </div>
          <div className="flex grow space-between flex-wrap items-start">
            <ul className="min-w-[160px]">
              <li className="mb-2 max-w-[180px]">
                <a
                  href="mailto:hello@eightify.app?subject=Eightify"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Συμπέρασμα
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/terms-of-use"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Όροι χρήσης
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/privacy-policy"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Πολιτική Απορρήτου
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/how-to-summarize-a-youtube-video"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Σύντομη περίληψη
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/youtube-summary"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  YouTube video summarizer
                </a>
              </li>
            </ul>
            <ul className="footer-links footer-links__seo">
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/summary"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  YouTube summaries
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/summary/ycombinator"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  YC summaries
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/install?&amp;platform=chrome-extension&amp;place=seo"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Youtube Summary AI
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://eightify.app/el/youtube-summary-with-chatgpt-extension"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  YouTube summary with ChatGPT
                </a>
              </li>
            </ul>
            <ul className="footer-links footer-links__social">
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://twitter.com/eightifyapp"
                  target="_blank"
                  rel="noopener"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Twitter
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://www.instagram.com/eightify.app/"
                  target="_blank"
                  rel="noopener"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Instagram
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://www.linkedin.com/company/eightify"
                  target="_blank"
                  rel="noopener"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Linkedin
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://www.facebook.com/eightifyapp/"
                  target="_blank"
                  rel="noopener"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Facebook
                </a>
              </li>
              <li className="mb-2 max-w-[180px]">
                <a
                  href="https://www.youtube.com/@eightifyapp"
                  target="_blank"
                  rel="noopener"
                  className="text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]">
                  Youtube
                </a>
              </li>
            </ul>
            <select
              id="language-picker"
              className="footer-links__language footer-link language-select text-lg leading-[1.22] -[rgba(0, 0, 0, 0.48)]"
              name="countries">
              <option
                className="language-select__option"
                value="https://eightify.app/summary">
                English
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/zu/summary">
                isiZulu
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/zh-tw/summary">
                繁體中文
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/nl/summary">
                Nederlands
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/hi/summary">
                हिन्दी
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/th/summary">
                ไทย
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/hu/summary">
                Magyar
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/pt-br/summary">
                Português (Brasil)
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/lv/summary">
                Latviešu
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/et/summary">
                Eesti
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/cs/summary">
                Čeština
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/es/summary">
                Español
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/pl/summary">
                Polski
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/bg/summary">
                Български
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/sv/summary">
                Svenska
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/sk/summary">
                Slovenčina
              </option>
              <option
                className="language-select__option"
                selected=""
                value="https://eightify.app/el/summary">
                Ελληνικά
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/fr/summary">
                Français
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/pt-pt/summary">
                Português (Portugal)
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/de/summary">
                Deutsch
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ja/summary">
                日本語
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/uk/summary">
                Українська
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/pt/summary">
                Português
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ko/summary">
                한국어
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/id/summary">
                Indonesia
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/da/summary">
                Dansk
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/he/summary">
                עברית
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ms/summary">
                Bahasa Melayu
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ro/summary">
                Română
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ur/summary">
                اردو
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ar/summary">
                العربية
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/ru/summary">
                Русский
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/fi/summary">
                Suomi
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/bn/summary">
                বাংলা
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/tl/summary">
                Filipino
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/vi/summary">
                Tiếng Việt
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/lt/summary">
                Lietuvių
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/it/summary">
                Italiano
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/tr/summary">
                Türkçe
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/nb/summary">
                Norsk
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/zh/summary">
                简体中文
              </option>
              <option
                className="language-select__option"
                value="https://eightify.app/sl/summary">
                Slovenščina
              </option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}
