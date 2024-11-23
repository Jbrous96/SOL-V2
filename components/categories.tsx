"use client";

import { motion } from "framer-motion";
import { Briefcase, Coffee, Home, ShoppingBag, Utensils, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Retail",
    icon: ShoppingBag,
    color: "text-blue-500",
    count: 245,
  },
  {
    name: "Restaurants",
    icon: Utensils,
    color: "text-red-500",
    count: 189,
  },
  {
    name: "Services",
    icon: Briefcase,
    color: "text-green-500",
    count: 167,
  },
  {
    name: "Home & Garden",
    icon: Home,
    color: "text-yellow-500",
    count: 143,
  },
  {
    name: "Cafes",
    icon: Coffee,
    color: "text-purple-500",
    count: 98,
  },
  {
    name: "Auto & Repair",
    icon: Wrench,
    color: "text-orange-500",
    count: 76,
  },
];

export function Categories() {
  return (
    <section className="container py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Browse by Category
        </h2>
        <p className="text-lg text-muted-foreground">
          Explore businesses across various industries
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={cn("rounded-lg p-2", category.color)}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} businesses
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}