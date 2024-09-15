// Components
import { Divider } from "@nextui-org/react";
import ImageGallery from "react-image-gallery";

// Data
import { GALLERY_ITEMS as galleryItems } from "../../../../data";

// Styles
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery.styles.css";

export const Gallery = () => {
  return (
    <section className="bg-primary" id="gallery">
      <div className="py-28 max-w-[1100px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col items-center max-w-[450px] mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 font-inter">Gallery</h2>
          <Divider className="bg-white w-[120px] mb-4" />
          <p className="text-white/80 italic">
            Highlights of Trainings, Talks, and More.
          </p>
        </div>

        <ImageGallery items={galleryItems} lazyLoad />
      </div>
    </section>
  );
};
