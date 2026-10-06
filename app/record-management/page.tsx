import { FileText, Upload, Download, Eye, Search, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function RecordManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Record Management</h1>
            <p className="text-muted-foreground">Securely upload, view, and download your medical reports</p>
          </div>

          <Tabs defaultValue="my-records" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="my-records">My Records</TabsTrigger>
              <TabsTrigger value="upload">Upload New</TabsTrigger>
              <TabsTrigger value="shared">Shared With Me</TabsTrigger>
            </TabsList>

            <TabsContent value="my-records" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 w-full max-w-sm">
                  <Input placeholder="Search records..." />
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
                  <Plus className="mr-2 h-4 w-4" />
                  Upload New
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Example Record Cards */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Blood Test Report</CardTitle>
                      <CardDescription>Uploaded on {new Date().toLocaleDateString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span>PDF Document</span>
                        <span className="text-muted-foreground">2.4 MB</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upload New Medical Record</CardTitle>
                  <CardDescription>
                    Upload your medical reports in PDF format. Your documents are securely stored and can only be
                    accessed with your unique ID.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-10 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <h3 className="font-medium">Drag and drop your file here</h3>
                      <p className="text-sm text-muted-foreground">Supports PDF files up to 10MB</p>
                      <Button className="mt-2">Browse Files</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="document-title" className="text-sm font-medium">
                      Document Title
                    </label>
                    <Input id="document-title" placeholder="e.g., Blood Test Results" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="document-description" className="text-sm font-medium">
                      Description (Optional)
                    </label>
                    <Input id="document-description" placeholder="Brief description of the document" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upload Document</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="shared" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 w-full max-w-sm">
                  <Input placeholder="Search shared records..." />
                  <Button size="icon" variant="outline">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Access Shared Records</CardTitle>
                  <CardDescription>
                    Enter the secure ID provided by the document owner to access shared records.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Enter secure ID" />
                    <Button>Access</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center py-8">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">No shared records found</h3>
                <p className="text-muted-foreground">When someone shares a document with you, it will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
