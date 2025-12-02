import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, Database, Shield, Globe, BarChart3, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services - SKYLINK | Comprehensive Technology Solutions",
  description:
    "Explore SKYLINK's comprehensive range of technology services including cloud infrastructure, digital transformation, AI & analytics, and cybersecurity solutions.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Database,
      title: "ERP Systems",
      description: "Full-featured ERP platforms for companies and factories with comprehensive business modules.",
      features: [
        "Accounting & HR Management",
        "Inventory & Procurement",
        "CRM & Manufacturing",
        "Cloud or on-premises deployment",
      ],
      color: "blue",
    },
    {
      icon: Shield,
      title: "Hospital Information Systems (HIS)",
      description: "Complete systems for hospitals and clinics with industry-compliant healthcare modules.",
      features: [
        "Patient Management",
        "Medical Records & Billing",
        "Pharmacy & Laboratory",
        "Healthcare data privacy compliance",
      ],
      color: "red",
    },
    {
      icon: Globe,
      title: "Electronic Archiving Systems",
      description: "Secure, scalable digital archiving solutions for documents and data management.",
      features: [
        "Advanced indexing & search",
        "Automated document workflows",
        "Secure digital storage",
        "Compliance management",
      ],
      color: "purple",
    },
    {
      icon: Cloud,
      title: "Website & App Development",
      description: "Corporate websites, eCommerce platforms, and mobile applications with modern UI/UX design.",
      features: [
        "Corporate websites & portals",
        "eCommerce platforms",
        "iOS & Android mobile apps",
        "Modern UI/UX design",
      ],
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Custom Restaurant Solutions",
      description: "Smart restaurant ordering platforms and management systems with POS integration.",
      features: [
        "Restaurant ordering platforms",
        "Admin control panels",
        "POS system integration",
        "Delivery system integration",
      ],
      color: "orange",
    },
    {
      icon: Zap,
      title: "Marketing & Business Consultancy",
      description: "Digital marketing services and business strategy consulting for growth optimization.",
      features: [
        "SEO & content marketing",
        "Lead generation strategies",
        "Business strategy consulting",
        "CRM & sales optimization",
      ],
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      yellow: "bg-yellow-100 text-yellow-600",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive technology solutions designed to streamline operations, enhance customer experiences, and
              drive business growth across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    <Link href="/contact" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">
                We analyze your needs and current infrastructure to understand your challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy tailored to your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Our expert team executes the solution with precision and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and optimization to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how SKYLINK can help transform your business with our innovative technology solutions.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
