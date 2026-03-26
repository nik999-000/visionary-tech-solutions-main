import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-repair.jpg";

const WHATSAPP_URL = "https://wa.me/355694316444";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary mb-6">
          📱 Riparime & Aksesorë — Cilësi e Garantuar
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Mobile Hoti</span> — Riparime
          Telefonash & Kompjuterash
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
          Riparojmë çdo model telefoni dhe kompjuteri me pjesë origjinale dhe garanci.
          Gjithashtu gjeni aksesorët më të mirë — cover, xhama mbrojtës, kufje, bokse dhe smartwatch.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">💬 Na Shkruaj në WhatsApp</Button>
          </a>
          <a href="#products">
            <Button variant="heroOutline" size="lg">Shiko Produktet</Button>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={heroImage}
          alt="Riparim telefoni në Mobile Hoti"
          width={1024}
          height={1024}
          className="w-full max-w-lg rounded-2xl shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
