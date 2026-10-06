import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { FileText, Calendar, BarChart2, Shield, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  About MedSite Connect
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to simplify healthcare management and improve access to medical services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  MedSite Connect was founded in 2020 with a simple mission: to make healthcare more accessible and
                  manageable for everyone. Our founders, a team of healthcare professionals and technology experts,
                  recognized the challenges patients face in managing their medical records and finding appropriate
                  healthcare services.
                </p>
                <p className="text-muted-foreground">
                  What started as a simple record management system has evolved into a comprehensive platform that
                  connects patients with healthcare providers, simplifies document management, and provides valuable
                  insights through automated report analysis.
                </p>
                <p className="text-muted-foreground">
                  Today, MedSite Connect serves thousands of users across the country, helping them take control of
                  their healthcare journey with secure, user-friendly tools.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="MedSite Connect team"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're on a mission to transform healthcare management through technology
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Security & Privacy</h3>
                <p className="text-muted-foreground">
                  We prioritize the security and privacy of your medical information with industry-leading encryption
                  and access controls.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe healthcare services should be accessible to everyone, regardless of location or technical
                  expertise.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to provide cutting-edge solutions that simplify healthcare management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Services</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  MedSite Connect offers a range of services designed to simplify healthcare management
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Record Management</h3>
                <p className="text-muted-foreground">
                  Securely upload, store, and access your medical records anytime, anywhere. Share them with healthcare
                  providers as needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Secure document storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Easy sharing with doctors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Access control with unique ID</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <Calendar className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Camp Scheduling</h3>
                <p className="text-muted-foreground">
                  Find and register for health camps in your area. Organizations can schedule and manage camps through
                  our platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Location-based notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Easy registration process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Camp management for organizations</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <BarChart2 className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Report Analysis</h3>
                <p className="text-muted-foreground">
                  Upload your medical reports for automated analysis. Get insights and share them with your healthcare
                  provider.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI-powered analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Key findings highlighted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Doctor-friendly reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the dedicated professionals behind MedSite Connect
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 rounded-full bg-muted-foreground/10 overflow-hidden">
                  <Image src="/placeholder.svg" alt="Team member" width={128} height={128} className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Former hospital administrator with 15+ years of experience in healthcare management.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 rounded-full bg-muted-foreground/10 overflow-hidden">
                  <Image src="/placeholder.svg" alt="Team member" width={128} height={128} className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & CTO</p>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Software engineer with expertise in healthcare technology and data security.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 rounded-full bg-muted-foreground/10 overflow-hidden">
                  <Image src="/placeholder.svg" alt="Team member" width={128} height={128} className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Dr. Emily Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Medical Director</p>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Practicing physician with a passion for making healthcare more accessible through technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-muted-foreground">
                  Have questions or feedback? We'd love to hear from you. Reach out to our team using the contact form
                  or the information below.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>contact@medsiteconnect.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>123 Healthcare Ave, Medical District, CA 90210</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button>Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join thousands of users who trust MedSite Connect with their healthcare management
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" variant="secondary">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
