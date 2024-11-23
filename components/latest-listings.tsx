"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const latestListings = [
  {
    id: 1,
    name: "Green Earth Market",
    description: "Organic grocery store featuring local produce and sustainable products",
    category: "Retail",
    location: "Plano, TX",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Digital Solutions Pro",
    description: "Professional IT services and digital transformation consulting",
    category: "Technology",
    location: "Plano, TX",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 3,
    name: "Wellness Center",
    description: "Holistic health and wellness services for mind and body",
    category: "Health",
    location: "Plano, TX",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
];

export function LatestListings() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Latest Additions
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover the newest businesses joining our community
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestListings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="line-clamp-1">{listing.name}</CardTitle>
                  {listing.isNew && (
                    <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                      New
                    </span>
                  )}
                </div>
                <CardDescription className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {listing.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {listing.description}
                </p>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" variant="outline">
          View All Listings
        </Button>
      </div>
    </section>
  );
}