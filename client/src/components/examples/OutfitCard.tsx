import { OutfitCard } from "../OutfitCard";

export default function OutfitCardExample() {
  // todo: remove mock functionality
  const mockOutfit = {
    id: "1",
    topImageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    bottomImageUrl: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop",
    aiTip: "This navy blazer pairs beautifully with khaki chinos for a smart casual look perfect for brunch.",
    matchScore: 92,
  };

  return (
    <div className="w-80">
      <OutfitCard
        outfit={mockOutfit}
        onSave={(id) => console.log("Save outfit:", id)}
        onTry={(id) => console.log("Try outfit:", id)}
      />
    </div>
  );
}
