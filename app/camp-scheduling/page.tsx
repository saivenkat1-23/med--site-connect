"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Users, Search, Filter, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function CampSchedulingPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("upcoming")

  // Sample data for camps
  const upcomingCamps = [
    {
      id: 1,
      name: "Free Health Checkup Camp",
      organizer: "City Health Foundation",
      dateRange: "June 15, 2023 - June 16, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center, 123 Main St",
      spots: "150 spots available",
    },
    {
      id: 2,
      name: "Eye Care Camp",
      organizer: "Vision Care Institute",
      dateRange: "June 20, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Public Library, 456 Oak Ave",
      spots: "100 spots available",
    },
    {
      id: 3,
      name: "Dental Health Camp",
      organizer: "Smile Foundation",
      dateRange: "June 25, 2023 - June 26, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "Community Hall, 789 Pine St",
      spots: "120 spots available",
    },
    {
      id: 4,
      name: "Women's Health Camp",
      organizer: "Women's Health Initiative",
      dateRange: "July 5, 2023",
      time: "8:00 AM - 6:00 PM",
      location: "Medical Center, 101 Elm St",
      spots: "200 spots available",
    },
    {
      id: 5,
      name: "Diabetes Awareness Camp",
      organizer: "Diabetes Care Association",
      dateRange: "July 10, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Medical Center, 456 Oak Ave",
      spots: "80 spots available",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Camp Scheduling</h1>
            <p className="text-muted-foreground">Find and register for health camps in your area</p>
          </div>

          {/* Custom tabs instead of using the Tabs component */}
          <div className="w-full">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "upcoming" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                }`}
              >
                Upcoming Camps
              </button>
              <button
                onClick={() => setActiveTab("registered")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "registered" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                }`}
              >
                My Registrations
              </button>
              <button
                onClick={() => setActiveTab("organize")}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "organize" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"
                }`}
              >
                Organize Camp
              </button>
            </div>

            {/* Upcoming Camps Tab */}
            {activeTab === "upcoming" && (
              <div className="space-y-4 mt-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 w-full max-w-sm">
                    <Input placeholder="Search by location..." />
                    <Button size="icon" variant="outline">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>
                  <Button>
                    <MapPin className="mr-2 h-4 w-4" />
                    Set Location
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingCamps.map((camp) => (
                    <Card key={camp.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{camp.name}</CardTitle>
                        <CardDescription>Organized by {camp.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>{camp.dateRange}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{camp.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{camp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{camp.spots}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Register Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* My Registrations Tab */}
            {activeTab === "registered" && (
              <div className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Diabetes Awareness Camp</CardTitle>
                      <CardDescription>Organized by Diabetes Care Association</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>July 10, 2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Medical Center, 456 Oak Ave</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <span>Registration Confirmed</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button variant="destructive">Cancel</Button>
                    </CardFooter>
                  </Card>

                  <div className="col-span-full text-center py-8 md:col-span-2 lg:col-span-3">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No more registered camps</h3>
                    <p className="text-muted-foreground">Browse upcoming camps and register to see them here.</p>
                    <Button className="mt-4" onClick={() => setActiveTab("upcoming")}>
                      Browse Camps
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Organize Camp Tab */}
            {activeTab === "organize" && (
              <div className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Organize a Health Camp</CardTitle>
                    <CardDescription>Fill in the details to register your organization's health camp</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="camp-name" className="text-sm font-medium">
                        Camp Name
                      </label>
                      <Input id="camp-name" placeholder="e.g., Free Health Checkup Camp" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-medium">
                        Organization Name
                      </label>
                      <Input id="organization" placeholder="Your organization's name" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="start-date" className="text-sm font-medium">
                          Start Date
                        </label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="end-date" className="text-sm font-medium">
                          End Date
                        </label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="start-time" className="text-sm font-medium">
                          Start Time
                        </label>
                        <Input id="start-time" type="time" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="end-time" className="text-sm font-medium">
                          End Time
                        </label>
                        <Input id="end-time" type="time" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <Input id="location" placeholder="Full address of the camp" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium">
                        Description
                      </label>
                      <textarea
                        id="description"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe the services offered at the camp"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="capacity" className="text-sm font-medium">
                        Capacity
                      </label>
                      <Input id="capacity" type="number" placeholder="Maximum number of participants" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Camp</Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
