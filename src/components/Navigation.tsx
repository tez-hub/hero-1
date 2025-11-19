import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entire navbar fade/slide in
      gsap.from(".nav-wrapper", {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      });

      // Desktop links stagger
      gsap.from(".nav-link", {
        opacity: 0,
        y: -10,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Desktop CTA button animation
      gsap.from(".nav-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 nav-wrapper">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-foreground">
          Some Furniture
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-card/95 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg border border-border">
          <a href="#about" className="nav-link px-4 py-2 text-foreground hover:text-primary transition-colors">
            About us
          </a>
          <a href="#projects" className="nav-link px-4 py-2 text-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#pricing" className="nav-link px-4 py-2 text-foreground hover:text-primary transition-colors">
            Pricing
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
              More
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card">
              <DropdownMenuItem>Services</DropdownMenuItem>
              <DropdownMenuItem>Blog</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">

              {[
                ["#about", "About us"],
                ["#projects", "Projects"],
                ["#pricing", "Pricing"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}

              <div className="border-t border-border my-2" />

              {[
                ["#services", "Services"],
                ["#blog", "Blog"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}

              <Button
                variant="default"
                className="rounded-full px-6 gap-2 bg-foreground text-background hover:bg-foreground/90 mt-4 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Book a free call
                <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center p-3 ml-5">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop CTA */}
        <Button
          variant="default"
          className="nav-cta hidden md:flex rounded-full px-6 gap-2 bg-foreground text-background hover:bg-foreground/90"
        >
          Book a free call
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};
