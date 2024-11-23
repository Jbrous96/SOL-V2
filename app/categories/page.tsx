import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Coffee, Home, ShoppingBag, Utensils, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Retail",
    icon: ShoppingBag,
    color: "text-blue-500",
    description: "Discover unique shops and retail establishments",
    count: 245,
  },
  {
    name: "Restaurants",
    icon: Utensils,
    color: "text-red-500",
    description: "Find exceptional dining experiences",
    count: 189,
  },
  {
    name: "Services",
    icon: Briefcase,
    color: "text-green-500",
    description: "Professional services for every need",
    count: 167,
  },
  {
    name: "Home & Garden",
    icon: Home,
    color: "text-yellow-500",
    description: "Everything for your home and garden",
    count: 143,
  },
  {
    name: "Cafes",
    icon: Coffee,
    color: "text-purple-500",
    description: "Cozy cafes and coffee shops",
    count: 98,
  },
  {
    name: "Auto & Repair",
    icon: Wrench,
    color: "text-orange-500",
    description: "Automotive services and repairs",
    count: 76,
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Business Categories</h1>
        <p className="text-lg text-muted-foreground">
          Browse businesses by category to find exactly what you're looking for
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.name} className="group cursor-pointer transition-colors hover:bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={cn("inline-block rounded-lg p-2", category.color)}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                <div className="text-sm text-muted-foreground">
                  {category.count} businesses
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}