"use client"

import Link from "next/link"

import { useState } from "react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Lightbulb,
  Users,
  Settings,
  Code,
  DollarSign,
  FileText,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Target,
  Zap,
  Globe,
  Database,
  Smartphone,
  Shield,
  BarChart3,
} from "lucide-react"

export default function SubmitProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Project Overview
    projectName: "",
    projectType: "",
    projectDescription: "",
    projectGoals: "",

    // Step 2: Target Audience
    targetAudience: "",
    userTypes: [] as string[],
    geographicScope: "",
    audienceSize: "",

    // Step 3: Key Features
    coreFeatures: [] as string[],
    additionalFeatures: "",
    userExperience: "",

    // Step 4: Technical Requirements
    platforms: [] as string[],
    technologies: [] as string[],
    integrations: "",
    scalabilityNeeds: "",

    // Step 5: Budget & Timeline
    budgetRange: "",
    timeline: "",
    priority: "",
    launchDate: "",

    // Step 6: Existing Assets
    existingAssets: [] as string[],
    designAssets: "",
    technicalDocuments: "",
    additionalInfo: "",

    // Contact Information
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    company: "",
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const projectTypes = [
    { value: "erp", label: "ERP System", icon: Database },
    { value: "healthcare", label: "Healthcare IT", icon: Shield },
    { value: "website", label: "Website Development", icon: Globe },
    { value: "mobile", label: "Mobile Application", icon: Smartphone },
    { value: "ecommerce", label: "E-commerce Platform", icon: BarChart3 },
    { value: "custom", label: "Custom Software", icon: Code },
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitted(true)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Overview</h2>
              <p className="text-gray-600">Tell us about your project vision and goals</p>
            </div>

            <div>
              <Label htmlFor="projectName">Project Name *</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => handleInputChange("projectName", e.target.value)}
                placeholder="Enter your project name"
                className="mt-1"
              />
            </div>

            <div>
              <Label>Project Type *</Label>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {projectTypes.map((type) => (
                  <Card
                    key={type.value}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.projectType === type.value ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
                    onClick={() => handleInputChange("projectType", type.value)}
                  >
                    <CardContent className="p-4 text-center">
                      <type.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium text-sm">{type.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="projectDescription">Project Description *</Label>
              <Textarea
                id="projectDescription"
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                placeholder="Provide a brief overview of your project..."
                rows={4}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="projectGoals">Primary Goals *</Label>
              <Textarea
                id="projectGoals"
                value={formData.projectGoals}
                onChange={(e) => handleInputChange("projectGoals", e.target.value)}
                placeholder="What are the main objectives you want to achieve?"
                rows={3}
                className="mt-1"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Target Audience</h2>
              <p className="text-gray-600">Help us understand who will use your solution</p>
            </div>

            <div>
              <Label htmlFor="targetAudience">Primary Target Audience *</Label>
              <Textarea
                id="targetAudience"
                value={formData.targetAudience}
                onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                placeholder="Describe your primary users (e.g., healthcare professionals, manufacturing workers, students...)"
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label>User Types (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "End Users/Customers",
                  "Administrators",
                  "Managers/Supervisors",
                  "Technical Staff",
                  "External Partners",
                  "Mobile Users",
                ].map((userType) => (
                  <div key={userType} className="flex items-center space-x-2">
                    <Checkbox
                      id={userType}
                      checked={formData.userTypes.includes(userType)}
                      onCheckedChange={(checked) => handleArrayChange("userTypes", userType, checked as boolean)}
                    />
                    <Label htmlFor={userType} className="text-sm">
                      {userType}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="geographicScope">Geographic Scope</Label>
              <Select onValueChange={(value) => handleInputChange("geographicScope", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select geographic scope" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local/City</SelectItem>
                  <SelectItem value="regional">Regional/State</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                  <SelectItem value="global">Global</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="audienceSize">Expected User Base</Label>
              <Select onValueChange={(value) => handleInputChange("audienceSize", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select expected number of users" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">1-100 users</SelectItem>
                  <SelectItem value="medium">100-1,000 users</SelectItem>
                  <SelectItem value="large">1,000-10,000 users</SelectItem>
                  <SelectItem value="enterprise">10,000+ users</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Features</h2>
              <p className="text-gray-600">Define the essential functionalities your solution needs</p>
            </div>

            <div>
              <Label>Core Features (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "User Authentication & Authorization",
                  "Dashboard & Analytics",
                  "Data Management & Storage",
                  "Reporting & Export",
                  "Search & Filtering",
                  "Notifications & Alerts",
                  "File Upload & Management",
                  "Integration with External Systems",
                  "Mobile Responsiveness",
                  "Multi-language Support",
                  "Workflow Management",
                  "Real-time Updates",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.coreFeatures.includes(feature)}
                      onCheckedChange={(checked) => handleArrayChange("coreFeatures", feature, checked as boolean)}
                    />
                    <Label htmlFor={feature} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="additionalFeatures">Additional Features</Label>
              <Textarea
                id="additionalFeatures"
                value={formData.additionalFeatures}
                onChange={(e) => handleInputChange("additionalFeatures", e.target.value)}
                placeholder="Describe any specific features not listed above..."
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="userExperience">User Experience Requirements</Label>
              <Textarea
                id="userExperience"
                value={formData.userExperience}
                onChange={(e) => handleInputChange("userExperience", e.target.value)}
                placeholder="Describe any specific UX requirements, accessibility needs, or design preferences..."
                rows={3}
                className="mt-1"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Technical Requirements</h2>
              <p className="text-gray-600">Specify your technical preferences and constraints</p>
            </div>

            <div>
              <Label>Target Platforms (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "Web Application",
                  "iOS Mobile App",
                  "Android Mobile App",
                  "Desktop Application",
                  "Progressive Web App (PWA)",
                  "API/Backend Only",
                ].map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <Checkbox
                      id={platform}
                      checked={formData.platforms.includes(platform)}
                      onCheckedChange={(checked) => handleArrayChange("platforms", platform, checked as boolean)}
                    />
                    <Label htmlFor={platform} className="text-sm">
                      {platform}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Preferred Technologies (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "React/Next.js",
                  "Node.js",
                  "Python/Django",
                  "PHP/Laravel",
                  "Java/Spring",
                  ".NET",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS Cloud",
                  "Azure Cloud",
                  "Google Cloud",
                  "No Preference",
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      id={tech}
                      checked={formData.technologies.includes(tech)}
                      onCheckedChange={(checked) => handleArrayChange("technologies", tech, checked as boolean)}
                    />
                    <Label htmlFor={tech} className="text-sm">
                      {tech}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="integrations">Required Integrations</Label>
              <Textarea
                id="integrations"
                value={formData.integrations}
                onChange={(e) => handleInputChange("integrations", e.target.value)}
                placeholder="List any third-party systems, APIs, or services that need integration (e.g., payment gateways, CRM systems, email services...)"
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="scalabilityNeeds">Scalability & Performance Requirements</Label>
              <Textarea
                id="scalabilityNeeds"
                value={formData.scalabilityNeeds}
                onChange={(e) => handleInputChange("scalabilityNeeds", e.target.value)}
                placeholder="Describe any specific performance requirements, expected load, or scalability needs..."
                rows={3}
                className="mt-1"
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Budget & Timeline</h2>
              <p className="text-gray-600">Help us understand your project constraints and expectations</p>
            </div>

            <div>
              <Label htmlFor="budgetRange">Budget Range *</Label>
              <Select onValueChange={(value) => handleInputChange("budgetRange", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                  <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                  <SelectItem value="over-500k">Over $500,000</SelectItem>
                  <SelectItem value="discuss">Prefer to discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timeline">Preferred Timeline *</Label>
              <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your preferred timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                  <SelectItem value="1-3months">1-3 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6-12months">6-12 months</SelectItem>
                  <SelectItem value="over-12months">Over 12 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Project Priority</Label>
              <RadioGroup
                value={formData.priority}
                onValueChange={(value) => handleInputChange("priority", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high">High - Need to start immediately</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium - Can wait a few weeks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low">Low - Planning for future</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="launchDate">Desired Launch Date</Label>
              <Input
                id="launchDate"
                type="date"
                value={formData.launchDate}
                onChange={(e) => handleInputChange("launchDate", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Existing Assets & Contact</h2>
              <p className="text-gray-600">Tell us about any existing materials and how to reach you</p>
            </div>

            <div>
              <Label>Existing Assets (Select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "Brand Guidelines/Logo",
                  "UI/UX Designs",
                  "Wireframes/Mockups",
                  "Technical Documentation",
                  "Existing Codebase",
                  "Database Schema",
                  "Content/Copy",
                  "User Research",
                ].map((asset) => (
                  <div key={asset} className="flex items-center space-x-2">
                    <Checkbox
                      id={asset}
                      checked={formData.existingAssets.includes(asset)}
                      onCheckedChange={(checked) => handleArrayChange("existingAssets", asset, checked as boolean)}
                    />
                    <Label htmlFor={asset} className="text-sm">
                      {asset}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="designAssets">Design Assets Details</Label>
              <Textarea
                id="designAssets"
                value={formData.designAssets}
                onChange={(e) => handleInputChange("designAssets", e.target.value)}
                placeholder="Describe any existing design materials, brand guidelines, or visual preferences..."
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="technicalDocuments">Technical Documentation</Label>
              <Textarea
                id="technicalDocuments"
                value={formData.technicalDocuments}
                onChange={(e) => handleInputChange("technicalDocuments", e.target.value)}
                placeholder="Describe any existing technical documentation, system requirements, or architectural decisions..."
                rows={3}
                className="mt-1"
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName">Full Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                    placeholder="your.email@company.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                placeholder="Any additional information, questions, or specific requirements you'd like to share..."
                rows={4}
                className="mt-1"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Project Idea Submitted Successfully!
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Thank you for sharing your project idea with SkyLink. Our team will review your submission and get back
                to you within 24-48 hours with initial feedback and next steps.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-700">Initial review and assessment (24-48 hours)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-700">Preliminary consultation call (if needed)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-700">Detailed proposal and project plan</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/contact">Contact Us Directly</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Project Idea</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Share your vision with us through our guided project submission process. We'll help you articulate your
              ideas and provide expert guidance for your next digital solution.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Step {currentStep} of {totalSteps}
              </h2>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />

            {/* Step indicators */}
            <div className="flex justify-between mt-4">
              {[
                { step: 1, label: "Overview", icon: Lightbulb },
                { step: 2, label: "Audience", icon: Users },
                { step: 3, label: "Features", icon: Settings },
                { step: 4, label: "Technical", icon: Code },
                { step: 5, label: "Budget", icon: DollarSign },
                { step: 6, label: "Assets", icon: FileText },
              ].map(({ step, label, icon: Icon }) => (
                <div
                  key={step}
                  className={`flex flex-col items-center ${step <= currentStep ? "text-blue-600" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      step <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </div>
                  <span className="text-xs font-medium hidden sm:block">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep === totalSteps ? (
                    <Button
                      onClick={handleSubmit}
                      className="bg-blue-600 hover:bg-blue-700 flex items-center"
                      disabled={!formData.contactName || !formData.contactEmail}
                    >
                      Submit Project Idea
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 flex items-center">
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600">Our team is here to assist you throughout the process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Project Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Schedule a free consultation to discuss your project ideas with our experts.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Link href="/contact">Schedule Call</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Quick Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Have quick questions? Our support team is available to help you.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Examples & Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    View examples of successful projects and get inspiration for your submission.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Link href="/partners">View Examples</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
