import { useState } from "react"
import { Link } from "@nextui-org/react"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    (<div
      className={`flex flex-col min-h-[100dvh] ${
        isDarkMode ? "bg-muted text-primary-foreground" : "bg-background text-foreground"
      }`}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Tech Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              isDarkMode
                ? "text-primary-foreground hover:text-primary-foreground"
                : "text-foreground hover:text-foreground"
            }`}
            prefetch={false}>
            Services
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              isDarkMode
                ? "text-primary-foreground hover:text-primary-foreground"
                : "text-foreground hover:text-foreground"
            }`}
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              isDarkMode
                ? "text-primary-foreground hover:text-primary-foreground"
                : "text-foreground hover:text-foreground"
            }`}
            prefetch={false}>
            Clients
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              isDarkMode
                ? "text-primary-foreground hover:text-primary-foreground"
                : "text-foreground hover:text-foreground"
            }`}
            prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-4"
          onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </header>
      <main className="flex-1">
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${
            isDarkMode ? "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]" : "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]"
          }`}>
          <div
            className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}>
                  Elevate Your Tech Solutions
                </h1>
                <p
                  className={`max-w-[600px] ${
                    isDarkMode ? "text-muted-foreground" : "text-muted-foreground"
                  } md:text-xl`}>
                  Unlock the power of cutting-edge technology to transform your business. Acme Tech Solutions provides
                  innovative, tailored solutions to help you thrive in the digital age.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className={`inline-flex h-10 items-center justify-center rounded-md ${
                    isDarkMode ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                  } px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                  prefetch={false}>
                  Get Started
                </Link>
                <Link
                  href="#"
                  className={`inline-flex h-10 items-center justify-center rounded-md ${
                    isDarkMode
                      ? "border border-input bg-muted text-primary-foreground"
                      : "border border-input bg-background text-foreground"
                  } px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                  prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-end">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square" />
            </div>
          </div>
        </section>
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${isDarkMode ? "bg-muted" : "bg-background"}`}>
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className={`inline-block rounded-lg ${isDarkMode ? "bg-muted" : "bg-muted"} px-3 py-1 text-sm`}>
                  Our Services
                </div>
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}>
                  Tailored Tech Solutions
                </h2>
                <p
                  className={`max-w-[900px] ${
                    isDarkMode ? "text-muted-foreground" : "text-muted-foreground"
                  } md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}>
                  Acme Tech Solutions offers a wide range of cutting-edge services to help your business thrive in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className={`rounded-xl ${isDarkMode ? "bg-muted" : "bg-muted"} p-6 shadow-lg`}>
                  <div className="grid gap-1">
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                      }`}>
                      Cloud Solutions
                    </h3>
                    <p
                      className={`${isDarkMode ? "text-muted-foreground" : "text-muted-foreground"}`}>
                      Leverage the power of the cloud to scale your infrastructure, improve reliability, and reduce
                      costs.
                    </p>
                    <Link
                      href="#"
                      className={`inline-flex h-9 items-center justify-center rounded-md ${
                        isDarkMode ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                      } px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                      prefetch={false}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className={`rounded-xl ${isDarkMode ? "bg-muted" : "bg-muted"} p-6 shadow-lg`}>
                  <div className="grid gap-1">
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                      }`}>
                      Data Analytics
                    </h3>
                    <p
                      className={`${isDarkMode ? "text-muted-foreground" : "text-muted-foreground"}`}>
                      Unlock the power of your data with our advanced analytics solutions, helping you make informed,
                      data-driven decisions.
                    </p>
                    <Link
                      href="#"
                      className={`inline-flex h-9 items-center justify-center rounded-md ${
                        isDarkMode ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                      } px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                      prefetch={false}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className={`rounded-xl ${isDarkMode ? "bg-muted" : "bg-muted"} p-6 shadow-lg`}>
                  <div className="grid gap-1">
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                      }`}>
                      Cybersecurity
                    </h3>
                    <p
                      className={`${isDarkMode ? "text-muted-foreground" : "text-muted-foreground"}`}>
                      Protect your business from cyber threats with our comprehensive security solutions, ensuring your
                      data and systems are safe.
                    </p>
                    <Link
                      href="#"
                      className={`inline-flex h-9 items-center justify-center rounded-md ${
                        isDarkMode ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                      } px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                      prefetch={false}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div
                  className={`rounded-xl ${isDarkMode ? "bg-muted" : "bg-muted"} p-6 shadow-lg`}>
                  <div className="grid gap-1">
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                      }`}>
                      Software Development
                    </h3>
                    <p
                      className={`${isDarkMode ? "text-muted-foreground" : "text-muted-foreground"}`}>
                      Our team of expert developers can create custom software solutions tailored to your unique
                      business needs.
                    </p>
                    <Link
                      href="#"
                      className={`inline-flex h-9 items-center justify-center rounded-md ${
                        isDarkMode ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"
                      } px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                      prefetch={false}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${
            isDarkMode ? "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]" : "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]"
          }`}>
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className={`inline-block rounded-lg ${isDarkMode ? "bg-muted" : "bg-muted"} px-3 py-1 text-sm`}>
                  Our Achievements
                </div>
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}>
                  Trusted by Leading Brands
                </h2>
                <p
                  className={`max-w-[900px] ${
                    isDarkMode ? "text-muted-foreground" : "text-muted-foreground"
                  } md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}>
                  Acme Tech Solutions has a proven track record of delivering innovative solutions to some of the
                  world's most forward-thinking companies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function MoonIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function SunIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
