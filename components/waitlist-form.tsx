"use client"

import React, { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [interestType, setInterestType] = useState<string>("")
  const [messageText, setMessageText] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [waitlistId, setWaitlistId] = useState<string | null>(null)

  const validate = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please fill all required fields.")
      return false
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(email)) {
      setError("Please enter a valid email address.")
      return false
    }
    setError(null)
    return true
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setMessage(null)
    setError(null)
    setWaitlistId(null)

    const payload: Record<string, unknown> = {
      email,
      full_name: `${firstName} ${lastName}`.trim(),
    }

    // Add optional fields only if they have values
    if (company.trim()) payload.company = company.trim()
    if (role.trim()) payload.role = role.trim()
    if (interestType) payload.interest_type = interestType
    if (messageText.trim()) payload.message = messageText.trim()
    if (referralSource.trim()) payload.referral_source = referralSource.trim()
    if (country.trim()) payload.country = country.trim()

    try {
      const res = await fetch("https://api.zendfi.tech/api/v1/waitlist/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        const successMsg = data?.message ?? "Successfully joined the waitlist! We'll notify you when ZendFi launches."
        setMessage(successMsg)
        if (data?.waitlist_id) setWaitlistId(String(data.waitlist_id))
        // Reset form
        setFirstName("")
        setLastName("")
        setEmail("")
        setCompany("")
        setRole("")
        setInterestType("")
        setMessageText("")
        setReferralSource("")
        setCountry("")
      } else {
        setError(data?.message ?? "Something went wrong. Try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6 bg-transparent">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <div className="text-sm font-medium mb-1">First name *</div>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" />
          </label>
          <label className="block">
            <div className="text-sm font-medium mb-1">Last name *</div>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" />
          </label>
        </div>

        <label className="block">
          <div className="text-sm font-medium mb-1">Email *</div>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
        </label>

        <label className="block">
          <div className="text-sm font-medium mb-1">Company</div>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Corp" />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <div className="text-sm font-medium mb-1">Role</div>
            <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="CTO, Product Manager, etc." />
          </label>

          <label className="block">
            <div className="text-sm font-medium mb-1">Interest type</div>
            <select
              className="h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base"
              value={interestType}
              onChange={(e) => setInterestType(e.target.value)}
            >
              <option className="bg-background" value="">Select type</option>
              <option className="bg-background" value="merchant">Merchant</option>
              <option className="bg-background" value="developer">Developer</option>
              <option className="bg-background" value="investor">Investor</option>
              <option className="bg-background" value="user">User</option>
              <option className="bg-background" value="other">Other</option>
            </select>
          </label>
        </div>

        <label className="block">
          <div className="text-sm font-medium mb-1">Message</div>
          <textarea
            className="w-full rounded-md border bg-transparent px-3 py-2 text-base"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Tell us why you're interested..."
            rows={4}
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <div className="text-sm font-medium mb-1">Referral source</div>
            <Input value={referralSource} onChange={(e) => setReferralSource(e.target.value)} placeholder="Twitter, Email, Friend..." />
          </label>

          <label className="block">
            <div className="text-sm font-medium mb-1">Country</div>
            <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United States" />
          </label>
        </div>

        {error && <div className="text-sm text-destructive" role="alert">{error}</div>}
        {message && (
          <div className="text-sm text-green-600" role="status">
            {message} {waitlistId && <span className="ml-2">ID: <code>{waitlistId}</code></span>}
          </div>
        )}

        <div className="flex gap-3">
          <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90" size="lg" disabled={loading} aria-label="Join waitlist">
            {loading ? "Joining…" : "Join the Waitlist"}
          </Button>
          <Button type="button" variant="outline" size="lg" className="w-full border-border/30" onClick={() => {
            setFirstName(""); setLastName(""); setEmail(""); setCompany(""); setRole(""); setInterestType(""); setMessageText(""); setReferralSource(""); setCountry(""); setError(null); setMessage(null); setWaitlistId(null);
          }} aria-label="Reset form">
            Reset
          </Button>
        </div>
      </form>

      <div className="text-sm text-muted-foreground">
        By joining our waitlist you agree to receive emails from Zendfi about product updates and early access.
      </div>
    </div>
  )
}