import { useState } from "react";
import { Heart, ExternalLink, Bookmark, Sparkles, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface PinItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  saves: number;
}

// todo: remove mock functionality - replace with actual Pinterest API or web scraping
const trendingPins: PinItem[] = [
  {
    id: "p1",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop",
    title: "Elegant Winter Layers",
    category: "Winter Fashion",
    saves: 2340,
  },
  {
    id: "p2",
    imageUrl: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
    title: "Casual Street Style",
    category: "Streetwear",
    saves: 1856,
  },
  {
    id: "p3",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
    title: "Bold Color Blocking",
    category: "Summer Trends",
    saves: 3120,
  },
  {
    id: "p4",
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=550&fit=crop",
    title: "Flowy Bohemian Vibes",
    category: "Bohemian",
    saves: 2890,
  },
  {
    id: "p5",
    imageUrl: "https://images.unsplash.com/photo-1475180429745-4c2a39e6d3b3?w=400&h=500&fit=crop",
    title: "Minimalist Neutrals",
    category: "Minimalist",
    saves: 4102,
  },
  {
    id: "p6",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    title: "Retro 70s Inspired",
    category: "Vintage",
    saves: 1945,
  },
  {
    id: "p7",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop",
    title: "Athleisure Chic",
    category: "Athleisure",
    saves: 2567,
  },
  {
    id: "p8",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop",
    title: "Office Power Dressing",
    category: "Business Casual",
    saves: 3456,
  },
];

const categories = [
  "All",
  "Streetwear",
  "Minimalist",
  "Bohemian",
  "Vintage",
  "Athleisure",
  "Business Casual",
];

export function PinterestInspiration() {
  const [savedPins, setSavedPins] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleSave = (id: string) => {
    setSavedPins((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredPins = trendingPins.filter((pin) => {
    const matchesSearch =
      pin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || pin.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const savedItems = trendingPins.filter((pin) => savedPins.includes(pin.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            Pinterest Inspiration
          </h1>
        </div>
        <p className="text-muted-foreground">
          Discover trending fashion looks and save your favorites to personalize your AI recommendations
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search fashion inspiration..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            data-testid="input-search-pins"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? "default" : "secondary"}
              className="cursor-pointer px-3 py-1"
              onClick={() => setActiveCategory(cat)}
              data-testid={`category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="discover">
        <TabsList className="mb-6">
          <TabsTrigger value="discover" data-testid="tab-discover">
            <TrendingUp className="mr-2 h-4 w-4" />
            Discover
          </TabsTrigger>
          <TabsTrigger value="saved" data-testid="tab-saved-pins">
            <Bookmark className="mr-2 h-4 w-4" />
            Saved ({savedPins.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discover">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {filteredPins.map((pin) => (
              <PinCard
                key={pin.id}
                pin={pin}
                isSaved={savedPins.includes(pin.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
          {filteredPins.length === 0 && (
            <div className="py-12 text-center">
              <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                No pins found matching your search
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved">
          {savedItems.length === 0 ? (
            <div className="py-12 text-center">
              <Bookmark className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                Save pins you like to build your style profile
              </p>
            </div>
          ) : (
            <>
              <Card className="mb-6 p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">AI Learning Your Style</p>
                    <p className="text-sm text-muted-foreground">
                      Based on your {savedItems.length} saved pins, we're identifying patterns in your taste
                    </p>
                  </div>
                  <Button className="ml-auto" data-testid="button-apply-style">
                    Apply to Recommendations
                  </Button>
                </div>
              </Card>
              <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
                {savedItems.map((pin) => (
                  <PinCard
                    key={pin.id}
                    pin={pin}
                    isSaved={true}
                    onToggleSave={toggleSave}
                  />
                ))}
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface PinCardProps {
  pin: PinItem;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

function PinCard({ pin, isSaved, onToggleSave }: PinCardProps) {
  return (
    <div
      className="group relative mb-4 overflow-hidden rounded-xl break-inside-avoid"
      data-testid={`pin-card-${pin.id}`}
    >
      <img
        src={pin.imageUrl}
        alt={pin.title}
        className="w-full object-cover transition-transform group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100">
        <p className="font-medium text-white">{pin.title}</p>
        <div className="mt-1 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {pin.category}
          </Badge>
          <span className="text-xs text-white/70">{pin.saves.toLocaleString()} saves</span>
        </div>
      </div>

      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          size="icon"
          variant="secondary"
          className={isSaved ? "text-primary" : ""}
          onClick={() => onToggleSave(pin.id)}
          data-testid={`button-save-pin-${pin.id}`}
        >
          <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
        </Button>
        <Button size="icon" variant="secondary" data-testid={`button-view-pin-${pin.id}`}>
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
