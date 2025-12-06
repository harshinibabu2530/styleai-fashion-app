import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/stylish_woman_in_trendy_outfit.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Fashion
            </span>
          </div>
          
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Your Personal
            <br />
            <span className="text-primary">Style Assistant</span>
          </h1>
          
          <p className="max-w-md text-lg text-muted-foreground">
            Upload your wardrobe, get personalized outfit recommendations, and discover
            your perfect style with AI that understands your preferences.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={onGetStarted} data-testid="button-get-started">
              Start Your Style Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-how-it-works">
              How It Works
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-status-online" />
              <span>AI Ready</span>
            </div>
            <div>10k+ Outfits Created</div>
            <div>Free to Start</div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Stylish fashion model in coordinated outfit"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/80 p-3 backdrop-blur">
              <p className="text-sm font-medium">Today's Recommendation</p>
              <p className="text-xs text-muted-foreground">
                Cream blazer + black turtleneck + tailored trousers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
