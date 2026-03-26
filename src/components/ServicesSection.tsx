import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Ndërrim ekranesh për çdo model",
  "Ndërrim baterish origjinale",
  "Riparim motherboard",
  "Instalim software & pastrim virusesh",
  "Upgrade RAM & SSD për laptop",
  "Shitje aksesorësh me shumicë dhe pakicë",
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="absolute inset-0 grid-bg opacity-20" />
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Pse <span className="gradient-text">Mobile Hoti</span>?
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Me vite eksperiencë në riparimin e pajisjeve elektronike, ofrojmë cilësi,
          shpejtësi dhe çmime konkurruese. Çdo punë bëhet me kujdes dhe profesionalizëm.
        </p>
        <ul className="space-y-4">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-secondary-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="glow-card rounded-2xl p-8 border border-border">
          <div className="space-y-6">
            {[
              { label: "Kënaqësi Klientësh", value: 98 },
              { label: "Riparime të Suksesshme", value: 95 },
              { label: "Dorëzim Brenda Ditës", value: 90 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-secondary-foreground">{bar.label}</span>
                  <span className="text-primary font-semibold">{bar.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full gradient-bg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
