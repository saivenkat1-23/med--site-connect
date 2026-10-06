import Link from "next/link"
import Image from "next/image"
import {
  FileText,
  Calendar,
  BarChart2,
  User,
  Shield,
  Bell,
  Upload,
  Download,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Health Records, Simplified
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MedSite Connect helps you securely manage medical records, find health camps, and get expert analysis
                  of your reports.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg"
                alt="Medical professionals"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                MedSite Connect offers three core services to help you manage your healthcare journey
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            {/* Record Management */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Record Management</h3>
              <p className="text-center text-muted-foreground">
                Securely upload, download, and view your medical reports with your unique ID
              </p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-primary" />
                  <span className="text-sm">Upload medical reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-primary" />
                  <span className="text-sm">Download for offline use</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">Secure access with unique ID</span>
                </div>
              </div>
              <Link href="/record-management" className="w-full">
                <Button variant="outline" className="w-full">
                  Manage Records
                </Button>
              </Link>
            </div>

            {/* Camp Scheduling */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Camp Scheduling</h3>
              <p className="text-center text-muted-foreground">Stay updated on upcoming health camps in your area</p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-primary" />
                  <span className="text-sm">Get notified about camps</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Find camps in your area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Schedule appointments</span>
                </div>
              </div>
              <Link href="/camp-scheduling" className="w-full">
                <Button variant="outline" className="w-full">
                  View Camps
                </Button>
              </Link>
            </div>

            {/* Report Analysis */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <BarChart2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Report Analysis</h3>
              <p className="text-center text-muted-foreground">
                Get detailed analysis of your medical reports for doctors to review
              </p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-primary" />
                  <span className="text-sm">Upload reports for analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Get automated insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm">Share with your doctor</span>
                </div>
              </div>
              <Link href="/report-analysis" className="w-full">
                <Button variant="outline" className="w-full">
                  Analyze Reports
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Getting started with MedSite Connect is easy
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 lg:gap-12 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Sign Up</h3>
              <p className="text-center text-muted-foreground">Create your account with a secure unique ID</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Upload Documents</h3>
              <p className="text-center text-muted-foreground">Securely upload your medical reports</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Get Analysis</h3>
              <p className="text-center text-muted-foreground">Receive automated insights from your reports</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                4
              </div>
              <h3 className="text-xl font-bold">Share with Doctors</h3>
              <p className="text-center text-muted-foreground">Doctors can access your reports with permission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Healthcare Professionals
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See what doctors and patients are saying about MedSite Connect
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
            {/* Testimonial 1 */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12"></div>
                <div>
                  <h4 className="font-bold">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Cardiologist</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "MedSite Connect has revolutionized how I access patient records. The analysis feature saves me hours of
                work each week."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Patient</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I can easily keep track of all my medical reports in one place. The camp notifications have helped me
                find healthcare services near me."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12"></div>
                <div>
                  <h4 className="font-bold">City Health Foundation</h4>
                  <p className="text-sm text-muted-foreground">Healthcare Organization</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The camp scheduling feature has increased our outreach by 40%. We can now efficiently notify people
                about our health initiatives."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of users who trust MedSite Connect with their medical records
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="gap-1">
                  Sign Up Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">MedSite Connect</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure healthcare management platform for patients and doctors.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/record-management" className="text-muted-foreground hover:text-foreground">
                    Record Management
                  </Link>
                </li>
                <li>
                  <Link href="/camp-scheduling" className="text-muted-foreground hover:text-foreground">
                    Camp Scheduling
                  </Link>
                </li>
                <li>
                  <Link href="/report-analysis" className="text-muted-foreground hover:text-foreground">
                    Report Analysis
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    support@medsiteconnect.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Twitter</span>
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Facebook</span>
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">LinkedIn</span>
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MedSite Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
