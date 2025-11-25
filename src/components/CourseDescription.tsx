const CourseDescription = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Course <span className="text-primary">Description</span>
          </h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Welcome to the <strong className="text-foreground">Complete Beginner Cybersecurity Course</strong> — a comprehensive, hands-on program designed to take you from zero experience to confident cybersecurity professional.
          </p>

          <p className="text-lg leading-relaxed">
            This course breaks down complex security concepts into easy-to-understand lessons with <strong className="text-foreground">real-world demos</strong> and practical exercises. You'll learn the same techniques used by security professionals to protect organizations worldwide.
          </p>

          <p className="text-lg leading-relaxed">
            Throughout the course, you'll gain exposure to industry-standard tools and methodologies, understand how attackers think, and most importantly — learn how to defend against them. Each module builds upon the previous one, ensuring a smooth and logical learning progression.
          </p>

          <p className="text-lg leading-relaxed">
            By the end of this course, you'll have a solid foundation in cybersecurity principles, practical experience with security tools, and the confidence to pursue advanced certifications or entry-level positions in the cybersecurity field.
          </p>

          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-lg font-semibold text-foreground mb-2">
              💡 Perfect for Career Changers
            </p>
            <p className="text-muted-foreground">
              Whether you're looking to break into cybersecurity, enhance your IT skills, or simply understand how to protect yourself online, this course provides the knowledge and practical skills you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
