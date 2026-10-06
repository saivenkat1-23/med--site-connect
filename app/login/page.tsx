"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function LoginPage() {
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [loginMethod, setLoginMethod] = useState("email")

  const handleSendOtp = () => {
    setIsOtpSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login to MedSite Connect</CardTitle>
            <CardDescription>Access your medical records and more</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" onValueChange={setLoginMethod}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email & Password</TabsTrigger>
                <TabsTrigger value="otp">OTP Verification</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="otp">
                <form>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>

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
                    ) : null}

                    <Button type="button" className="w-full" onClick={isOtpSent ? undefined : handleSendOtp}>
                      {isOtpSent ? "Verify OTP" : "Send OTP"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
