import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star, Users, PlayCircle } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-card border border-primary/20 text-foreground px-4 py-2 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                1,000+ Enrollments
              </Badge>
              <Badge variant="secondary" className="bg-card border border-secondary/20 text-foreground px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-secondary text-secondary" />
                5.0 Rating (15+ Reviews)
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Master <span className="text-primary text-glow">Cybersecurity</span> From Scratch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                No Prior Experience Needed. Learn by Doing
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Learn to hack and secure systems the right way — a beginner cybersecurity course packed with practical skills, real-world demos, and step-by-step lessons that guide you toward becoming a cybersecurity professional.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-bold glow-primary transition-all hover:scale-105"
                asChild
              >
                <a href="https://YOUR-GUMROAD-LINK" target="_blank" rel="noopener noreferrer">
                  Enroll Now — Only $27
                </a>
              </Button>
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 font-semibold"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-primary/20">
                  <div className="aspect-video w-full">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ykg?autoplay=1"
                      title="Course Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold">
                      {i === 1 ? '👨' : i === 2 ? '👩' : i === 3 ? '🧑' : '👴'}
                    </div>
                  ))}
                </div>
                <span className="font-medium">Join 1,000+ students</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video Preview */}
          <div className="relative animate-slide-up w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 glow-primary bg-card shadow-2xl">
              {/* Video thumbnail with link */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="block relative group w-full cursor-pointer"
              >
                <div className="aspect-video w-full relative">
                  <img 
                    src="https://i.postimg.cc/jdRrZ1Wt/Lucid-Origin-Create-a-highconverting-You-Tube-course-thumbnail-2(1).jpg" 
                    alt="Course Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 md:w-24 md:h-24 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
