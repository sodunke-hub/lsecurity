import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Lock, Play } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    duration: "16 min",
    lessons: 4,
    subsections: [
      "What is Cybersecurity & Why?",
      "Penetration Testing & Ethical Hacking",
      "Cybersecurity Analyst - SOC Analyst",
    ],
    isUnlocked: false 
  },
  {
    id: 2,
    title: "CIA Triad - The 3 Pillars of Cyberseurity",
    duration: "6 min",
    lessons: 4,
    subsections: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Summary",
    ],
    isUnlocked: false 
  },
  {
    id: 3,
    title: "Identity and Access Management (IAM)",
    duration: "2 min",
    lessons: 1,
    subsections: [
      "Identity and Access Management (IAM)",
    ],
    isUnlocked: false 
  },
  {
    id: 4,
    title: "Setting Up Our Cybersecurity Lab",
    duration: "16 min",
    lessons: 2,
    subsections: [
      "Setting Up Our Cybersecurity Lab Environment",
      "Linux Basics - The Terminal and Essential Commands",
    ],
    isUnlocked: false
  },
  {
    id: 5,
    title: "Networking Basics & Network Security",
    duration: "32 min",
    lessons: 7,
    subsections: [
      "Networking vs Network Security",
      "IP Addresses, Subnets & Routing Basics",
      "Network Layers I - OSI & TCP/IP Models",
      "Network Layers II - OSI & TCP/IP Models",
      "Common Ports In Cyber security – What They Do & How They’re Used",
      "Network Scanning - Ping - NMAP - Open Portss",
      "How to Scan for Open Ports to Hack and Gain Access to Systems",
    ],
    isUnlocked: false
  },
  {
    id: 6,
    title: "Malware - Learn How to Create & Prevent Them ",
    duration: "11 min",
    lessons: 6,
    subsections: [
      "What is Malware?",
      "Types of Malware I: Virus, Worm, Trojan, Ransomware, Adware, Spyware",
      "Types of Malware II : Virus, Worm, Trojan, Ransomware, Adware, Spyware",
      "How Malware Spreads - Detection and Prevention Techniques",
      "How to Create a Virus To Crash/Slowdown a System",
    ],
    isUnlocked: false
  },
  {
    id: 7,
    title: "Cyber Attacks - Hacking Laptops, macOS & Android",
    duration: "24 min",
    lessons: 3,
    subsections: [
      "What is a cyberattack?",
      "Common types of Cyber attacs: Brute force, DDoS, SQLi, MITM, Spoofing",
      "Hacking Systems Using Metasploit",
    ],
    isUnlocked: false
  },
  {
    id: 8,
    title: "Endpoint Security - Malware Analysis",
    duration: "9 min",
    lessons: 6,
    subsections: [
      "What is Endpoint Security?",
      "Antivirus - Antimalwalre",
      "Firewall",
      "Sandbox malware analysis - Hybrid Analysis",
      "Use VirusTotal to analyze a suspicious file, URL, & more",
    ],
    isUnlocked: false
  },
  {
    id: 9,
    title: "Social Engineering - Phishing Attack",
    duration: "19 min",
    lessons: 3,
    subsections: [
      "What is social engineering?",
      "Types: Phishing, Vishing, SMShing,",
      "Cloning Any Website for Phishing - How to Hack Any Social Media Accounts",
    ],
    isUnlocked: false
  },
  {
    id: 10,
    title: "Email Phishing Analysis - Incident Detection",
    duration: "17 min",
    lessons: 4,
    subsections: [
      "Anatomy of an email - Email headers",
      "Indicators of a phishing attempt",
      "Static real phishing email/attachment analysis and find red flags",
      "Extract and scan email attachments/links with PhishTool",
    ],
    isUnlocked: false
  },
  {
    id: 11,
    title: "Password Cracking",
    duration: "24 min",
    lessons: 3,
    subsections: [
      "What is a password cracking?",
      "Common cracking methods (dictionary, brute force)",
      "Crack/Brute Force Website Login Pages - Gain Access To Anyone's Account",
    ],
    isUnlocked: false
  },
  {
    id: 12,
    title: "Website Hacking/Penetration Testing - Hacking & Security",
    duration: "29 min",
    lessons: 5,
    subsections: [
      "How does websites work?",
      "Hand-On - Cross-Site Scripting (XSS) - Reflected",
      "Hand-On - Cross-Site Scripting (XSS) - Stored",
      "Hand-On -SQL Injection (SQLi)",
      "Hand-On -File Inclusion Vulnerability",
    ],
    isUnlocked: false
  },
  {
    id: 13,
    title: "Common Cybersecurity Interview Questions and Answers",
    duration: "2 min",
    lessons: 1,
    subsections: [
      "Common Cyber Security Interview Questions and Answers",
    ],
    isUnlocked: false
  }
];

const CourseModules = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Complete <span className="text-primary">Course Curriculum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            13 comprehensive modules with 47 lessons covering everything from fundamentals to advanced penetration testing
          </p>
        </div>

        <Card className="bg-card border-border overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={`module-${module.id}`} className="border-border">
                <AccordionTrigger className="px-6 py-5 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                      {module.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                        {!module.isUnlocked && (
                          <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 text-base text-muted-foreground">
                        <span>{module.lessons} lessons</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 bg-muted/30">
                  <ul className="space-y-3 mt-4">
                    {module.subsections.map((subsection, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground py-2 hover:text-primary transition-colors text-base">
                        {module.isUnlocked ? (
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        ) : (
                          <Play className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className="leading-relaxed">{subsection}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default CourseModules;
