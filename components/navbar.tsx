"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Calendar, BarChart2, User, Info, Menu, X, Activity, Home, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // This would be determined by your authentication state
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MedSite Connect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/record-management"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <FileText className="h-4 w-4" />
            Record Management
          </Link>
          <Link
            href="/camp-scheduling"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <Calendar className="h-4 w-4" />
            Camp Scheduling
          </Link>
          <Link
            href="/report-analysis"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <BarChart2 className="h-4 w-4" />
            Report Analysis
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <Info className="h-4 w-4" />
            About Us
          </Link>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <User className="h-4 w-4" />
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-documents">My Documents</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="gap-1">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "container md:hidden overflow-hidden transition-all",
          isMenuOpen ? "max-h-[400px] py-4" : "max-h-0",
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/record-management"
            className="flex items-center gap-2 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <FileText className="h-5 w-5" />
            Record Management
          </Link>
          <Link
            href="/camp-scheduling"
            className="flex items-center gap-2 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <Calendar className="h-5 w-5" />
            Camp Scheduling
          </Link>
          <Link
            href="/report-analysis"
            className="flex items-center gap-2 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <BarChart2 className="h-5 w-5" />
            Report Analysis
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <Info className="h-5 w-5" />
            About Us
          </Link>

          {isLoggedIn ? (
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                Login
              </Link>
              <Link href="/signup">
                <Button size="sm" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
