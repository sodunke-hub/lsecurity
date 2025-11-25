import { CheckCircle2 } from "lucide-react";

const WhatYouLearn = () => {
  const learningPoints = [
    "Master the fundamentals of cybersecurity and network security principles",
    "Understand common cyber threats and how to defend against them",
    "Learn ethical hacking techniques and penetration testing basics",
    "Gain hands-on experience with real-world security tools and demos",
    "Develop skills in risk assessment and security best practices",
    "Build a strong foundation for cybersecurity certifications (CEH, CISSP, etc.)",
    "Learn how to secure networks, systems, and applications",
    "Understand how perform phishing attack, SQLi attack and much more",
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What <span className="text-primary">You'll Learn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gain practical cybersecurity skills through hands-on demos and step-by-step lessons
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
