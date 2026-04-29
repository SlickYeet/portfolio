import Link from "next/link"

export default function Page() {
  const LINKS: {
    href: string
    name: string
  }[] = [
    {
      href: "https://github.com/SlickYeet",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/lasse-lammers-90a050234",
      name: "LinkedIn",
    },
    {
      href: "https://hub.lx2.dev",
      name: "LX2 Hub",
    },
  ]

  return (
    <>
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        <div className="text-left">
          <h1 className="font-semibold text-xl">Hi, I'm Lasse!</h1>
          <p className="text-lg text-neutral-400">
            You are probably looking for one of these instead:
          </p>
          <ul className="mt-8 grid list-disc grid-cols-1 gap-4 pl-5 text-lg text-neutral-300 sm:grid-cols-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="flex items-center gap-1 transition-colors hover:text-primary"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.name}
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>arrow-up-right</title>
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="flex h-16 items-center justify-center text-center text-neutral-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link className="transition-colors hover:text-primary" href="/">
            Lasse Lammers
          </Link>
          .
        </p>
      </footer>
    </>
  )
}
