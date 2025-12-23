"use client"

import WaitlistForm from "@/components/waitlist-form"
import { ArrowRight, BookOpen, FileText, Code2, Bot, Zap, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Starfield from "@/components/star-field"

export default function Waitlist() {
  const HoverBorderBtn = ({ children, href, newTab = false, className = "" }: { children: React.ReactNode; href: string; newTab?: boolean; className?: string }) => {
  return (
    <Link 
      href={href} 
      target={newTab ? "_blank" : undefined} 
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`relative group block w-full sm:w-auto rounded-lg overflow-hidden p-[1px] h-12 ${className}`}
    >
      {/* 1. The Moving Line (Hidden by default, spins on hover) */}
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,theme(colors.accent.DEFAULT)_10%,transparent_20%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* 2. The Static Border (Visible by default, hidden on hover if you want the line to replace it, or kept for contrast) */}
      <div className="absolute inset-0 bg-border opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

      {/* 3. The Body (Solid background, sits on top of the effects) */}
      <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-lg bg-background px-8 text-sm font-medium text-foreground z-10">
        {children}
      </div>
    </Link>
  );
};
  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">

      <Starfield className="rounded-2xl hidden dark:block" />

      <header className="w-full border-b border-border/10 bg-background/50 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            <Image
              src="/logo.png"
              alt="Zendfi Logo"
              width={120}
              height={32}
              className="h-8 w-auto filter hue-rotate-[19deg] dark:hue-rotate-[13deg] brightness-110"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="https://docs.zendfi.tech" className="text-sm text-muted-foreground hover:text-accent">Docs</Link>
            <Link href="https://github.com/zendfi" className="text-sm text-muted-foreground hover:text-accent">Github</Link>
            <Link href="https://discord.gg/PyN2nzBG4E" className="text-sm text-muted-foreground hover:text-accent">Community</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-start mb-24">

            {/* Left Column: Text */}
            <div className="space-y-10">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
                >
                  One infrastructure. <br />
                  Two use cases. <br />
                  <span className="text-accent">Zero compromise.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-muted-foreground mb-8 text-lg sm:text-xl leading-relaxed max-w-lg"
                >
                  Solana is the fastest blockchain for payments, but integration is hard. We fix that.
                  From <strong>seven lines of code</strong> for merchants to <strong>bounded autonomy</strong> for AI agents.
                </motion.p>

                {/* Feature List - Updated based on new text */}
                <div className="space-y-6 mb-10 py-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded-lg text-accent">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">For Merchants</h3>
                      <p className="text-muted-foreground">Seven lines of code. &lt;15 minute integration. 0.6% all-in fees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded-lg text-accent">
                      <Bot size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">For AI Agents</h3>
                      <p className="text-muted-foreground">Bounded payment authority. Strict limits with cryptographic attestation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-2 rounded-lg text-accent">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">The Result</h3>
                      <p className="text-muted-foreground">2-second settlement. Gasless for users. Full auditability.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="https://blog.zendfi.tech">
                    <Button variant="default" size="lg" className="h-12 px-8 text-base gap-2 rounded-full">
                      See Blog <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link href="https://docs.zendfi.tech">
                    <Button variant="ghost" size="lg" className="h-12 px-8 text-base rounded-full">
                      Read Docs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Form */}
            <div className="relative w-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-border/50 sticky top-24 overflow-hidden"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Join the waitlist</h2>
                  <p className="text-sm text-muted-foreground">
                    Get early access. Developers, fintech teams, and AI platforms welcome.
                  </p>
                </div>

                <div className="w-full">
                  <WaitlistForm />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-24 auto-rows-fr">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 border border-border/40 bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="mb-4 text-accent"><Code2 size={32} /></div>
              <h4 className="font-semibold mb-3 text-xl">Seven Lines of Code</h4>
              <p className="text-muted-foreground leading-relaxed">
                Developers shouldn't waste weeks building what should take 15 minutes. Import the SDK, create a payment, and settle instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl p-8 border border-border/40 bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="mb-4 text-accent"><Bot size={32} /></div>
              <h4 className="font-semibold mb-3 text-xl">Bounded Autonomy</h4>
              <p className="text-muted-foreground leading-relaxed">
                Don't give agents your credit card. Delegate payment authority with bounded risk. Set expiry hours and max spend limits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-8 border border-border/40 bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="mb-4 text-accent"><ShieldCheck size={32} /></div>
              <h4 className="font-semibold mb-3 text-xl">Zero Compromise</h4>
              <p className="text-muted-foreground leading-relaxed">
                0.6% all-in fees. 2-second settlement. Full webhook system. Maintain full custody while scaling from humans to agents.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/30  p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full opacity-20 transform scale-75 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Built for the agent economy</h3>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
                Delegate payment authority with bounded risk, instant settlement, and simple integration.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
    <HoverBorderBtn href="https://docs.zendfi.tech">
        <BookOpen size={18} />
        Documentation
    </HoverBorderBtn>

    <HoverBorderBtn href="https://blog.zendfi.tech" newTab>
        <FileText size={18} />
        Blog
    </HoverBorderBtn>

    <HoverBorderBtn href="https://discord.gg/PyN2nzBG4E" newTab>
        <FaDiscord size={18} />
        Join our Discord
    </HoverBorderBtn>

    <HoverBorderBtn href="https://x.com/zendfi_" newTab>
        <FaXTwitter size={18} />
        @zendfi_
    </HoverBorderBtn>
</div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="mt-12 py-6 border-t border-border/30 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} ZendFi
        </div>
      </footer>
    </section>
  )
}