import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Arben M.", role: "Klient i Rregullt", text: "Më ndërruan ekranin e iPhone brenda 30 minutash. Cilësi fantastike dhe çmim shumë i mirë. Faleminderit Mobile Hoti!", avatar: "AM" },
  { name: "Elona K.", role: "Klientë", text: "Laptopi im kishte problem me motherboard. E riparuan shpejt dhe tani punon si i ri. Rekomandoj 100%!", avatar: "EK" },
  { name: "Dritan S.", role: "Klient i Rregullt", text: "Bleva cover dhe xham mbrojtës — cilësi e shkëlqyer. Stafi shumë i sjellshëm dhe profesional.", avatar: "DS" },
];

const TestimonialsSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Çfarë Thonë <span className="gradient-text">Klientët</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Mendime nga klientët tanë të kënaqur.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glow-card rounded-xl p-6 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-secondary-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
