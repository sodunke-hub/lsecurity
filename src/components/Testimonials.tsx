import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Eng Moatasim",
    role: "Career Switcher",
    content: "What an amazing instructor and an amazing course! You can tell a lot of passion and effort went into creating this content. It's incredibly comprehensive, taking you from zero to hero in cybersecurity. I was particularly impressed with the real-world topics like endpoint security and incident detection.",
    rating: 5,
    avatar: "👩‍💻"
  },
  {
    name: "Hav Urey",
    role: "IT Professional",
    content: "I knew absolutely nothing about cyber security before this course, not even what phishing meant. But the way everything is broken down step-by-step made it so easy to follow. I went from total beginner to understanding how to protect myself and my company online. 100% worth it!",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Alex Thompson",
    role: "Complete Beginner",
    content: "I had NO tech background and this course made everything crystal clear. The instructor explains like you're five but treats you like a pro.",
    rating: 5,
    avatar: "🧑‍🎓"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            What Students Are <span className="text-primary">Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="text-xl font-bold ml-2">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 bg-card border-border hover:border-primary/30 transition-all hover:glow-primary">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
