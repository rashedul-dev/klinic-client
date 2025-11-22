import React from "react";
import { ArrowRight, Stethoscope, FileHeart, TestTubes, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                New: Family Health Plans Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Healthcare, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-bl from-primary to-purple-400 ">
                  Reimagined.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
                Experience the future of medical care. Instant consultations, seamless diagnostics, and comprehensive
                health plans—all in one modern platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="w-full  sm:w-auto rounded-full h-12 px-8 shadow-lg shadow-primary/25 transition-all hover:scale-105 bg-linear-to-r from-primary to-purple-400"
                  >
                    Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/health-plans">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full h-12 px-8 border-2 hover:bg-secondary/20"
                  >
                    See Pricing
                  </Button>
                </Link>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/32/32?random=${i + 10}`}
                      className="w-8 h-8 rounded-full border-2 border-background"
                      alt="User"
                    />
                  ))}
                </div>
                <p>Trusted by 10k+ patients</p>
              </div>
            </div>

            {/* 3D / Abstract Visual Right Side */}
            <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center perspective-1000">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Center Cube/Shape */}
                <div className="absolute inset-0 bg-linear-to-br from-primary to-purple-600 rounded-3xl animate-float opacity-90 shadow-2xl shadow-primary/40 z-20">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Stethoscope className="h-32 w-32 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-12 w-20 h-20 bg-card rounded-2xl shadow-xl animate-float [animation-delay:1s] z-30 flex items-center justify-center p-4">
                  <HeartHandshake className="h-8 w-8 text-pink-500" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-card rounded-2xl shadow-xl animate-float [animation-delay:2s] z-30 flex flex-col items-center justify-center p-2">
                  <div className=" text-2xl font-bold text-foreground">4.9</div>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob -z-10 dark:mix-blend-normal dark:opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob [animation-delay:2s] -z-10 dark:mix-blend-normal dark:opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-primary/5 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All-in-One Healthcare Ecosystem</h2>
            <p className="text-muted-foreground text-lg">
              We've streamlined every aspect of medical care to put you back in control of your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Stethoscope className="h-8 w-8 text-primary" />}
              title="Instant Consult"
              description="Connect with top-tier specialists via high-res video calls in minutes."
              link="/consultation"
            />
            <FeatureCard
              icon={<TestTubes className="h-8 w-8 text-purple-500" />}
              title="Smart Diagnostics"
              description="Book tests and track real-time analysis through our smart dashboard."
              link="/diagnostics"
            />
            <FeatureCard
              icon={<FileHeart className="h-8 w-8 text-pink-500" />}
              title="Flexible Plans"
              description="Modular health coverage that adapts to your family's changing needs."
              link="/health-plans"
            />
            <FeatureCard
              icon={<HeartHandshake className="h-8 w-8 text-orange-500" />}
              title="Social Impact"
              description="We partner with global NGOs to subsidize care for those in need."
              link="/ngos"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="h-40 bg-secondary opacity-60 rounded-2xl w-full"></div>
                  <div className="h-56 bg-primary opacity-30 rounded-2xl w-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-56 bg-primary opacity-30 rounded-2xl w-full"></div>
                  <div className="h-40 bg-secondary opacity-60 rounded-2xl w-full"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why 10,000+ patients trust Klinic</h2>
              <p className="text-muted-foreground text-lg">
                Traditional healthcare is broken. We fixed it with technology, transparency, and empathy.
              </p>
              <ul className="space-y-4">
                {[
                  "AI-powered symptom checker & triage",
                  "Electronic health records (EHR) on the blockchain",
                  "24/7 Concierge support team",
                  "Zero-wait booking guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust */}
      <section className="py-20 bg-primary/5 h-[50vh]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-12">Loved by patients, trusted by doctors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Klinic completely changed how I manage my family's health. The app is incredibly intuitive."
              author="Sarah Jenkins"
              role="Product Designer"
            />
            <TestimonialCard
              quote="Finally, a healthcare platform that feels like it belongs in 2025. Fast, efficient, and beautiful."
              author="Marcus Chen"
              role="Software Engineer"
            />
            <TestimonialCard
              quote="The diagnostic booking process saved me hours of waiting in lines. Highly recommended!"
              author="Elena Rodriguez"
              role="Architect"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-4 p-3 bg-secondary/50 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
        >
          Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-secondary/10 p-8 rounded-2xl text-left">
      <div className="flex gap-1 text-primary mb-4">★★★★★</div>
      <p className="text-muted-foreground mb-6 italic">"{quote}"</p>
      <div>
        <div className="font-bold">{author}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{role}</div>
      </div>
    </div>
  );
}
