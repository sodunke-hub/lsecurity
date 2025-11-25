import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Do I need any prior experience?",
    answer: "No! This course is designed for complete beginners. We start from the absolute basics and guide you step-by-step. All you need is a computer and the willingness to learn."
  },
  {
    question: "How long do I have access to the course?",
    answer: "You get lifetime access! Once you enroll, you can watch and rewatch the content as many times as you want. Plus, you'll get all future updates for free."
  },
  {
    question: "What software/tools do I need?",
    answer: "Everything you need is free! We'll show you how to set up VirtualBox and Kali Linux (both free). All tools used in the course are open-source and free to use."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Upon completing the course, you'll receive a certificate of completion that you can add to your LinkedIn profile and resume."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Absolutely! If you're not satisfied within the first 7 days, we'll give you a full refund—no questions asked."
  },
  {
    question: "How is this different from free YouTube tutorials?",
    answer: "While free content is great, it's often scattered and incomplete. Our course provides a structured learning path, hands-on labs, real-world demos, and ongoing support. Everything is organized to take you from beginner to job-ready."
  },
  {
    question: "Can I get a job after completing this course?",
    answer: "Yes — this course teaches all the core fundamentals needed for beginner cybersecurity roles. We also include a section on how to find opportunities on LinkedIn, Fiverr, and Upwork as you grow in your journey."
  },
  {
    question: "How long does it take to complete?",
    answer: "The course contains 40+ videos content. Most students complete it in 2-3 weeks. However, since you have lifetime access, you can learn at your own pace."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before enrolling
          </p>
        </div>

        <Card className="bg-card border-border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border px-6">
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-5">
                  <span className="font-bold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
