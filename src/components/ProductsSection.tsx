import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Headphones, Watch, Speaker, Smartphone, GlassWater } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const WHATSAPP_URL = "https://wa.me/355694316444";

const products = [
  { icon: ShieldCheck, title: "Cover Telefoni", desc: "Për të gjitha modelet — iPhone, Samsung, Xiaomi, Huawei e më shumë." },
  { icon: GlassWater, title: "Xhama Mbrojtës", desc: "Tempered glass cilësor për mbrojtje maksimale të ekranit." },
  { icon: Headphones, title: "Kufje", desc: "Kufje me tela dhe wireless — cilësi e lartë zëri." },
  { icon: Speaker, title: "Bokse Muzike", desc: "Bluetooth speakers portable për çdo rast." },
  { icon: Watch, title: "Smart Watch", desc: "Orë inteligjente me funksione sportive dhe njoftimet." },
  { icon: Smartphone, title: "Aksesorë të Tjerë", desc: "Karikues, kabllo, mbajtëse makine dhe më shumë." },
];

const ProductsSection = () => (
  <section id="products" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Produktet <span className="gradient-text">Tona</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Gjeni aksesorët më të mirë për pajisjet tuaja me çmime të përballueshme.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={productsImage}
            alt="Aksesorë telefonash në Mobile Hoti"
            width={1024}
            height={768}
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glow-card rounded-xl p-5 border border-border group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg">💬 Porosit në WhatsApp</Button>
        </a>
      </div>
    </div>
  </section>
);

export default ProductsSection;
