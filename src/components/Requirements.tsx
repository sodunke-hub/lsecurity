import { Circle } from "lucide-react";

const Requirements = () => {
  const requirements = [
    "A computer with internet access (Windows, Mac, or Linux)",
    "No prior cybersecurity or technical experience required",
    "Willingness to learn and practice with hands-on demos",
    "Basic computer skills (browsing the internet, installing software)",
    "A desire to understand cybersecurity and protect digital assets"
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Course <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get started with this course
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {requirements.map((requirement, index) => (
            <div 
              key={index}
              className="flex gap-4 p-5 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <Circle className="w-2 h-2 text-primary flex-shrink-0 mt-2 fill-primary" />
              <p className="text-foreground text-lg">{requirement}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-muted-foreground">
            That's it! You're ready to begin your cybersecurity journey. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
