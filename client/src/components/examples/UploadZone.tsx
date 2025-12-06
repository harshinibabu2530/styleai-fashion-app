import { UploadZone } from "../UploadZone";

export default function UploadZoneExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <UploadZone
        label="Upload Tops"
        description="T-shirts, blouses, sweaters..."
        onFilesAdded={(files) => console.log("Tops files:", files)}
      />
      <UploadZone
        label="Upload Bottoms"
        description="Pants, skirts, shorts..."
        onFilesAdded={(files) => console.log("Bottoms files:", files)}
      />
    </div>
  );
}
