import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  mainImage: string;
  galleryImages: string[];
  title: string;
}

export const ProjectGallery = ({ mainImage, galleryImages, title }: ProjectGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Combine main image with gallery images for display
  // You can add between 2-5 images in galleryImages array
  const allImages = [mainImage, ...galleryImages].filter(Boolean);
  
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Main Gallery Grid */}
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <img
            src={allImages[0]}
            alt={`${title} - Main`}
            className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>

        {/* Gallery Grid - 2 to 5 additional images */}
        {allImages.length > 1 && (
          <div className={`grid gap-4 ${
            allImages.length === 2 ? 'grid-cols-1' :
            allImages.length <= 3 ? 'grid-cols-2' :
            allImages.length <= 5 ? 'grid-cols-3' : 'grid-cols-3'
          }`}>
            {allImages.slice(1, 6).map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group aspect-video"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image}
                  alt={`${title} - Image ${index + 2}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {allImages.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          <img
            src={allImages[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Dots indicator */}
          {allImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
