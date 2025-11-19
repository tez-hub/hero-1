import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-bg", {
        opacity: 0,
        scale: 1.1,
        duration: 1.4,
        ease: "power2.out",
      });

      gsap.from(".hero-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".hero-button", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.55,
      });

      gsap.from(".hero-reviews", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });

      gsap.from(".hero-card", {
        x: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.7,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-5xl font-bold text-foreground leading-tight hero-heading">
            Our sofas may get too comfortable 
              <br />
              in your living room.
            </h1>

            <p className="text-xl text-foreground max-w-lg hero-text">
              Meet the sofa that understands your space better than your WiFi does.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 hero-button">
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-4 gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                View our collections
                <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center p-3 ml-5">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </Button>
            </div>

            <div className="flex flex-col items-start gap-3 bg-card/10 backdrop-blur-sm px-6 py-4 mb-5 rounded-2xl w-fit shadow-lg hero-reviews">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-foreground font-semibold">500+ Verified Reviews</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 right-20 bg-card/20 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-2xl hero-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-start">
                  <div className="text-6xl font-bold text-foreground mb-4">56+</div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-hero-cream border-2 border-card" />
                    <div className="w-10 h-10 rounded-full bg-hero-sage border-2 border-card" />
                    <div className="w-10 h-10 rounded-full bg-hero-gold border-2 border-card" />
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="text-sm text-foreground max-w-[200px] mb-4">
                    Cured satisfied customer around the globe
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    className="rounded-full px-3 gap-3 bg-foreground text-background hover:bg-foreground/90 shadow-lg"
                  >
                    Contact now
                    <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center p-3 ml-5">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
