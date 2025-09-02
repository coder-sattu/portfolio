import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <span>Crafted with</span>
          <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
          <span>by</span>
          <span className="text-neon-cyan font-semibold">Sattu</span>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          © 2024 Satvashil Bhosale. All rights reserved.
        </div>
        <div className="mt-2 flex justify-center space-x-4 text-xs text-muted-foreground">
          <span>Built with React & TypeScript</span>
          <span>•</span>
          <span>Deployed with ❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;