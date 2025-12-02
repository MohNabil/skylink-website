import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Hospital,
  GraduationCap,
  Utensils,
  Factory,
  Home,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Partners - SkyLink | Trusted Client Relationships & Success Stories",
  description:
    "Discover SkyLink's trusted partnerships and successful project implementations across healthcare, manufacturing, education, and corporate sectors worldwide.",
}

export default function PartnersPage() {
  const featuredPartners = [
    {
      name: "Regional Medical Center",
      logo: "/placeholder.svg?height=80&width=200",
      industry: "Healthcare",
      location: "Dubai, UAE",
      project: "Complete Hospital Information System",
      description:
        "Comprehensive HIS implementation covering patient management, medical records, billing, pharmacy, and laboratory modules.",
      results: [
        "40% improvement in patient care efficiency",
        "35% reduction in administrative overhead",
        "100% compliance with healthcare data privacy",
        "Seamless integration with existing medical equipment",
      ],
      testimonial:
        "SkyLink's HIS transformed our operations completely. The system is intuitive and has significantly improved our patient care quality.",
      testimonialAuthor: "Dr. Ahmad Hassan, Chief Medical Officer",
      color: "red",
      icon: Hospital,
    },
    {
      name: "Gulf Manufacturing Co.",
      logo: "/placeholder.svg?height=80&width=200",
      industry: "Manufacturing",
      location: "Riyadh, Saudi Arabia",
      project: "Enterprise ERP System",
      description:
        "Full-scale ERP implementation with accounting, HR, inventory, procurement, and manufacturing modules.",
      results: [
        "50% increase in operational efficiency",
        "25% reduction in inventory costs",
        "Real-time production planning and control",
        "Integrated financial reporting across all departments",
      ],
      testimonial:
        "The ERP system streamlined our entire operation. From inventory to accounting, everything is now integrated and efficient.",
      testimonialAuthor: "Sarah Al-Mahmoud, Operations Director",
      color: "blue",
      icon: Factory,
    },
    {
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=80&width=200",
      industry: "Technology",
      location: "California, USA",
      project: "Custom Web Platform & Mobile App",
      description:
        "Modern corporate website with custom portal functionality and companion mobile application for iOS and Android.",
      results: [
        "70% increase in user engagement",
        "35% improvement in conversion rates",
        "Mobile-first responsive design",
        "Advanced analytics and reporting dashboard",
      ],
      testimonial:
        "SkyLink delivered a platform that exceeded our expectations. Their attention to detail made the entire process seamless.",
      testimonialAuthor: "James Mitchell, CEO",
      color: "green",
      icon: Building2,
    },
  ]

  const additionalPartners = [
    {
      name: "Al-Noor University",
      industry: "Education",
      project: "eLearning Management System",
      location: "Baghdad, Iraq",
      icon: GraduationCap,
      color: "purple",
    },
    {
      name: "Golden Gate Restaurant Chain",
      industry: "Food & Beverage",
      project: "Restaurant Management Platform",
      location: "New York, USA",
      icon: Utensils,
      color: "orange",
    },
    {
      name: "Petra Construction Group",
      industry: "Construction",
      project: "Project Management Portal",
      location: "Amman, Jordan",
      icon: Building2,
      color: "cyan",
    },
    {
      name: "Emirates Healthcare Network",
      industry: "Healthcare",
      project: "Multi-Clinic HIS Integration",
      location: "Abu Dhabi, UAE",
      icon: Hospital,
      color: "red",
    },
    {
      name: "Atlas Manufacturing",
      industry: "Manufacturing",
      project: "Supply Chain ERP Module",
      location: "Cairo, Egypt",
      icon: Factory,
      color: "blue",
    },
    {
      name: "Digital Innovations Inc.",
      industry: "Technology",
      project: "Electronic Archiving System",
      location: "Texas, USA",
      icon: Home,
      color: "green",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building lasting relationships through innovative technology solutions. Discover how SkyLink has helped
              organizations across industries achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Featured Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most impactful partnerships and the transformative solutions we've delivered together.
            </p>
          </div>

          <div className="space-y-16">
            {featuredPartners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(partner.color)}`}
                        >
                          <partner.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                          <p className="text-gray-600">{partner.location}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getColorClasses(partner.color)}>
                        {partner.industry}
                      </Badge>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{partner.project}</h4>
                      <p className="text-gray-600 mb-4">{partner.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {partner.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic mb-2">"{partner.testimonial}"</p>
                      <p className="text-sm font-medium text-gray-900">— {partner.testimonialAuthor}</p>
                    </div>
                  </div>

                  {/* Logo/Image */}
                  <div
                    className={`bg-gray-100 flex items-center justify-center p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="text-center">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={80}
                        className="mx-auto mb-4 opacity-70"
                      />
                      <div className="text-gray-600 text-sm">
                        <p className="font-medium">{partner.industry} Sector</p>
                        <p>{partner.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">More Trusted Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to work with organizations across diverse industries, delivering tailored solutions that drive
              real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPartners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(partner.color)}`}
                    >
                      <partner.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className={`${getColorClasses(partner.color)} text-xs`}>
                      {partner.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{partner.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium text-sm">{partner.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple sectors, delivering specialized solutions for each industry's unique
              challenges and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: Hospital, count: "150+", color: "red" },
              { name: "Manufacturing", icon: Factory, count: "120+", color: "blue" },
              { name: "Education", icon: GraduationCap, count: "80+", color: "green" },
              { name: "Food & Beverage", icon: Utensils, count: "60+", color: "orange" },
              { name: "Construction", icon: Building2, count: "45+", color: "purple" },
              { name: "Technology", icon: Home, count: "90+", color: "cyan" },
            ].map((industry, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${getColorClasses(industry.color)}`}
                  >
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-500">{industry.count} clients</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Partnership Approach</h2>
              <p className="text-lg text-gray-600">
                We believe in building long-term relationships based on trust, transparency, and mutual success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Collaborative Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    We work closely with your team to understand your unique challenges and develop solutions that fit
                    your specific needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Measurable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Every partnership is focused on delivering tangible business value with clear metrics and measurable
                    outcomes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Our commitment doesn't end at deployment. We provide continuous support and optimization to ensure
                    long-term success.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing community of successful partners and let SkyLink help you achieve your digital
            transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Start Your Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
