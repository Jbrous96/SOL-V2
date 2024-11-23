"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[100vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 z-0 hero-gradient"
        style={{ y }}
      />

      <motion.div 
        className="container relative z-10 flex min-h-[100vh] items-center"
        style={{ opacity }}
      >
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            className="hero-text-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="animated-text">
              <div className="text-line">
                <p>Shops</p>
                <p>Today's</p>
                <p>Grow</p>
              </div>
              <div className="text-line">
                <p>Of</p>
                <p>Top</p>
                <p>Future</p>
              </div>
              <div className="text-line">
                <p>Legacy</p>
                <p>Businesses</p>
                <p>Excellence</p>
              </div>
            </div>
          </motion.div>

          <div className="hero-subtext">
            <div className="hero-subtext-inner">
              <p className="max-w-[800px] text-muted-foreground">
                Join our curated directory of exceptional enterprises, from Plano to the world.
                Connect with businesses that are building lasting legacies.
              </p>
            </div>
          </div>

          <div className="hero-buttons mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="group text-lg">
              Submit Your Business
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Explore Directory
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}