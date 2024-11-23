"use client";

import { Hero } from '@/components/hero';
import { FeaturedBusinesses } from '@/components/featured-businesses';
import { Categories } from '@/components/categories';
import { LatestListings } from '@/components/latest-listings';
import { CTASection } from '@/components/cta-section';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedBusinesses />
      <Categories />
      <LatestListings />
      <CTASection />
    </motion.div>
  );
}