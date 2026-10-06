"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navbar from "@/components/navbar"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState("patient")
  const [isOtpSent, setIsOtpSent] = useState(false)

  const handleSendOtp = () => {
    setIsOtpSent(true)
  }

  const handleNextStep = () => {
    setStep(2)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>Join MedSite Connect to manage your medical records</CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleNextStep()
                }}
              >
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <RadioGroup defaultValue="patient" onValueChange={setUserType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="patient" id="patient" />
                        <Label htmlFor="patient">Patient</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doctor" id="doctor" />
                        <Label htmlFor="doctor">Doctor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="organization" id="organization" />
                        <Label htmlFor="organization">Organization</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Continue
                  </Button>
                </div>
              </form>
            ) : (
              <form>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Create Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Verify Phone Number</Label>
                    {isOtpSent ? (
                      <div className="space-y-2">
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input id="otp" placeholder="Enter 6-digit OTP" required />
                        <p className="text-sm text-muted-foreground">
                          Didn't receive the code?{" "}
                          <Button variant="link" className="p-0 h-auto">
                            Resend
                          </Button>
                        </p>
                      </div>
                    ) : (
                      <Button type="button" variant="outline" className="w-full" onClick={handleSendOtp}>
                        Send OTP to Verify
                      </Button>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
