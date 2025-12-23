"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to Zendfi Waitlist</h2>
        <p className="text-lg text-zinc-600 mb-6">Join the waitlist to get early access and updates.</p>
        <div className="flex items-center justify-center gap-4">
          <Button>
            Join Waitlist <FiChevronRight className="ml-2" />
          </Button>
          <ThemeToggle />
        </div>
      </motion.div>
    </section>
  );
}
