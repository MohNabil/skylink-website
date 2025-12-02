"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Upload,
  CheckCircle,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Development",
      location: "Dubai, UAE",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      experience: "5+ years",
      description:
        "We're looking for a senior full stack developer to join our development team and work on cutting-edge ERP and healthcare systems.",
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with database design and optimization",
        "Knowledge of cloud platforms (AWS, Azure)",
        "Strong problem-solving and communication skills",
      ],
      responsibilities: [
        "Develop and maintain web applications using modern technologies",
        "Collaborate with cross-functional teams to deliver high-quality solutions",
        "Participate in code reviews and maintain coding standards",
        "Mentor junior developers and contribute to team growth",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      experience: "3+ years",
      description:
        "Join our design team to create intuitive and beautiful user experiences for healthcare and enterprise applications.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Strong understanding of user-centered design principles",
        "Experience with healthcare or enterprise software design",
        "Portfolio demonstrating design thinking and problem-solving",
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers to ensure design implementation",
      ],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "California, USA",
      type: "Full-time",
      salary: "$90,000 - $130,000",
      experience: "4+ years",
      description:
        "Help us build and maintain scalable infrastructure for our global client base with modern DevOps practices.",
      requirements: [
        "4+ years of DevOps or infrastructure experience",
        "Expertise in containerization (Docker, Kubernetes)",
        "Experience with cloud platforms and infrastructure as code",
        "Knowledge of CI/CD pipelines and automation tools",
        "Strong scripting skills (Python, Bash, etc.)",
      ],
      responsibilities: [
        "Design and implement scalable infrastructure solutions",
        "Automate deployment and monitoring processes",
        "Ensure system security and compliance",
        "Collaborate with development teams on deployment strategies",
      ],
    },
  ]

  const handleJobSelect = (jobId: number) => {
    setSelectedJob(selectedJob === jobId ? null : jobId)
  }

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setApplicationSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build your career with SkyLink and help us create innovative technology solutions that transform
              businesses worldwide. We're looking for passionate professionals to join our diverse, global team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Join SkyLink?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we provide a platform for growth, innovation, and making a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Global Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Work with talented professionals from 15+ countries and diverse backgrounds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Continuous learning, skill development, and career advancement opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Impactful Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Work on meaningful projects that transform businesses and improve lives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Competitive salary, health benefits, flexible work arrangements, and more.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role to advance your career with SkyLink.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((job) => (
              <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="cursor-pointer" onClick={() => handleJobSelect(job.id)}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {job.experience}
                    </Badge>
                  </div>
                </CardHeader>

                {selectedJob === job.id && (
                  <CardContent className="border-t pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Link href="#application-form">Apply Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Apply Now</h2>
              <p className="text-lg text-gray-600">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </div>

            {applicationSubmitted ? (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in joining SkyLink. We'll review your application and get back to you
                    within 5 business days.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleApplicationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Input id="position" name="position" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" name="experience" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter *</Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <div className="mt-1 flex items-center space-x-4">
                        <Button type="button" variant="outline" className="flex items-center">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload File
                        </Button>
                        <span className="text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
