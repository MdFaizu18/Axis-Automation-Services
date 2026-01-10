import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "9443511343" // Replace with your WhatsApp number (with country code, no + or spaces)
  const message = "Hello! I'm interested in your industrial automation services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-border">
        WhatsApp
      </span>
    </a>
  )
}
