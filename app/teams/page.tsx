import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Palette,
  Code,
  Server,
  TestTube,
  Settings,
  Smartphone,
  Users,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Teams - SkyLink | Meet Our Expert Technology Professionals",
  description:
    "Meet the talented professionals behind SkyLink's innovative solutions. Our diverse teams of business analysts, developers, designers, and engineers drive digital transformation worldwide.",
}

export default function TeamsPage() {
  const teams = [
    {
      name: "Business Analysis",
      icon: BarChart3,
      color: "blue",
      description:
        "Strategic thinkers who bridge the gap between business requirements and technical solutions, ensuring every project delivers maximum value.",
      skills: ["Requirements Analysis", "Process Optimization", "Stakeholder Management", "Strategic Planning"],
      members: [
        {
          name: "Sarah Al-Mahmoud",
          role: "Senior Business Analyst",
          experience: "8+ years",
          location: "Dubai, UAE",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["ERP Systems", "Healthcare IT", "Process Mapping"],
          bio: "Specializes in complex ERP implementations and healthcare system analysis with extensive experience in the Arab region.",
        },
        {
          name: "Michael Chen",
          role: "Lead Business Analyst",
          experience: "10+ years",
          location: "California, USA",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Digital Transformation", "Data Analytics", "Agile Methodology"],
          bio: "Expert in digital transformation strategies and data-driven business solutions for enterprise clients.",
        },
        {
          name: "Ahmed Hassan",
          role: "Business Analyst",
          experience: "5+ years",
          location: "Riyadh, Saudi Arabia",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Manufacturing Systems", "Supply Chain", "Quality Assurance"],
          bio: "Focuses on manufacturing and supply chain optimization with deep knowledge of industrial processes.",
        },
      ],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      color: "purple",
      description:
        "Creative professionals who craft intuitive and beautiful user experiences, ensuring our solutions are both functional and delightful to use.",
      skills: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      members: [
        {
          name: "Emily Rodriguez",
          role: "Senior UX Designer",
          experience: "7+ years",
          location: "New York, USA",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Healthcare UX", "Mobile Design", "Design Systems"],
          bio: "Specializes in healthcare and medical system interfaces with a focus on accessibility and user safety.",
        },
        {
          name: "Layla Al-Zahra",
          role: "UI Designer",
          experience: "6+ years",
          location: "Cairo, Egypt",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Web Design", "Brand Identity", "Arabic Typography"],
          bio: "Expert in creating culturally appropriate designs for Arab markets with bilingual interface expertise.",
        },
        {
          name: "David Park",
          role: "UX Researcher",
          experience: "4+ years",
          location: "California, USA",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["User Testing", "Analytics", "Behavioral Design"],
          bio: "Conducts comprehensive user research and testing to optimize user experiences across platforms.",
        },
      ],
    },
    {
      name: "Frontend Development",
      icon: Code,
      color: "green",
      description:
        "Skilled developers who bring designs to life, creating responsive and interactive web applications using cutting-edge technologies.",
      skills: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      members: [
        {
          name: "Alex Thompson",
          role: "Senior Frontend Developer",
          experience: "9+ years",
          location: "London, UK",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["React", "Vue.js", "Web Performance", "PWA"],
          bio: "Frontend architecture specialist with expertise in modern JavaScript frameworks and web performance optimization.",
        },
        {
          name: "Fatima Al-Rashid",
          role: "Frontend Developer",
          experience: "5+ years",
          location: "Doha, Qatar",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Angular", "CSS/SASS", "Accessibility", "RTL Support"],
          bio: "Focuses on accessible web development with specialized knowledge in right-to-left language support.",
        },
        {
          name: "James Wilson",
          role: "Frontend Developer",
          experience: "4+ years",
          location: "Toronto, Canada",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["React Native", "TypeScript", "GraphQL", "Testing"],
          bio: "Full-stack frontend developer with strong testing practices and modern development workflows.",
        },
      ],
    },
    {
      name: "Backend Development",
      icon: Server,
      color: "red",
      description:
        "Expert engineers who build robust and scalable server-side solutions, ensuring our applications perform reliably at any scale.",
      skills: ["Node.js/Python", "Database Design", "API Development", "Cloud Architecture"],
      members: [
        {
          name: "Omar Al-Mansouri",
          role: "Senior Backend Developer",
          experience: "10+ years",
          location: "Abu Dhabi, UAE",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Node.js", "PostgreSQL", "Microservices", "AWS"],
          bio: "Backend architecture expert specializing in scalable microservices and cloud-native applications.",
        },
        {
          name: "Lisa Wang",
          role: "Backend Developer",
          experience: "6+ years",
          location: "Singapore",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Python", "Django", "MongoDB", "Docker"],
          bio: "Python specialist with extensive experience in data-heavy applications and containerized deployments.",
        },
        {
          name: "Carlos Martinez",
          role: "Database Architect",
          experience: "12+ years",
          location: "Madrid, Spain",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Database Design", "Performance Tuning", "Data Migration", "Security"],
          bio: "Database expert with deep knowledge in performance optimization and large-scale data migrations.",
        },
      ],
    },
    {
      name: "Quality Assurance",
      icon: TestTube,
      color: "orange",
      description:
        "Meticulous professionals who ensure our solutions meet the highest quality standards through comprehensive testing and validation.",
      skills: ["Test Automation", "Manual Testing", "Performance Testing", "Security Testing"],
      members: [
        {
          name: "Priya Sharma",
          role: "Senior QA Engineer",
          experience: "8+ years",
          location: "Mumbai, India",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Selenium", "API Testing", "Performance Testing", "Agile Testing"],
          bio: "QA automation expert with comprehensive experience in enterprise application testing and CI/CD integration.",
        },
        {
          name: "Mohammed Al-Kindi",
          role: "QA Analyst",
          experience: "5+ years",
          location: "Muscat, Oman",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Manual Testing", "Healthcare Systems", "Compliance Testing", "Documentation"],
          bio: "Specializes in healthcare system testing with deep knowledge of medical software compliance requirements.",
        },
        {
          name: "Jennifer Lee",
          role: "Test Automation Engineer",
          experience: "6+ years",
          location: "Seattle, USA",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Cypress", "Jest", "Load Testing", "Mobile Testing"],
          bio: "Automation specialist focused on modern testing frameworks and mobile application quality assurance.",
        },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      icon: Settings,
      color: "cyan",
      description:
        "Infrastructure experts who ensure seamless deployment, monitoring, and maintenance of our solutions across various environments.",
      skills: ["Cloud Platforms", "CI/CD", "Monitoring", "Security"],
      members: [
        {
          name: "Robert Kim",
          role: "Senior DevOps Engineer",
          experience: "9+ years",
          location: "Seoul, South Korea",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Kubernetes", "AWS", "Terraform", "Monitoring"],
          bio: "Cloud infrastructure specialist with expertise in container orchestration and infrastructure as code.",
        },
        {
          name: "Yusuf Al-Balushi",
          role: "DevOps Engineer",
          experience: "6+ years",
          location: "Kuwait City, Kuwait",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Azure", "Docker", "Jenkins", "Security"],
          bio: "DevOps engineer focused on secure deployment pipelines and cloud security best practices.",
        },
        {
          name: "Anna Kowalski",
          role: "Infrastructure Architect",
          experience: "11+ years",
          location: "Warsaw, Poland",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["System Architecture", "Scalability", "Disaster Recovery", "Compliance"],
          bio: "Infrastructure architect with extensive experience in enterprise-scale system design and disaster recovery.",
        },
      ],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "indigo",
      description:
        "Mobile specialists who create native and cross-platform applications, delivering exceptional user experiences on iOS and Android.",
      skills: ["iOS/Android", "React Native", "Flutter", "Mobile UX"],
      members: [
        {
          name: "Kevin O'Connor",
          role: "Senior Mobile Developer",
          experience: "8+ years",
          location: "Dublin, Ireland",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["iOS", "Swift", "React Native", "App Store Optimization"],
          bio: "iOS specialist with extensive experience in native app development and App Store deployment strategies.",
        },
        {
          name: "Nadia Al-Zahra",
          role: "Mobile Developer",
          experience: "5+ years",
          location: "Beirut, Lebanon",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Android", "Kotlin", "Flutter", "Mobile Security"],
          bio: "Android developer with focus on secure mobile applications and cross-platform development frameworks.",
        },
        {
          name: "Marcus Johnson",
          role: "Mobile UX Specialist",
          experience: "6+ years",
          location: "Austin, USA",
          image: "/placeholder.svg?height=120&width=120",
          expertise: ["Mobile Design", "User Testing", "Accessibility", "Performance"],
          bio: "Mobile UX expert specializing in accessible design and mobile performance optimization.",
        },
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
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
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
      indigo: "from-indigo-50 to-indigo-100",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Teams</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet the talented professionals behind SkyLink's innovative solutions. Our diverse teams of experts work
              collaboratively to deliver exceptional technology solutions that transform businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Avg. Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">7</div>
              <div className="text-gray-600">Specialized Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {teams.map((team, teamIndex) => (
              <div key={teamIndex} className={`bg-gradient-to-br ${getGradientClasses(team.color)} rounded-2xl p-8`}>
                {/* Team Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center ${getColorClasses(team.color)}`}
                    >
                      <team.icon className="h-10 w-10" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{team.name}</h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">{team.description}</p>

                  {/* Team Skills */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {team.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className={`${getColorClasses(team.color)} text-sm`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {team.members.map((member, memberIndex) => (
                    <Card key={memberIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                      <CardHeader className="text-center">
                        <div className="relative mx-auto mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto"
                          />
                        </div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-sm font-medium text-gray-600">{member.role}</CardDescription>
                        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {member.experience}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {member.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-3">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Github className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Team CTA */}
                <div className="text-center">
                  <Button size="lg" className={`${getColorClasses(team.color)} hover:opacity-90`}>
                    <Link href="/careers" className="flex items-center">
                      Join Our {team.name} Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be One Of Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our diverse team of talented professionals and help us build the future of technology. We're always
            looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/careers" className="flex items-center">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
