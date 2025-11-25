import { Users, GraduationCap, Briefcase, Shield } from "lucide-react";

const WhoIsThisFor = () => {
  const audience = [
    {
      icon: GraduationCap,
      title: "Complete Beginners",
      description: "No prior experience needed. Start your cybersecurity journey from scratch with clear, beginner-friendly explanations."
    },
    {
      icon: Briefcase,
      title: "Career Changers",
      description: "Looking to transition into cybersecurity? This course provides the foundational knowledge to make your career shift."
    },
    {
      icon: Shield,
      title: "IT Professionals",
      description: "Expand your skillset and add cybersecurity expertise to your professional toolkit."
    },
    {
      icon: Users,
      title: "Business Owners",
      description: "Understand cybersecurity fundamentals to better protect your business and make informed security decisions."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Who's This <span className="text-primary">Course For?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This course is designed for anyone interested in cybersecurity, regardless of background
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
