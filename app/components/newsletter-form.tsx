"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Loader2, Shield } from "lucide-react"

export function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.email) {
      setError("Email address is required")
      return
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would send the data to your newsletter service
      // Example: await subscribeToNewsletter(formData)

      setIsSubscribed(true)
      setFormData({ name: "", email: "" })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Welcome Aboard!</h3>
          <p className="text-white/90 mb-6 leading-relaxed">
            Thank you for subscribing to our newsletter. You'll receive your first update within the next few days.
          </p>
          <Button
            onClick={() => setIsSubscribed(false)}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Subscribe Another Email
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="text-white">
      <div className="mb-8">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
        <p className="text-white/90 leading-relaxed">
          Subscribe now and never miss out on the latest technology insights and industry updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="newsletter-name" className="text-white/90 text-sm font-medium">
            Full Name (Optional)
          </Label>
          <Input
            id="newsletter-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
          />
        </div>

        <div>
          <Label htmlFor="newsletter-email" className="text-white/90 text-sm font-medium">
            Email Address *
          </Label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
          />
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3">
            <p className="text-red-100 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Subscribe to Newsletter
            </>
          )}
        </Button>

        {/* Privacy Notice */}
        <div className="flex items-start space-x-2 pt-4 border-t border-white/20">
          <Shield className="h-4 w-4 text-white/70 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-white/70 leading-relaxed">
            We respect your privacy. Your email will only be used for our newsletter and you can unsubscribe at any
            time. Read our{" "}
            <a href="#" className="underline hover:text-white transition-colors">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </form>
    </div>
  )
}
