import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Star } from "lucide-react";

const businesses = [
  {
    id: 1,
    name: "Legacy Crafts Co.",
    description: "Artisanal crafts and home decor with a modern twist",
    rating: 4.8,
    category: "Retail",
    location: "Plano, TX",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Heritage Bistro",
    description: "Farm-to-table dining experience with local ingredients",
    rating: 4.9,
    category: "Restaurant",
    location: "Plano, TX",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function DirectoryPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="directory-title">Directory</h1>
        <p className="text-lg text-muted-foreground">
          Discover and connect with exceptional businesses in our network
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => (
          <Card key={business.id} className="overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={business.image}
                alt={business.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="line-clamp-1">{business.name}</CardTitle>
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1 h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{business.rating}</span>
                </div>
              </div>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {business.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {business.description}
              </p>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
