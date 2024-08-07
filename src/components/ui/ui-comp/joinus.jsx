
import { Link } from "@nextui-org/react";
import { Card } from "@/components/ui/card"

export function Joinus() {
  return (
    (<div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Us</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock your full potential and be a part of our dynamic team. We offer competitive compensation,
              unparalleled growth opportunities, and a vibrant company culture that empowers you to thrive.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Apply Now
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Work with Us?</h2>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Competitive Compensation</h3>
                  <p className="text-muted-foreground">
                    Enjoy a fair and rewarding compensation package that recognizes your contributions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Unparalleled Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Unlock your full potential with our comprehensive training and development programs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Vibrant Company Culture</h3>
                  <p className="text-muted-foreground">
                    Thrive in an environment that fosters collaboration, innovation, and work-life balance.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Comprehensive Benefits</h3>
                  <p className="text-muted-foreground">
                    Enjoy a robust benefits package that supports your well-being and financial security.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Openings</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse range of job opportunities and find the perfect fit for your skills and aspirations.
            </p>
          </div>
          <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-muted-foreground">Develop cutting-edge software solutions and drive innovation.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Product Manager</h3>
              <p className="text-muted-foreground">
                Lead the development of innovative products and drive customer success.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Marketing Specialist</h3>
              <p className="text-muted-foreground">Craft compelling campaigns and drive brand awareness.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Sales Representative</h3>
              <p className="text-muted-foreground">
                Engage with customers, build relationships, and drive revenue growth.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Data Analyst</h3>
              <p className="text-muted-foreground">
                Uncover insights, drive data-driven decisions, and optimize business performance.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">UI/UX Designer</h3>
              <p className="text-muted-foreground">Create intuitive and visually stunning user experiences.</p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">HR Coordinator</h3>
              <p className="text-muted-foreground">
                Manage employee relations, talent acquisition, and organizational development.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
            <Card className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Finance Analyst</h3>
              <p className="text-muted-foreground">
                Analyze financial data, manage budgets, and drive strategic decision-making.
              </p>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Apply Now
              </Link>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How to Apply</h2>
            <p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to submit your application and join our team.
            </p>
          </div>
          <div className="grid gap-6 mt-8">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Step 1: Review Job Listings</h3>
              <p className="text-muted-foreground">
                Browse our current job openings and find the role that aligns with your skills and experience.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Step 2: Prepare Your Application</h3>
              <p className="text-muted-foreground">
                Gather the required documents, such as your resume, cover letter, and any relevant portfolios or work
                samples.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Step 3: Submit Your Application</h3>
              <p className="text-muted-foreground">
                Click the "Apply Now" button on the job listing and follow the instructions to submit your application.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Step 4: Interview Process</h3>
              <p className="text-muted-foreground">
                If your application is selected, we will contact you to schedule an interview. Be prepared to discuss
                your qualifications and fit for the role.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Step 5: Offer and Onboarding</h3>
              <p className="text-muted-foreground">
                Upon successful completion of the interview process, we will extend a job offer. Once you accept, we
                will guide you through the onboarding process to ensure a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}
