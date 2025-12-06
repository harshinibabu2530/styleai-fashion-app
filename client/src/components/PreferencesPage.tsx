import { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PreferenceCard, type StylePreference } from "./PreferenceCard";

// todo: remove mock functionality
const styleCategories: StylePreference[] = [
  {
    id: "minimalist",
    title: "Minimalist Chic",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
    description: "Clean lines, neutral colors, timeless pieces",
  },
  {
    id: "streetwear",
    title: "Urban Streetwear",
    imageUrl: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400&h=300&fit=crop",
    description: "Bold logos, oversized fits, sneaker culture",
  },
  {
    id: "bohemian",
    title: "Bohemian Free",
    imageUrl: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=400&h=300&fit=crop",
    description: "Flowy fabrics, earthy tones, artistic vibes",
  },
  {
    id: "classic",
    title: "Classic Elegance",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    description: "Tailored suits, refined accessories, timeless",
  },
  {
    id: "athleisure",
    title: "Active Athleisure",
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop",
    description: "Sporty comfort, performance fabrics, casual luxury",
  },
  {
    id: "vintage",
    title: "Retro Vintage",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=300&fit=crop",
    description: "Classic silhouettes, nostalgic patterns, unique finds",
  },
];

const trendingItems = [
  "Wide-leg pants",
  "Oversized blazers",
  "Chunky loafers",
  "Layered necklaces",
  "Cropped cardigans",
  "Platform sneakers",
  "Leather accessories",
  "Earth tones",
];

export function PreferencesPage() {
  const [likes, setLikes] = useState<string[]>([]);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [selectedTrends, setSelectedTrends] = useState<string[]>([]);

  const handleLike = (id: string) => {
    setLikes((prev) => [...prev.filter((x) => x !== id), id]);
    setDislikes((prev) => prev.filter((x) => x !== id));
  };

  const handleDislike = (id: string) => {
    setDislikes((prev) => [...prev.filter((x) => x !== id), id]);
    setLikes((prev) => prev.filter((x) => x !== id));
  };

  const toggleTrend = (trend: string) => {
    setSelectedTrends((prev) =>
      prev.includes(trend) ? prev.filter((x) => x !== trend) : [...prev, trend]
    );
  };

  const handleSave = () => {
    console.log("Saving preferences:", { likes, dislikes, selectedTrends });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Style Preferences
        </h1>
        <p className="mt-2 text-muted-foreground">
          Help our AI understand your taste for better recommendations
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Sparkles className="h-5 w-5 text-primary" />
          Style Categories
        </h2>
        <p className="mb-6 text-muted-foreground">
          Like or pass on these fashion styles to personalize your feed
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {styleCategories.map((pref) => (
            <PreferenceCard
              key={pref.id}
              preference={pref}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ))}
        </div>
      </div>

      <Card className="mb-12 p-6">
        <h2 className="mb-4 text-xl font-semibold">Trending Now</h2>
        <p className="mb-4 text-muted-foreground">
          Select trends you're interested in exploring
        </p>
        <div className="flex flex-wrap gap-2">
          {trendingItems.map((trend) => (
            <Badge
              key={trend}
              variant={selectedTrends.includes(trend) ? "default" : "secondary"}
              className="cursor-pointer px-3 py-1.5 text-sm"
              onClick={() => toggleTrend(trend)}
              data-testid={`trend-${trend.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {selectedTrends.includes(trend) && (
                <Check className="mr-1 h-3 w-3" />
              )}
              {trend}
            </Badge>
          ))}
        </div>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={handleSave} data-testid="button-save-preferences">
          <Check className="mr-2 h-4 w-4" />
          Save My Preferences
        </Button>
        <p className="mt-2 text-sm text-muted-foreground">
          {likes.length} styles liked, {dislikes.length} passed,{" "}
          {selectedTrends.length} trends selected
        </p>
      </div>
    </div>
  );
}
