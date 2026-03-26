import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/355694316444";

const plans = [
  {
    name: "Riparim Bazë",
    price: "1,500",
    currency: "Lekë",
    desc: "duke filluar nga",
    features: ["Ndërrim bateri", "Pastrim software", "Kontroll diagnostik", "Garanci 30 ditë"],
    popular: false,
  },
  {
    name: "Riparim Standard",
    price: "3,000",
    currency: "Lekë",
    desc: "duke filluar nga",
    features: ["Ndërrim ekrani", "Ndërrim portë karikimi", "Riparim kamera", "Pastrim i thellë", "Garanci 60 ditë"],
    popular: true,
  },
  {
    name: "Riparim Premium",
    price: "5,000",
    currency: "Lekë",
    desc: "duke filluar nga",
    features: ["Riparim motherboard", "Ndërrim çipi", "Rikuperim të dhënash", "Upgrade hardware", "Garanci 90 ditë", "Prioritet shërbimi"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Çmimet <span className="gradient-text">Tona</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Çmime transparente dhe të arsyeshme. Na kontaktoni për ofertë specifike.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-xl p-8 border relative ${
              plan.popular
                ? "border-primary gradient-border glow-card scale-105"
                : "border-border glow-card"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium gradient-bg text-primary-foreground">
                Më i Popullarizuar
              </span>
            )}
            <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-xs text-muted-foreground mb-1">{plan.desc}</p>
            <div className="mb-6">
              <span className="font-display text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground text-sm ml-1">{plan.currency}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
              >
                Na Kontakto
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
