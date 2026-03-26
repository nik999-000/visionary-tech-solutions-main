import { motion } from "framer-motion";
import { MessageSquare, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Na Kontaktoni", desc: "Na shkruani në WhatsApp ose ejani direkt në dyqan." },
  { icon: Search, title: "Diagnostikim", desc: "Kontrollojmë pajisjen falas dhe ju informojmë për problemin." },
  { icon: Wrench, title: "Riparim", desc: "Kryejmë riparimin me pjesë cilësore brenda kohës më të shkurtër." },
  { icon: CheckCircle, title: "Dorëzim", desc: "Pajisja juaj gati — e testuar dhe me garanci." },
];

const HowItWorksSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Si <span className="gradient-text">Funksionon</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Procesi ynë i thjeshtë për riparimin e pajisjes suaj.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 relative">
              <step.icon className="w-7 h-7 text-primary-foreground" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
