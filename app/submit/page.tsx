"use client";

import { useState } from "react";
import { Building2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function SubmitListingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Listing submitted",
      description: "Your listing will be reviewed and published soon.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <Building2 className="mx-auto mb-4 h-12 w-12" />
          <h1 className="mb-4 text-4xl font-bold">Submit Your Business</h1>
          <p className="text-lg text-muted-foreground">
            Join our curated directory of exceptional businesses
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="businessName" className="mb-2 block text-sm font-medium">
              Business Name *
            </label>
            <Input id="businessName" required />
          </div>

          <div>
            <label htmlFor="website" className="mb-2 block text-sm font-medium">
              Website URL
            </label>
            <Input id="website" type="url" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Business Email *
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Phone Number *
              </label>
              <Input id="phone" type="tel" required />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium">
              Business Description *
            </label>
            <Textarea id="description" rows={6} required />
          </div>

          <div>
            <label htmlFor="address" className="mb-2 block text-sm font-medium">
              Business Address *
            </label>
            <Textarea id="address" rows={3} required />
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-semibold">Featured Listing Upgrade</h3>
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id="featured"
                className="mt-1"
              />
              <div>
                <label htmlFor="featured" className="font-medium">
                  Upgrade to Featured Listing ($16)
                </label>
                <p className="text-sm text-muted-foreground">
                  Get premium placement, enhanced visibility, and a do-follow backlink
                </p>
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Listing
                <Upload className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}