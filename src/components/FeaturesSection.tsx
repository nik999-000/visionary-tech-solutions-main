import { motion } from "framer-motion";
import { Smartphone, Monitor, Wrench, Shield } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Riparim Telefonash", desc: "Ndërrim ekranesh, baterish, portash karikimi dhe çdo defekt tjetër për të gjitha modelet." },
  { icon: Monitor, title: "Riparim Kompjuterash", desc: "Riparim laptopësh dhe PC — software, hardware, pastrim, upgrade." },
  { icon: Wrench, title: "Diagnostikim Falas", desc: "Kontroll falas i pajisjes para se të vendosni për riparimin." },
  { icon: Shield, title: "Garanci Pune", desc: "Çdo riparim shoqërohet me garanci për sigurinë tuaj." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Shërbimet <span className="gradient-text">Tona</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ofrojmë shërbime profesionale riparimi me cilësi të lartë dhe çmime të arsyeshme.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glow-card rounded-xl p-6 border border-border cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
