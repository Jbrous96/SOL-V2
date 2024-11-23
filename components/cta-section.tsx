"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-primary-foreground sm:px-12 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <Building2 className="mx-auto mb-8 h-12 w-12" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Join Shops Of Legacy?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            List your business in our directory and connect with customers worldwide.
            Get featured placement and enhance your online presence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90"
            >
              Submit Your Business
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')",
          }}
        />
      </div>
    </section>
  );
}