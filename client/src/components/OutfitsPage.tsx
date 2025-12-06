import { useState } from "react";
import { Sparkles, RefreshCw, Filter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OutfitCard, type OutfitRecommendation } from "./OutfitCard";

// todo: remove mock functionality
const mockOutfits: OutfitRecommendation[] = [
  {
    id: "1",
    topImageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    bottomImageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop",
    aiTip: "This navy blazer pairs beautifully with khaki chinos for a smart casual brunch look.",
    matchScore: 92,
  },
  {
    id: "2",
    topImageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=300&fit=crop",
    bottomImageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop",
    aiTip: "White t-shirt and blue jeans - a timeless combination that works for any casual occasion.",
    matchScore: 88,
  },
  {
    id: "3",
    topImageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
    bottomImageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop",
    aiTip: "This striped shirt with dark trousers creates a polished office-ready ensemble.",
    matchScore: 85,
  },
  {
    id: "4",
    topImageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop",
    bottomImageUrl: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=300&h=300&fit=crop",
    aiTip: "Cozy sweater with comfortable joggers for a stylish weekend-at-home vibe.",
    matchScore: 90,
  },
];

export function OutfitsPage() {
  const [outfits, setOutfits] = useState<OutfitRecommendation[]>(mockOutfits);
  const [savedOutfits, setSavedOutfits] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSave = (id: string) => {
    setSavedOutfits((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // todo: remove mock functionality - replace with AI generation
    setTimeout(() => {
      setOutfits([...outfits].sort(() => Math.random() - 0.5));
      setIsRefreshing(false);
    }, 1000);
  };

  const savedOutfitItems = outfits.filter((o) => savedOutfits.includes(o.id));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            Your Outfit Ideas
          </h1>
          <p className="mt-2 text-muted-foreground">
            AI-curated combinations based on your wardrobe
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" data-testid="button-filter">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button onClick={handleRefresh} disabled={isRefreshing} data-testid="button-refresh">
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            New Ideas
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all" data-testid="tab-all">
            <Sparkles className="mr-2 h-4 w-4" />
            All Recommendations
          </TabsTrigger>
          <TabsTrigger value="saved" data-testid="tab-saved">
            <Heart className="mr-2 h-4 w-4" />
            Saved ({savedOutfits.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outfits.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                onSave={handleSave}
                onTry={(id) => console.log("Try outfit:", id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          {savedOutfitItems.length === 0 ? (
            <div className="py-12 text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                No saved outfits yet. Click the heart icon to save your favorites!
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedOutfitItems.map((outfit) => (
                <OutfitCard
                  key={outfit.id}
                  outfit={outfit}
                  onSave={handleSave}
                  onTry={(id) => console.log("Try outfit:", id)}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
