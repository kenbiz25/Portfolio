import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { ScrollReveal } from "@/hooks/useScrollReveal";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Replace Supabase with a simple POST to a PHP endpoint
      const res = await fetch("/contact-form-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium mb-2 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground">
              Have a project, challenge, or idea you're exploring? I'm open to collaborations, 
              consulting engagements, and strategic conversations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 btn-primary rounded-full text-lg font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Pinetree - Kamburu Drive, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+254705091683"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 705 091 683
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:kenethkiplagat.io@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kenethkiplagat.io@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Prefer a quick call?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Book a 30-minute free consultation to discuss your project
                </p>
                <Button asChild className="btn-accent rounded-full">
                  <a
                    href="https://calendly.com/kenethkiplagat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
