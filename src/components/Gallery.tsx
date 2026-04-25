// components/Gallery.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  Download,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";

// Import images
import logo1 from "../highlights/logos/logo1.png";
import logo2 from "../highlights/logos/logo2.png";
import logo3 from "../highlights/logos/logo3.png";
import logo4 from "../highlights/logos/logo4.png";
import logo5 from "../highlights/logos/logo5.png";

import poster1 from "../highlights/posters/poster1.png";
import poster2 from "../highlights/posters/poster2.png";
import poster3 from "../highlights/posters/poster3.png";
import poster4 from "../highlights/posters/poster4.png";
import poster5 from "../highlights/posters/poster5.png";

import cert1 from "../highlights/certificates/cert1.png";
import cert2 from "../highlights/certificates/cert2.png";
import cert3 from "../highlights/certificates/cert3.png";
import cert4 from "../highlights/certificates/cert4.png";
import cert5 from "../highlights/certificates/cert5.png";

import tshirt1 from "../highlights/tshirts/tshirt1.png";
import tshirt2 from "../highlights/tshirts/tshirt2.png";
import tshirt3 from "../highlights/tshirts/tshirt3.png";
import tshirt4 from "../highlights/tshirts/tshirt4.png";
import tshirt5 from "../highlights/tshirts/tshirt5.png";

import post1 from "../highlights/posts/post1.png";
import post2 from "../highlights/posts/post2.png";
import post3 from "../highlights/posts/post3.png";
import post4 from "../highlights/posts/post4.png";
import post5 from "../highlights/posts/post5.png";

import event1 from "../highlights/events/event1.png";
import event2 from "../highlights/events/event2.png";
import event3 from "../highlights/events/event3.png";
import event4 from "../highlights/events/event4.png";
import event5 from "../highlights/events/event5.png";

// Type definitions
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  index: number;
}

interface Category {
  title: string;
  images: string[];
}

const categories: Category[] = [
  { title: "Logos", images: [logo1, logo2, logo3, logo4, logo5] },
  { title: "Posters", images: [poster1, poster2, poster3, poster4, poster5] },
  { title: "Certificates", images: [cert1, cert2, cert3, cert4, cert5] },
  { title: "T-Shirts", images: [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5] },
  { title: "Social Posts", images: [post1, post2, post3, post4, post5] },
  { title: "Event Branding", images: [event1, event2, event3, event4, event5] },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Flatten all images for modal navigation
  const allImages: GalleryImage[] = categories.flatMap((category) =>
    category.images.map((src, idx) => ({
      src,
      alt: `${category.title} ${idx + 1}`,
      category: category.title,
      index: idx,
    }))
  );

  // Filter images by active category
  const filteredImages = activeCategory === "All"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  // Handle image load for skeleton states
  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  // Open modal with image data
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };

  // Close modal and cleanup
  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setZoom(1);
    document.body.style.overflow = "auto";
  }, []);

  // Zoom controls
  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const resetZoom = () => setZoom(1);

  // Navigation in modal
  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setZoom(1);
  };

  // Download image with feedback
  const downloadImage = async (image: GalleryImage) => {
    setIsDownloading(image.src);
    try {
      const response = await fetch(image.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${image.category.toLowerCase().replace(" ", "-")}-${image.index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(image.src, "_blank");
    } finally {
      setIsDownloading(null);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "+") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeModal, filteredImages]);

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Category tabs
  const categoryTabs = ["All", ...categories.map((c) => c.title)];

  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Gallery Highlights
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of creative work across multiple design disciplines
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryTabs.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {filteredImages.map((image) => {
            const isLoaded = loadedImages.has(image.src);
            return (
              <div
                key={image.src}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 border border-gray-200 cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                onClick={() => openModal(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(image)}
                aria-label={`View ${image.alt}`}
              >
                {/* Skeleton Loader */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                    <ImageIcon className="w-8 h-8 text-gray-300" />
                  </div>
                )}

                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.src)}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div className="text-white text-xs font-medium truncate w-full">
                    {image.alt}
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-md shadow-sm">
                  {image.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No items found in this category</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-sm font-medium text-yellow-600 hover:text-yellow-700"
            >
              View all work →
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-6"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[1100] p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close viewer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[1100] p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous image (←)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-[1100] p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image (→)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center",
                transition: "transform 0.2s ease-out",
              }}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Controls Panel */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1100] flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 border border-white/20">
            {/* Zoom Controls */}
            <button
              onClick={zoomOut}
              disabled={zoom <= 1}
              className="p-2 text-white/80 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom out (-)"
            >
              <ZoomOut className="w-4.5 h-4.5" />
            </button>
            
            <span className="text-white/90 text-xs font-mono min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            
            <button
              onClick={zoomIn}
              disabled={zoom >= 3}
              className="p-2 text-white/80 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom in (+)"
            >
              <ZoomIn className="w-4.5 h-4.5" />
            </button>

            <div className="w-px h-4 bg-white/20 mx-1" />

            {/* Download Button */}
            <button
              onClick={() => downloadImage(selectedImage)}
              disabled={isDownloading === selectedImage.src}
              className="flex items-center gap-1.5 px-3 py-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium transition-all disabled:opacity-50"
              aria-label="Download image"
            >
              {isDownloading === selectedImage.src ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>

          {/* Image Info */}
          <div className="absolute top-4 left-4 z-[1100] bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20">
            <p className="text-white/90 text-sm font-medium">{selectedImage.alt}</p>
            <p className="text-white/60 text-xs">{selectedImage.category}</p>
          </div>

          {/* Keyboard Hints */}
          <div className="absolute bottom-4 right-4 z-[1100] hidden md:flex items-center gap-3 text-white/50 text-xs">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">←</kbd>
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">→</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">+</kbd>
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">−</kbd>
              <span>Zoom</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20">Esc</kbd>
              <span>Close</span>
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;