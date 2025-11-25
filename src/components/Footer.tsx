import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-6xl mx-auto px-6 py-16">
        {/* Final CTA */}
        <div className="text-center mb-12 space-y-6 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black">
            Ready to Start Your <span className="text-primary">Cybersecurity Career?</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Join 1,000+ students who have already begun their journey
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-bold glow-primary transition-all hover:scale-105"
            asChild
          >
            <a href="https://YOUR-GUMROAD-LINK" target="_blank" rel="noopener noreferrer">
              Enroll Now — Only $27
            </a>
          </Button>
        </div>

        {/* Footer content */}
        <div className="pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">LSecurity</span>
            </div>
            
            <div className="text-center md:text-right text-sm text-muted-foreground space-y-1">
              <p>© 2025 LSecurity. All rights reserved.</p>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
