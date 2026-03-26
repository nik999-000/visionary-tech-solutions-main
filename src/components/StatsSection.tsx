import { motion } from "framer-motion";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(0, target, {
            duration: 2,
            onUpdate: (v) => setValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold gradient-text">
      {value}{suffix}
    </div>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Pajisje të Riparuara" },
  { value: 3000, suffix: "+", label: "Klientë të Kënaqur" },
  { value: 98, suffix: "%", label: "Shkallë Suksesi" },
  { value: 10, suffix: "+", label: "Vite Eksperiencë" },
];

const StatsSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="container mx-auto relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground mt-2 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
