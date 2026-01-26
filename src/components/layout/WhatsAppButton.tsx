import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "+254705091683";
  const message = "Hello Keneth! I'd like to discuss a project with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[hsl(var(--whatsapp))] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 bg-[hsl(var(--whatsapp))] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline font-medium text-sm">Chat on WhatsApp</span>
        </div>
      </div>
    </a>
  );
};
