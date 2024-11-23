"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <MessageSquare className="mx-auto mb-4 h-12 w-12" />
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <Input id="subject" required />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" rows={6} required />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-12 grid gap-8 rounded-lg border p-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">Email Us</h3>
            <a
              href="mailto:contact@shopsoflegacy.com"
              className="flex items-center text-muted-foreground hover:text-primary"
            >
              <Mail className="mr-2 h-4 w-4" />
              contact@shopsoflegacy.com
            </a>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Location</h3>
            <p className="text-muted-foreground">
              Plano, Texas, United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}