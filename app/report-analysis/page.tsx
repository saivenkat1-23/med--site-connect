import { BarChart2, Upload, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Navbar from "@/components/navbar"

export default function ReportAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Report Analysis</h1>
            <p className="text-muted-foreground">Upload your medical reports for automated analysis</p>
          </div>

          <Tabs defaultValue="my-analyses" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-analyses">My Analyses</TabsTrigger>
              <TabsTrigger value="upload">Upload New</TabsTrigger>
            </TabsList>

            <TabsContent value="my-analyses" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Analyses</CardTitle>
                  <CardDescription>View your recent report analyses and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Blood Test Results</TableCell>
                        <TableCell>{new Date().toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Completed</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            View Analysis
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">X-Ray Report</TableCell>
                        <TableCell>{new Date(Date.now() - 86400000).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-500" />
                            <span>Processing</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" disabled>
                            View Analysis
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">MRI Scan</TableCell>
                        <TableCell>{new Date(Date.now() - 172800000).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <span>Failed</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Retry
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analysis Details</CardTitle>
                  <CardDescription>Select an analysis from the table above to view details</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-10">
                  <BarChart2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">No analysis selected</h3>
                  <p className="text-muted-foreground">
                    Click on "View Analysis" for any completed report to see details
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Report for Analysis</CardTitle>
                  <CardDescription>Upload your medical report to get an automated analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-10 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <h3 className="font-medium">Drag and drop your report here</h3>
                      <p className="text-sm text-muted-foreground">Supports PDF files up to 10MB</p>
                      <Button className="mt-2">Browse Files</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="report-type" className="text-sm font-medium">
                      Report Type
                    </label>
                    <select
                      id="report-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select report type</option>
                      <option value="blood-test">Blood Test</option>
                      <option value="x-ray">X-Ray Report</option>
                      <option value="mri">MRI Scan</option>
                      <option value="ct-scan">CT Scan</option>
                      <option value="prescription">Prescription</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="report-name" className="text-sm font-medium">
                      Report Name
                    </label>
                    <Input id="report-name" placeholder="e.g., Annual Blood Test Results" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="report-date" className="text-sm font-medium">
                      Report Date
                    </label>
                    <Input id="report-date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Any additional information about the report"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="share-with-doctor"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="share-with-doctor" className="text-sm font-medium">
                        Share analysis with my doctor
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upload and Analyze</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                  <CardDescription>Understanding the report analysis process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Upload Your Report</h4>
                        <p className="text-sm text-muted-foreground">Upload your medical report in PDF format</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Automated Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Our system analyzes the report and extracts key information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Review Results</h4>
                        <p className="text-sm text-muted-foreground">
                          View the analysis results with highlighted key findings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Share with Doctor</h4>
                        <p className="text-sm text-muted-foreground">
                          Optionally share the analysis with your healthcare provider
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
