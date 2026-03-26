import { Facebook, Instagram, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/355694316444";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold gradient-text mb-4">📱 Mobile Hoti</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Riparime telefonash & kompjuterash me cilësi dhe garanci. Aksesorë për çdo model.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Shërbimet</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Riparim Telefonash", "Riparim Kompjuterash", "Ndërrim Ekranesh", "Ndërrim Baterish"].map((l) => (
              <li key={l}><a href="#features" className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Produkte</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Cover Telefoni", "Xhama Mbrojtës", "Kufje", "Smart Watch"].map((l) => (
              <li key={l}><a href="#products" className="hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Na Ndiqni</h4>
          <div className="flex gap-3 mb-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "https://www.instagram.com/servis_hoti/" },
              { Icon: Phone, href: WHATSAPP_URL },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">+355 69 431 6444</p>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © 2025 Mobile Hoti. Të gjitha të drejtat e rezervuara.
      </div>
    </div>
  </footer>
);

export default Footer;
