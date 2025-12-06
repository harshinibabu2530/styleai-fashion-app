import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon } from "lucide-react";

interface UploadZoneProps {
  label: string;
  description?: string;
  onFilesAdded: (files: File[]) => void;
}

export function UploadZone({ label, description, onFilesAdded }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesAdded(acceptedFiles);
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`hover-elevate active-elevate-2 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 transition-colors ${
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/25 hover:border-primary/50"
      }`}
      data-testid={`upload-zone-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <input {...getInputProps()} />
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        {isDragActive ? (
          <ImageIcon className="h-6 w-6 text-primary" />
        ) : (
          <Upload className="h-6 w-6 text-muted-foreground" />
        )}
      </div>
      <div className="text-center">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          {description || "Drag & drop or click to upload"}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          PNG, JPG, WEBP up to 10MB
        </p>
      </div>
    </div>
  );
}
