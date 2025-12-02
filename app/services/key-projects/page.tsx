import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Building2, Hospital, GraduationCap, Utensils, Factory, Home } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Key Projects - SkyLink | Successful Technology Implementations",
  description:
    "Explore SkyLink's successful project implementations across healthcare, manufacturing, education, and corporate sectors with proven results.",
}

export default function KeyProjectsPage() {
  const projects = [
    {
      icon: Hospital,
      title: "Healthcare Solutions",
      description: "HIS platforms for hospitals and clinics",
      details:
        "Complete Hospital Information Systems with patient management, medical records, billing, and pharmacy modules.",
      industry: "Healthcare",
      color: "red",
      achievements: [
        "Improved patient care efficiency by 40%",
        "Reduced administrative overhead by 35%",
        "Enhanced data security and compliance",
        "Streamlined billing and pharmacy operations",
      ],
    },
    {
      icon: Factory,
      title: "Industrial ERP Solutions",
      description: "ERP solutions for factories and enterprises",
      details:
        "Comprehensive ERP systems integrating accounting, HR, inventory, procurement, and manufacturing modules.",
      industry: "Manufacturing",
      color: "blue",
      achievements: [
        "Increased operational efficiency by 50%",
        "Reduced inventory costs by 25%",
        "Improved production planning accuracy",
        "Enhanced financial reporting and control",
      ],
    },
    {
      icon: Building2,
      title: "Construction & Real Estate",
      description: "Project Tracking & Submittal Management Portal",
      details:
        "Custom project management systems for construction companies with submittal tracking and document management.",
      industry: "Construction",
      color: "orange",
      achievements: [
        "Streamlined project documentation",
        "Improved submittal approval process",
        "Enhanced project timeline tracking",
        "Reduced project delays by 30%",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "eLearning platforms and online course systems",
      details:
        "Comprehensive learning management systems with course creation, student tracking, and assessment tools.",
      industry: "Education",
      color: "green",
      achievements: [
        "Enabled remote learning capabilities",
        "Improved student engagement by 60%",
        "Automated assessment and grading",
        "Enhanced course content management",
      ],
    },
    {
      icon: Utensils,
      title: "Food & Beverage Solutions",
      description: "Custom restaurant management platforms",
      details:
        "Smart restaurant ordering systems with inventory management, POS integration, and delivery coordination.",
      industry: "Food & Beverage",
      color: "purple",
      achievements: [
        "Increased order processing speed by 45%",
        "Reduced food waste by 20%",
        "Improved customer satisfaction scores",
        "Streamlined delivery operations",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Solutions",
      description: "High-performance websites and mobile apps",
      details:
        "Custom corporate websites, web portals, and mobile applications with modern design and advanced functionality.",
      industry: "Corporate",
      color: "cyan",
      achievements: [
        "Enhanced brand presence and visibility",
        "Improved user engagement by 70%",
        "Increased conversion rates by 35%",
        "Optimized mobile user experience",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      red: "bg-red-100 text-red-600 border-red-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Key Projects</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              SkyLink has successfully delivered innovative technology solutions across various industries, transforming
              business operations and driving measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Successful Implementations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse portfolio showcases successful technology implementations that have delivered tangible
              business value across multiple sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(project.color)}`}
                      >
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-gray-500">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className={getColorClasses(project.color)}>
                      {project.industry}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{project.details}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions tailored to each sector's
              unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: Hospital, color: "red" },
              { name: "Manufacturing", icon: Factory, color: "blue" },
              { name: "Construction", icon: Building2, color: "orange" },
              { name: "Education", icon: GraduationCap, color: "green" },
              { name: "Food & Beverage", icon: Utensils, color: "purple" },
              { name: "Corporate", icon: Home, color: "cyan" },
            ].map((industry, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${getColorClasses(industry.color)}`}
                  >
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing list of successful clients and let SkyLink transform your business with innovative
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
