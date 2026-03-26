import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/355694316444";

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Na <span className="gradient-text">Kontaktoni</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Keni nevojë për riparim ose dëshironi të porosisni aksesorë? Na shkruani direkt në WhatsApp!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-card rounded-2xl p-8 md:p-12 border border-border text-center mb-12"
        >
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <MessageCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Shkruani në WhatsApp
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Përshkruani problemin ose produktin që dëshironi dhe do t'ju përgjigjemi menjëherë.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-lg px-10 py-6">
              💬 +355 69 431 6444
            </Button>
          </a>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Telefon", value: "+355 69 431 6444", href: "tel:+355694316444" },
            { icon: MapPin, label: "Adresa", value: "Shkodër, Shqipëri", href: "https://share.google/WSULUv8OE5K7MHgm4" },
            { icon: Clock, label: "Orari", value: "E Hënë - E Diel: 09:00 - 20:00" },
          ].map((item, i) => {
            const Content = (
              <>
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.value}</p>
              </>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glow-card rounded-xl p-6 border border-border text-center ${item.href ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {Content}
                  </a>
                ) : Content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
