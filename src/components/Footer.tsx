import { Crown } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <Crown className="h-6 w-6 text-primary" />
        <span className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
          Royal <span className="text-primary">Fitness</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Royal Fitness Gym, Royal City, Vidisha. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
