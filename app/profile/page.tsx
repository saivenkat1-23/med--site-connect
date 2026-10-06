import Link from "next/link"
import { User, Mail, Phone, Shield, FileText, Calendar, BarChart2, Edit, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
            <p className="text-muted-foreground">Manage your account settings and view your documents</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[250px_1fr]">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-medium text-lg">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                  <div className="w-full pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm py-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm py-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm py-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span>ID: MED12345</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full gap-2 text-red-500 hover:text-red-500">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="documents">My Documents</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Overview</CardTitle>
                      <CardDescription>View a summary of your account activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex flex-col items-center p-4 border rounded-lg">
                          <FileText className="h-8 w-8 text-primary mb-2" />
                          <h4 className="text-2xl font-bold">12</h4>
                          <p className="text-sm text-muted-foreground">Uploaded Documents</p>
                        </div>
                        <div className="flex flex-col items-center p-4 border rounded-lg">
                          <Calendar className="h-8 w-8 text-primary mb-2" />
                          <h4 className="text-2xl font-bold">3</h4>
                          <p className="text-sm text-muted-foreground">Registered Camps</p>
                        </div>
                        <div className="flex flex-col items-center p-4 border rounded-lg">
                          <BarChart2 className="h-8 w-8 text-primary mb-2" />
                          <h4 className="text-2xl font-bold">8</h4>
                          <p className="text-sm text-muted-foreground">Report Analyses</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-muted rounded-md text-sm">
                            <span>Uploaded Blood Test Report</span>
                            <span className="text-muted-foreground">{new Date().toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted rounded-md text-sm">
                            <span>Registered for Diabetes Awareness Camp</span>
                            <span className="text-muted-foreground">
                              {new Date(Date.now() - 86400000).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted rounded-md text-sm">
                            <span>Updated profile information</span>
                            <span className="text-muted-foreground">
                              {new Date(Date.now() - 172800000).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Documents</CardTitle>
                      <CardDescription>View and manage all your uploaded documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 w-full max-w-sm">
                            <Input placeholder="Search documents..." />
                            <Button size="sm" variant="outline">
                              Search
                            </Button>
                          </div>
                          <Link href="/record-management">
                            <Button>Upload New</Button>
                          </Link>
                        </div>

                        <div className="border rounded-md">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b last:border-b-0">
                              <div className="flex items-center gap-4">
                                <FileText className="h-8 w-8 text-muted-foreground" />
                                <div>
                                  <h4 className="font-medium">Blood Test Report</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Uploaded on {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  Download
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>Manage your password and security preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Change Password</h4>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label htmlFor="current-password" className="text-sm font-medium">
                              Current Password
                            </label>
                            <Input id="current-password" type="password" />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="new-password" className="text-sm font-medium">
                              New Password
                            </label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="confirm-password" className="text-sm font-medium">
                              Confirm New Password
                            </label>
                            <Input id="confirm-password" type="password" />
                          </div>
                          <Button className="mt-2">Update Password</Button>
                        </div>
                      </div>

                      <div className="space-y-2 pt-4 border-t">
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        <Button variant="outline">Enable 2FA</Button>
                      </div>

                      <div className="space-y-2 pt-4 border-t">
                        <h4 className="font-medium">Secure ID</h4>
                        <p className="text-sm text-muted-foreground">Your secure ID is used to access your documents</p>
                        <div className="flex items-center gap-2">
                          <Input value="MED12345" readOnly />
                          <Button variant="outline">Copy</Button>
                        </div>
                        <Button variant="outline" className="mt-2">
                          Generate New ID
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Manage how you receive notifications about your account and activities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="email-notifications"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                            <label htmlFor="email-notifications" className="text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">SMS Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="sms-notifications"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              defaultChecked
                            />
                            <label htmlFor="sms-notifications" className="text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-medium mb-2">Notification Types</h4>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label htmlFor="document-notifications" className="text-sm">
                                Document Updates
                              </label>
                              <input
                                type="checkbox"
                                id="document-notifications"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                defaultChecked
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <label htmlFor="camp-notifications" className="text-sm">
                                Camp Announcements
                              </label>
                              <input
                                type="checkbox"
                                id="camp-notifications"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                defaultChecked
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <label htmlFor="analysis-notifications" className="text-sm">
                                Analysis Results
                              </label>
                              <input
                                type="checkbox"
                                id="analysis-notifications"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                defaultChecked
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <label htmlFor="security-notifications" className="text-sm">
                                Security Alerts
                              </label>
                              <input
                                type="checkbox"
                                id="security-notifications"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                defaultChecked
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <label htmlFor="marketing-notifications" className="text-sm">
                                Marketing & Promotions
                              </label>
                              <input
                                type="checkbox"
                                id="marketing-notifications"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button className="mt-4">Save Preferences</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
