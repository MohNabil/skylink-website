import Link from "next/link"
import Image from "next/image"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog - SKYLINK | Technology Insights & Industry News",
  description:
    "Stay updated with the latest technology trends, industry insights, and company news from SKYLINK's expert team.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch in 2024",
      excerpt:
        "Explore the emerging trends in cloud computing that will shape the technology landscape in the coming year.",
      author: "Sarah Chen",
      date: "December 15, 2023",
      category: "Cloud Computing",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "AI-Powered Analytics: Transforming Business Intelligence",
      excerpt:
        "Discover how artificial intelligence is revolutionizing data analytics and business decision-making processes.",
      author: "Michael Rodriguez",
      date: "December 12, 2023",
      category: "Artificial Intelligence",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every organization should implement to protect their remote workforce.",
      author: "Emily Johnson",
      date: "December 10, 2023",
      category: "Cybersecurity",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories: Lessons Learned",
      excerpt:
        "Real-world examples of successful digital transformation initiatives and key takeaways for your organization.",
      author: "David Park",
      date: "December 8, 2023",
      category: "Digital Transformation",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Benefits and Implementation",
      excerpt: "Understanding edge computing technology and how it's changing the way we process and store data.",
      author: "Lisa Wang",
      date: "December 5, 2023",
      category: "Edge Computing",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Sustainable Technology: Building a Greener Future",
      excerpt: "How technology companies are leading the charge in environmental sustainability and green innovation.",
      author: "James Thompson",
      date: "December 3, 2023",
      category: "Sustainability",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "5 min read",
    },
  ]

  const categories = [
    "All",
    "Cloud Computing",
    "Artificial Intelligence",
    "Cybersecurity",
    "Digital Transformation",
    "Edge Computing",
    "Sustainability",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SKYLINK Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay ahead of the curve with insights, trends, and expert analysis from the world of technology and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-100 text-blue-800">Featured</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                    The Future of Cloud Computing: Trends to Watch in 2024
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Explore the emerging trends in cloud computing that will shape the technology landscape in the
                    coming year, from serverless architectures to quantum computing integration.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">Sarah Chen</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>December 15, 2023</span>
                  </div>
                  <Link
                    href="/blog/1"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-300">
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
