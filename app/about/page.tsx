import { Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <Building2 className="mx-auto mb-4 h-12 w-12" />
          <h1 className="mb-4 text-4xl font-bold">About Shops Of Legacy</h1>
          <p className="text-lg text-muted-foreground">
            Connecting exceptional businesses worldwide, with roots in Plano, Texas
          </p>
        </div>

        <div className="prose prose-gray mx-auto max-w-none">
          <p className="lead">
            Founded in the heart of Plano, Texas, Shops Of Legacy is more than just a business directory—it's a celebration of entrepreneurial spirit and excellence in commerce.
          </p>

          <h2>Our Mission</h2>
          <p>
            We strive to create meaningful connections between outstanding businesses and discerning customers. By showcasing the best enterprises from Plano and beyond, we're building a community that values quality, integrity, and exceptional service.
          </p>

          <h2>Why Choose Shops Of Legacy?</h2>
          <ul>
            <li>Curated Selection: We carefully review each business submission to ensure quality.</li>
            <li>Global Reach: While rooted in Plano, we connect businesses with customers worldwide.</li>
            <li>Enhanced Visibility: Featured listings help businesses stand out and reach more customers.</li>
            <li>Community Focus: We support local businesses while facilitating global connections.</li>
          </ul>

          <h2>Our Values</h2>
          <p>
            Excellence, integrity, and community are at the core of everything we do. We believe in:
          </p>
          <ul>
            <li>Supporting businesses that demonstrate exceptional quality</li>
            <li>Fostering meaningful connections between businesses and customers</li>
            <li>Promoting sustainable business practices</li>
            <li>Contributing to economic growth in our community and beyond</li>
          </ul>
        </div>
      </div>
    </div>
  );
}