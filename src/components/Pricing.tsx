import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "10+ standard comprehensive modules",
  "40+ lectures with HD video content",
  "Hands-on labs and real-world demos",
  "Downloadable resources & cheat sheets",
  "Lifetime access to course materials",
  "Course completion certificate",
  "Access to 24/7 support & private student community",
  "Future updates included FREE"
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Start Your <span className="text-primary">Cybersecurity Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            One-time payment. Lifetime access. No subscriptions.
          </p>
        </div>

        <Card className="bg-card border-2 border-primary/30 glow-primary overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-lg text-muted-foreground line-through">$49</span>
                <span className="ml-2 px-3 py-1 bg-secondary/20 text-secondary text-sm font-bold rounded-full">
                  Limited Offer
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl md:text-7xl font-black text-primary">$27</span>
              </div>
              <p className="text-muted-foreground">One-time payment • Instant access</p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-7 font-bold glow-primary transition-all hover:scale-105"
              asChild
            >
              <a href="https://YOUR-GUMROAD-LINK" target="_blank" rel="noopener noreferrer">
                Enroll Now — Only $27
              </a>
            </Button>

            <div className="mt-6 text-center space-y-2 text-sm text-muted-foreground">
              <p>✓ 7-day money-back guarantee</p>
              <p>✓ Secure checkout via Gumroad</p>
              <p>✓ Join 1,000+ satisfied students</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
