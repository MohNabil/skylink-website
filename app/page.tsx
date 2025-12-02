import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Star,
  Quote,
  Calendar,
  User,
  Database,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Hospital,
  Factory,
  Lightbulb,
  Users,
  Settings,
  Code,
  DollarSign,
  FileText,
  Target,
} from "lucide-react"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { NewsletterForm } from "./components/newsletter-form"

export default function HomePage() {
  const testimonials = [
    {
      name: "Dr. Ahmad Hassan",
      company: "Regional Medical Center",
      role: "Chief Medical Officer",
      content:
        "SkyLink's Hospital Information System transformed our patient management processes. The system is intuitive and has significantly improved our operational efficiency.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Al-Mahmoud",
      company: "Gulf Manufacturing Co.",
      role: "Operations Director",
      content:
        "The ERP system SkyLink developed for our factory streamlined our entire operation. From inventory to accounting, everything is now integrated and efficient.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Mitchell",
      company: "TechCorp Solutions",
      role: "CEO",
      content:
        "SkyLink delivered a custom web platform that exceeded our expectations. Their attention to detail and professional approach made the entire process seamless.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Digital Transformation in Healthcare: The Future of HIS",
      excerpt:
        "Exploring how Hospital Information Systems are revolutionizing patient care and operational efficiency...",
      author: "SkyLink Team",
      date: "December 15, 2023",
      category: "Healthcare IT",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "ERP Implementation Best Practices for Manufacturing",
      excerpt: "Key strategies for successful ERP deployment in manufacturing environments and factories...",
      author: "SkyLink Team",
      date: "December 12, 2023",
      category: "ERP Systems",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "The Rise of Electronic Archiving in Modern Business",
      excerpt: "How digital document management systems are transforming business operations and compliance...",
      author: "SkyLink Team",
      date: "December 10, 2023",
      category: "Digital Solutions",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const services = [
    {
      icon: Database,
      title: "ERP Systems",
      description: "Full-featured ERP platforms for companies and factories with custom modules.",
      features: ["Accounting & HR modules", "Inventory & Procurement", "Cloud or on-premises deployment"],
      color: "blue",
    },
    {
      icon: Shield,
      title: "Hospital Information Systems",
      description: "Complete HIS platforms for hospitals and clinics with comprehensive modules.",
      features: ["Patient Management", "Medical Records & Billing", "Healthcare compliance"],
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Electronic Archiving",
      description: "Secure, scalable digital archiving solutions for documents and data management.",
      features: ["Advanced indexing & search", "Automated workflows", "Secure document storage"],
      color: "purple",
    },
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Corporate websites, eCommerce platforms, and mobile applications with modern design.",
      features: ["Custom web portals", "iOS & Android apps", "Modern UI/UX design"],
      color: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Empowering Businesses through Digital Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              SkyLink delivers innovative, custom-built technology solutions for businesses worldwide—specializing in
              ERP platforms, healthcare IT systems, and digital transformation across the Arab region, United States,
              and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/services" className="flex items-center">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted Technology Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At SkyLink, we believe in the power of technology to streamline operations, enhance customer experiences,
              and drive business growth. Our team of expert engineers, business analysts, UI/UX designers, and marketing
              professionals ensures every project is executed with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Tailored, high-performance software solutions designed specifically for your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Specialized knowledge in healthcare, manufacturing, and enterprise systems across multiple regions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Serving businesses across the Arab region, United States, and international markets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA after Company Overview */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/about" className="flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Core Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : service.color === "red"
                            ? "bg-red-100 text-red-600"
                            : service.color === "purple"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-green-100 text-green-600"
                      }`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA after Services */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with SKYLINK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">"{testimonial.content}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA after Testimonials */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/about" className="flex items-center">
                Read More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Latest Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the curve with our latest thoughts on technology trends, industry insights, and company
              updates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA after Blog Feed */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/blog" className="flex items-center">
                Read All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with organizations across diverse industries, delivering innovative solutions that
              drive measurable business results.
            </p>
          </div>

          {/* Featured Partners */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Regional Medical Center */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Hospital className="h-6 w-6 text-red-600" />
                  </div>
                  <Badge variant="outline" className="bg-red-100 text-red-600 border-red-200">
                    Healthcare
                  </Badge>
                </div>
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=160"
                    alt="Regional Medical Center"
                    width={160}
                    height={60}
                    className="mx-auto opacity-70"
                  />
                </div>
                <CardTitle className="text-lg text-center">Regional Medical Center</CardTitle>
                <CardDescription className="text-center text-sm">Dubai, UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Hospital Information System</h4>
                    <p className="text-gray-600 text-sm">
                      Complete HIS with patient management, medical records, and billing modules.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">40% improvement in patient care efficiency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">35% reduction in administrative overhead</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gulf Manufacturing Co. */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Factory className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="bg-blue-100 text-blue-600 border-blue-200">
                    Manufacturing
                  </Badge>
                </div>
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=160"
                    alt="Gulf Manufacturing Co."
                    width={160}
                    height={60}
                    className="mx-auto opacity-70"
                  />
                </div>
                <CardTitle className="text-lg text-center">Gulf Manufacturing Co.</CardTitle>
                <CardDescription className="text-center text-sm">Riyadh, Saudi Arabia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Enterprise ERP System</h4>
                    <p className="text-gray-600 text-sm">
                      Full ERP with accounting, HR, inventory, and manufacturing modules.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">50% increase in operational efficiency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">25% reduction in inventory costs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TechCorp Solutions */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-600 border-green-200">
                    Technology
                  </Badge>
                </div>
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=160"
                    alt="TechCorp Solutions"
                    width={160}
                    height={60}
                    className="mx-auto opacity-70"
                  />
                </div>
                <CardTitle className="text-lg text-center">TechCorp Solutions</CardTitle>
                <CardDescription className="text-center text-sm">California, USA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Custom Web Platform</h4>
                    <p className="text-gray-600 text-sm">
                      Modern corporate website with portal functionality and mobile app.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">70% increase in user engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-gray-700">35% improvement in conversion rates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Logos Strip */}
          <div className="mb-12">
            <p className="text-center text-gray-600 mb-8 font-medium">Trusted by 500+ organizations worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Al-Noor University"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Emirates Healthcare"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Atlas Manufacturing"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Golden Gate Restaurant"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Petra Construction"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Digital Innovations"
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>

          {/* CTA after Partners */}
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/partners" className="flex items-center">
                View All Partners
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Idea Submission Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Project Submission</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Ideas Into Reality</h2>
                  <p className="text-xl text-white/90 leading-relaxed mb-6">
                    Share your project vision with our expert team through our guided submission process. Get
                    professional insights, accurate estimates, and a clear roadmap to success.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Free project assessment and consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Detailed proposal with timeline and budget</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Expert guidance from our specialized teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">24-48 hour response time guaranteed</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/submit-project" className="flex items-center">
                      Build Your Project Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    <Link href="/process" className="flex items-center">
                      Learn Our Process
                      <Target className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  {/* Process Steps Preview */}
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-white mb-2">Simple 6-Step Process</h3>
                      <p className="text-white/80 text-sm">From idea to implementation</p>
                    </div>

                    {/* Step Indicators */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Lightbulb, label: "Overview", step: 1 },
                        { icon: Users, label: "Audience", step: 2 },
                        { icon: Settings, label: "Features", step: 3 },
                        { icon: Code, label: "Technical", step: 4 },
                        { icon: DollarSign, label: "Budget", step: 5 },
                        { icon: FileText, label: "Assets", step: 6 },
                      ].map(({ icon: Icon, label, step }) => (
                        <div key={step} className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-white/30">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs text-white/90 font-medium">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/80">Progress Example</span>
                        <span className="text-sm text-white/80">67%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-2/3 transition-all duration-1000"></div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">5 min</div>
                        <div className="text-xs text-white/80">Average completion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">24h</div>
                        <div className="text-xs text-white/80">Response time</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-800" />
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">1000+</div>
                  <div className="text-sm text-white/80">Projects Submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-white/80">Average Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Free</div>
                  <div className="text-sm text-white/80">Initial Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Contact our team of experts and let's discuss your technology needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" name="subject" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Office Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      123 Innovation Drive
                      <br />
                      Tech District, Silicon Valley
                      <br />
                      CA 94000, United States
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      +1 (555) 123-4567
                      <br />
                      Toll-free: +1 (800) 555-SKYLINK
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      info@skylink.com
                      <br />
                      support@skylink.com
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA after Contact Form */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Link href="/contact" className="flex items-center">
                  Visit Our Full Contact Page
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Stay Ahead of the Curve</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Get the latest insights on technology trends, industry best practices, and SkyLink updates
                      delivered directly to your inbox.
                    </p>

                    {/* Newsletter Benefits */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">Weekly technology insights and trends</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Exclusive case studies and success stories</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Early access to new services and features</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="text-gray-700">Industry reports and whitepapers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 lg:p-12 flex flex-col justify-center">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of companies already leveraging SKYLINK's innovative solutions to drive growth and
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="#contact">Start Your Journey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
