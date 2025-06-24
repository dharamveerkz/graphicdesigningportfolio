import React, { useState } from "react";

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

const categories = [
  { title: "Logos", images: [logo1, logo2, logo3, logo4, logo5] },
  { title: "Posters", images: [poster1, poster2, poster3, poster4, poster5] },
  { title: "Certificates", images: [cert1, cert2, cert3, cert4, cert5] },
  { title: "T-Shirts", images: [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5] },
  { title: "Social Posts", images: [post1, post2, post3, post4, post5] },
  { title: "Event Branding", images: [event1, event2, event3, event4, event5] },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setZoom(1);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of creative visuals categorized by design type
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {category.images.map((img, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center overflow-hidden rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(img)}
                >
                  <img
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    className="hover:scale-105 transition-transform duration-300 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1000] bg-black bg-opacity-90 flex items-center justify-center overflow-auto pt-[90px] p-4">
          <div className="relative">
            {/* Zoom Controls */}
            <div className="absolute top-2 left-2 z-[1100] flex gap-2">
              <button
                onClick={zoomIn}
                className="text-white bg-white/10 px-3 py-1 rounded-full border border-white hover:bg-white/20"
              >
                ➕
              </button>
              <button
                onClick={zoomOut}
                className="text-white bg-white/10 px-3 py-1 rounded-full border border-white hover:bg-white/20"
              >
                ➖
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-white/10 border border-white hover:bg-red-600 hover:text-white transition-all rounded-full px-3 py-1 z-[1100]"
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Zoomed View"
              style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
              className="transition-transform duration-300 object-contain max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
