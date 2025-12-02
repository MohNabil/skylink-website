import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Lightbulb,
  Code,
  Server,
  TestTube,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  Clock,
  Target,
  Shield,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Process - SkyLink | Software Development Lifecycle & Methodology",
  description:
    "Discover SkyLink's comprehensive software development process, from requirements gathering to deployment. Learn about our proven SDLC methodology that ensures high-quality software delivery.",
}

export default function ProcessPage() {
  const processStages = [
    {
      id: 1,
      title: "Requirements Gathering & Business Analysis",
      icon: FileText,
      color: "blue",
      duration: "1-2 weeks",
      team: "Business Analysts",
      description:
        "Our Business Analysts collaborate closely with clients to understand their unique needs, challenges, and objectives. Through careful listening and detailed documentation, we create a comprehensive Business Requirements Document (BRD) that serves as the foundation for the entire project.",
      keyActivities: [
        "Stakeholder interviews and workshops",
        "Current system analysis and gap identification",
        "Business process mapping and optimization",
        "Functional and non-functional requirements definition",
        "Risk assessment and mitigation planning",
        "Project scope and timeline establishment",
      ],
      deliverables: [
        "Business Requirements Document (BRD)",
        "Project scope statement",
        "Risk assessment report",
        "Initial project timeline",
      ],
      tools: ["Microsoft Visio", "Confluence", "JIRA", "Lucidchart"],
      bestPractices: [
        "Active listening and stakeholder engagement",
        "Detailed documentation and validation",
        "Regular client feedback and approval cycles",
        "Clear communication of technical constraints",
      ],
    },
    {
      id: 2,
      title: "Conceptualization & Design",
      icon: Lightbulb,
      color: "purple",
      duration: "2-3 weeks",
      team: "UI/UX Designers",
      description:
        "Our design team transforms the BRD into visual representations, creating intuitive user interfaces that prioritize user experience. We employ user-centric design principles to ensure the final product is both functional and delightful to use.",
      keyActivities: [
        "User persona development and journey mapping",
        "Information architecture and wireframing",
        "Visual design and branding integration",
        "Interactive prototype creation",
        "Usability testing and design validation",
        "Design system and component library creation",
      ],
      deliverables: [
        "User personas and journey maps",
        "Wireframes and mockups",
        "Interactive prototypes",
        "Design system documentation",
        "UI/UX specifications",
      ],
      tools: ["Figma", "Sketch", "Adobe Creative Suite", "InVision", "Principle"],
      bestPractices: [
        "User-centered design approach",
        "Accessibility and inclusive design",
        "Responsive design for all devices",
        "Consistent design language and patterns",
      ],
    },
    {
      id: 3,
      title: "Frontend Development",
      icon: Code,
      color: "green",
      duration: "3-6 weeks",
      team: "Frontend Developers",
      description:
        "Our frontend developers bring designs to life using modern technologies and frameworks. We focus on creating responsive, performant, and accessible user interfaces that provide seamless user experiences across all devices and platforms.",
      keyActivities: [
        "Component-based architecture implementation",
        "Responsive design and cross-browser compatibility",
        "Performance optimization and code splitting",
        "Accessibility implementation (WCAG compliance)",
        "Integration with backend APIs",
        "Unit testing and component testing",
      ],
      deliverables: [
        "Responsive web application",
        "Component library",
        "Frontend documentation",
        "Performance optimization report",
        "Cross-browser compatibility testing",
      ],
      tools: ["React/Next.js", "TypeScript", "Tailwind CSS", "Jest", "Cypress"],
      bestPractices: [
        "Mobile-first responsive design",
        "Progressive web app (PWA) principles",
        "Code reusability and maintainability",
        "Performance monitoring and optimization",
      ],
    },
    {
      id: 4,
      title: "Backend Development",
      icon: Server,
      color: "red",
      duration: "4-8 weeks",
      team: "Backend Developers",
      description:
        "Our backend team builds robust, scalable server-side solutions that power the application. We implement secure APIs, efficient databases, and reliable infrastructure to ensure optimal performance and data integrity.",
      keyActivities: [
        "Database design and optimization",
        "RESTful API development and documentation",
        "Authentication and authorization implementation",
        "Third-party service integrations",
        "Performance optimization and caching",
        "Security implementation and vulnerability testing",
      ],
      deliverables: [
        "Database schema and documentation",
        "RESTful APIs with documentation",
        "Authentication and security systems",
        "Integration modules",
        "Performance benchmarks",
      ],
      tools: ["Node.js/Python", "PostgreSQL/MongoDB", "Docker", "AWS/Azure", "Redis"],
      bestPractices: [
        "Microservices architecture when appropriate",
        "API versioning and documentation",
        "Data security and encryption",
        "Scalable and maintainable code structure",
      ],
    },
    {
      id: 5,
      title: "Testing & Quality Assurance",
      icon: TestTube,
      color: "orange",
      duration: "2-4 weeks",
      team: "QA Engineers",
      description:
        "Our QA team ensures the software meets the highest quality standards through comprehensive testing. We perform various types of testing to identify and resolve defects, ensuring the final product is reliable, secure, and performs optimally.",
      keyActivities: [
        "Test plan development and execution",
        "Functional and regression testing",
        "Performance and load testing",
        "Security and vulnerability testing",
        "User acceptance testing (UAT) coordination",
        "Bug tracking and resolution management",
      ],
      deliverables: [
        "Test plans and test cases",
        "Test execution reports",
        "Performance testing results",
        "Security assessment report",
        "UAT sign-off documentation",
      ],
      tools: ["Selenium", "Jest", "Postman", "JMeter", "OWASP ZAP"],
      bestPractices: [
        "Automated testing integration",
        "Continuous testing in CI/CD pipeline",
        "Risk-based testing approach",
        "Clear defect reporting and tracking",
      ],
    },
    {
      id: 6,
      title: "Deployment & Maintenance",
      icon: Rocket,
      color: "cyan",
      duration: "1-2 weeks + Ongoing",
      team: "DevOps & Support",
      description:
        "Our DevOps team manages the deployment process and provides ongoing maintenance and support. We ensure smooth production releases and offer continuous monitoring, updates, and technical support to keep your system running optimally.",
      keyActivities: [
        "Production environment setup and configuration",
        "Deployment automation and CI/CD pipeline",
        "System monitoring and alerting setup",
        "Performance monitoring and optimization",
        "Regular updates and security patches",
        "24/7 technical support and maintenance",
      ],
      deliverables: [
        "Production deployment",
        "Monitoring and alerting systems",
        "Deployment documentation",
        "Maintenance and support plan",
        "Performance monitoring dashboard",
      ],
      tools: ["Docker", "Kubernetes", "Jenkins", "Grafana", "New Relic"],
      bestPractices: [
        "Blue-green deployment strategies",
        "Automated backup and recovery",
        "Proactive monitoring and alerting",
        "Regular security updates and patches",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      red: "bg-red-100 text-red-600 border-red-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: "from-blue-50 to-blue-100",
      purple: "from-purple-50 to-purple-100",
      green: "from-green-50 to-green-100",
      red: "from-red-50 to-red-100",
      orange: "from-orange-50 to-orange-100",
      cyan: "from-cyan-50 to-cyan-100",
    }
    return gradients[color as keyof typeof gradients] || gradients.blue
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Development Process</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover SkyLink's proven software development lifecycle (SDLC) methodology. From initial client
              engagement to deployment and beyond, we follow a structured approach that ensures high-quality software
              delivery and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Proven Methodology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive 6-stage process that ensures every project is delivered on time, within budget,
              and exceeds client expectations.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processStages.map((stage, index) => (
                <div key={stage.id} className="text-center">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(stage.color)}`}
                    >
                      <stage.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute top-8 left-full w-full h-0.5 bg-gray-300 hidden lg:block">
                      {index < processStages.length - 1 && <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{stage.title}</h3>
                  <Badge variant="outline" className={`${getColorClasses(stage.color)} text-xs`}>
                    {stage.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Stages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {processStages.map((stage, index) => (
              <div key={stage.id} className={`bg-gradient-to-br ${getGradientClasses(stage.color)} rounded-2xl p-8`}>
                <div className="max-w-6xl mx-auto">
                  {/* Stage Header */}
                  <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center ${getColorClasses(stage.color)}`}
                      >
                        <stage.icon className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Badge className={`${getColorClasses(stage.color)} text-lg px-4 py-2`}>Stage {stage.id}</Badge>
                      <Badge variant="outline" className="text-sm">
                        {stage.duration}
                      </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{stage.title}</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{stage.description}</p>
                  </div>

                  {/* Stage Details */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Key Activities */}
                      <Card className="border-0 shadow-lg bg-white">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <Target className="h-6 w-6 text-gray-700" />
                            <CardTitle className="text-xl">Key Activities</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {stage.keyActivities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Team & Tools */}
                      <Card className="border-0 shadow-lg bg-white">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <Users className="h-6 w-6 text-gray-700" />
                            <CardTitle className="text-xl">Team & Tools</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Primary Team:</h4>
                              <Badge className={getColorClasses(stage.color)}>{stage.team}</Badge>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {stage.tools.map((tool, toolIndex) => (
                                  <Badge key={toolIndex} variant="outline" className="text-xs">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Deliverables */}
                      <Card className="border-0 shadow-lg bg-white">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <FileText className="h-6 w-6 text-gray-700" />
                            <CardTitle className="text-xl">Deliverables</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {stage.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-start space-x-3">
                                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Best Practices */}
                      <Card className="border-0 shadow-lg bg-white">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <Shield className="h-6 w-6 text-gray-700" />
                            <CardTitle className="text-xl">Best Practices</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {stage.bestPractices.map((practice, practiceIndex) => (
                              <li key={practiceIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{practice}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Stage Navigation */}
                  {index < processStages.length - 1 && (
                    <div className="text-center mt-12">
                      <div className="flex items-center justify-center">
                        <ArrowDown className="h-8 w-8 text-gray-400 animate-bounce" />
                      </div>
                      <p className="text-gray-600 mt-2">Next Stage</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Our Process Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures consistent quality, reduces risks, and delivers exceptional results for
              every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Rigorous testing and quality checks at every stage ensure bug-free, high-performance software.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Clear timelines and milestone tracking ensure projects are delivered on schedule and within budget.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Client Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Regular communication and feedback loops keep clients involved throughout the development process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Proactive risk assessment and mitigation strategies minimize project risks and ensure success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your requirements and show you how our proven process can deliver exceptional results for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
