"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Download, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin,
  Scale,
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  ChevronRight,
  Menu,
  X
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const experiences = [
  {
    title: "Solicitor General & Secretary for Justice",
    organization: "Ministry of Justice (Malawi)",
    period: "2022–2025",
    description: [
      "Government legal advisor",
      "Drafting legislation and investment agreements",
      "Negotiated major mining, infrastructure, and industrial park deals",
      "Led development of national investment and PPP laws"
    ]
  },
  {
    title: "Director – Legal, Contracting & Compliance",
    organization: "PPP Commission",
    period: "2012–2022",
    description: [
      "Drafted and negotiated national PPP contracts",
      "Conducted legal due diligence for energy, transport, and urban projects"
    ]
  },
  {
    title: "Chief Law Reform Officer / Acting Law Commissioner",
    organization: "Malawi Law Commission",
    period: "1999–2012",
    description: [
      "Drafted key legislation (anti-corruption, legal aid, police, child justice, trafficking)"
    ]
  },
  {
    title: "Legal Services Manager",
    organization: "Lilongwe City Council",
    period: "Earlier",
    description: ["Municipal legal advisory services"]
  },
  {
    title: "State Advocate",
    organization: "Ministry of Justice",
    period: "Earlier",
    description: ["Government litigation and legal representation"]
  }
]

const competencies = [
  "PPP Transactions",
  "Project Finance",
  "Contract Negotiation",
  "Legal Due Diligence",
  "Commercial Contract Drafting",
  "Law Reform & Legislative Drafting",
  "Project & Contract Management",
  "Corporate Governance"
]

const education = [
  { degree: "Certified PPP Specialist", institution: "IP3 (USA)" },
  { degree: "MBA", institution: "ESAMI" },
  { degree: "MSc International Economic Law", institution: "University of Warwick" },
  { degree: "PGDip Project Management", institution: "University of Galilee" },
  { degree: "LLB (Hons)", institution: "University of Malawi" }
]

const achievements = [
  { value: "30+", label: "Years Legal Experience" },
  { value: "100+", label: "Laws Drafted" },
  { value: "Multi-Million", label: "Dollar Deals Negotiated" },
  { value: "Regional", label: "Advisory Roles" }
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedExp, setExpandedExp] = useState<number | null>(0)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection("hero")}
              className="font-serif text-lg font-semibold text-foreground"
            >
              ATM<span className="text-accent">, SC</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Experience", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border mt-4"
            >
              <div className="flex flex-col gap-4">
                {["About", "Experience", "Education", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Button size="sm" className="w-fit bg-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.p variants={fadeInUp} className="text-accent font-medium tracking-wide uppercase text-sm">
                Senior Counsel | Legal & PPP Specialist
              </motion.p>
              <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Allison Thoko Mbangombe, SC
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Over 30 years of distinguished experience in public law, public-private partnerships, 
                project finance, and legislative drafting across Malawi and the SADC region.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection("experience")}
                  className="border-border hover:bg-secondary transition-all hover:scale-105"
                >
                  View Experience
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-accent/7 rounded-full" />
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-accent/20">
                  <Image
                    src="/Thoko-amba.jpeg"
                    alt="Allison Thoko Mbangombe, SC"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -right-4 top-1/4 bg-card p-4 rounded-lg shadow-lg border border-border">
                  <p className="text-3xl font-serif font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-card p-4 rounded-lg shadow-lg border border-border">
                  <p className="text-3xl font-serif font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Laws Drafted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Profile Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                A distinguished Senior Counsel with over three decades of expertise in government legal affairs, 
                public-private partnerships, and legislative reform. As the former Solicitor General and Secretary 
                for Justice of Malawi, I have led landmark legal initiatives, negotiated multi-million dollar 
                investment agreements, and shaped the legal framework governing infrastructure development 
                across the nation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My career spans senior positions in government, regulatory bodies, and law reform commissions, 
                where I have consistently delivered strategic legal counsel on complex transactions, drafted 
                transformative legislation, and represented Malawi in international forums.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-card border-border space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Personal Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Nationality: Malawi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Civil Status: Married</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Languages: Chichewa, English (Excellent)</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">Memberships</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Malawi Law Society</li>
                    <li>• PPP Africa Network</li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Core Competencies
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {competencies.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-2.5 bg-secondary text-foreground rounded-full text-sm font-medium border border-border hover:border-accent hover:bg-accent/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Professional Experience
            </motion.h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-8 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-3 h-3 bg-accent rounded-full ${index % 2 === 0 ? "left-0 md:left-auto md:-right-1.5" : "left-0 md:-left-1.5"}`} />
                  
                  <Card 
                    className={`p-6 bg-card border-border cursor-pointer transition-all hover:shadow-lg ml-6 md:ml-0 ${expandedExp === index ? "ring-2 ring-accent/20" : ""}`}
                    onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-accent">{exp.period}</p>
                        <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                        <p className="text-muted-foreground text-sm">{exp.organization}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${expandedExp === index ? "rotate-90" : ""}`} />
                    </div>
                    
                    {expandedExp === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-2 text-sm text-muted-foreground border-t border-border pt-4"
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Education & Certifications
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border h-full hover:shadow-lg transition-shadow">
                    <GraduationCap className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-6">Honors & Recognition</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Certified PPP Specialist (IP3)",
                  "Senior Counsel (SC), 2025",
                  "Lead Consultant — SADC Protocol on Industry (2019)"
                ].map((honor, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{honor}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
              Key Achievements
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-4xl md:text-5xl font-bold text-accent">{achievement.value}</p>
                  <p className="text-primary-foreground/80 mt-2 text-sm">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Curriculum Vitae</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Download my complete curriculum vitae for a comprehensive overview of my professional 
                background, qualifications, and achievements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV (PDF)
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Get in Touch
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  For legal consultations, speaking engagements, or professional inquiries, 
                  please feel free to reach out using the contact information below or the form provided.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+265999227858" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+265 999 227 858</p>
                    </div>
                  </a>
                  
                  <a href="mailto:ambangs78@yahoo.com" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">ambangs78@yahoo.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6 bg-card border-border">
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                        <Input 
                          placeholder="Your name" 
                          className="bg-background border-border focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="bg-background border-border focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea 
                        placeholder="How can I help you?" 
                        rows={5}
                        className="bg-background border-border focus:ring-accent resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-lg font-semibold text-primary-foreground">
                Allison Thoko Mbangombe, SC
              </p>
              <p className="text-primary-foreground/70 text-sm">Senior Counsel | Legal & PPP Specialist</p>
            </div>
            
            <div className="text-center md:text-right text-sm text-primary-foreground/60">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
              <p className="mt-1">This website is for informational purposes only and does not constitute legal advice.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
