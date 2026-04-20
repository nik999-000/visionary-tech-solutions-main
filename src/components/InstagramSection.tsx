import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  useEffect(() => {
    // Inject Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts (optional, but good practice)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram" className="section-padding relative overflow-hidden bg-background/50">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Instagram className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-300">@servis_hoti</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Na Ndiqni në{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Instagram
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
            Shikoni punët tona më të fundit, riparime live dhe produkte të reja direkt nga dyqani ynë.
          </p>
        </motion.div>

        {/* Elfsight Instagram Feed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          <div className="elfsight-app-e21e7773-8bd1-4ad8-823b-68038b258793"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
