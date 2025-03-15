import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <header className="w-full max-w-4xl mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">
          Expohledávky
        </h1>
        <p className="text-xl text-gray-600">
          Moderní systém pro správu pohledávek
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              Přehled pohledávek
            </h2>
            <p className="text-gray-700 mb-4">
              Sledujte stav všech vašich pohledávek na jednom místě s přehledným
              dashboardem.
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              aria-label="Přejít na přehled pohledávek"
              tabIndex={0}
            >
              Přejít na přehled
            </Link>
          </div>

          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              Správa klientů
            </h2>
            <p className="text-gray-700 mb-4">
              Spravujte své klienty, jejich kontakty a všechny související
              pohledávky.
            </p>
            <Link
              href="/clients"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              aria-label="Přejít na správu klientů"
              tabIndex={0}
            >
              Spravovat klienty
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Potřebujete pomoc? Kontaktujte nás na{' '}
            <a
              href="mailto:info@expohledavky.cz"
              className="text-primary-600 hover:text-primary-800"
              tabIndex={0}
            >
              info@expohledavky.cz
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}