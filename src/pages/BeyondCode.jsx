import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Video, Plane, Instagram, X, ChevronLeft, ChevronRight,
  Sparkles, Heart
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

// Import static data
import { PASSIONS, PASSION_GALLERY, PROFILE } from '../data/portfolioData';

const BeyondCode = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % PASSION_GALLERY.length;
    setCurrentIndex(newIndex);
    setSelectedImage(PASSION_GALLERY[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + PASSION_GALLERY.length) % PASSION_GALLERY.length;
    setCurrentIndex(newIndex);
    setSelectedImage(PASSION_GALLERY[newIndex]);
  };

  // Icon mapping
  const getIcon = (iconName) => {
    const icons = {
      Camera: <Camera size={24} />,
      Video: <Video size={24} />,
      Plane: <Plane size={24} />,
      Sparkles: <Sparkles size={24} />
    };
    return icons[iconName] || <Heart size={24} />;
  };

  return (
    <PageTransition>
      <div className="h-full overflow-y-auto custom-scrollbar bg-[#121212] pb-32 md:pb-0">

        {/* Header - Gradient with warm/creative colors */}
        <div className="relative bg-gradient-to-b from-[#7c3aed] via-[#4c1d95] to-[#121212] pt-24 pb-12 px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-end gap-6 md:gap-10 transition-colors duration-500">
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-52 md:h-52 bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_8px_40px_rgba(0,0,0,0.5)] rounded-full md:rounded-md flex items-center justify-center shrink-0 group hover:scale-105 transition-transform duration-500"
          >
            <Camera className="text-white drop-shadow-md w-14 h-14 md:w-24 md:h-24 group-hover:rotate-12 transition-transform duration-500"/>
          </motion.div>

          {/* Title */}
          <div className="flex flex-col gap-2 w-full z-10 pb-1">
            <span className="text-xs font-bold tracking-widest uppercase text-white flex items-center gap-1.5">
              <Sparkles size={16} className="text-purple-300" />{" "}
              Life Outside Code
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl leading-tight">
              Beyond The Code
            </h1>
            <p className="text-gray-300 font-medium text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              When I'm not building robots or writing algorithms, you'll find me capturing moments, 
              exploring new places, and chasing creative adventures.
            </p>
          </div>
        </div>

        {/* Passions Grid */}
        <div className="px-4 md:px-8 mt-8 pb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">What Drives Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PASSIONS.map((passion, idx) => (
              <motion.div
                key={passion._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#181818] hover:bg-[#282828] rounded-xl p-5 transition-all duration-300 group border border-transparent hover:border-[#333] cursor-default"
              >
                <div className={`w-12 h-12 rounded-full ${passion.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={passion.iconColor}>
                    {getIcon(passion.icon)}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{passion.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{passion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="px-4 md:px-8 mt-4 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">Gallery</h2>
            {PROFILE.instagramLink && (
              <a 
                href={PROFILE.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
              >
                <Instagram size={18} />
                <span className="hidden md:inline">Follow on Instagram</span>
              </a>
            )}
          </div>
          
          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PASSION_GALLERY.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => openLightbox(image, idx)}
                className={`
                  relative overflow-hidden rounded-lg cursor-pointer group
                  ${idx % 5 === 0 ? 'row-span-2' : ''}
                  ${idx % 7 === 3 ? 'col-span-2' : ''}
                `}
              >
                <img 
                  src={image.url} 
                  alt={image.caption || 'Gallery image'}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium truncate">{image.caption}</p>
                    {image.location && (
                      <p className="text-gray-300 text-xs">{image.location}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        {PROFILE.instagramLink && (
          <div className="px-4 md:px-8 pb-24">
            <motion.a
              href={PROFILE.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl p-6 md:p-8 text-center hover:scale-[1.02] transition-transform"
            >
              <Instagram size={40} className="mx-auto mb-4 text-white" />
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">See More on Instagram</h3>
              <p className="text-white/80 text-sm md:text-base">Follow my adventures and creative journey</p>
              <span className="inline-block mt-4 px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition">
                @{PROFILE.instagramHandle || 'instagram'}
              </span>
            </motion.a>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            >
              {/* Close button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition p-2 bg-black/50 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition p-2 bg-black/50 rounded-full"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] relative"
              >
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                {(selectedImage.caption || selectedImage.location) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                    <p className="text-white font-medium">{selectedImage.caption}</p>
                    {selectedImage.location && (
                      <p className="text-gray-300 text-sm">{selectedImage.location}</p>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {PASSION_GALLERY.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default BeyondCode;