// Hooks
import { useRef } from "react";

// Components
import { Image, Button } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./testimonial-list.styles.css";

export const TestimonialList = ({ items }) => {
  const prevRef = useRef();
  const nextRef = useRef();

  /**
   * Before Swiper Init Handler
   * @param {object} swiper
   */
  const onBeforeSwiperInit = (swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  };

  // Rendered Testimonial Items
  const renderedTestimonialItems = items.map(
    ({ id, testimonial, author, organization, image }) => (
      <SwiperSlide key={id}>
        <div className="flex items-center gap-9">
          <Image
            classNames={{ wrapper: "shrink-0" }}
            width={170}
            height={170}
            radius="full"
            src={image}
            alt={author}
          />

          <div className="flex flex-col gap-6">
            <q className="block italic text-white/90 leading-6 text-wrap">
              {testimonial}
            </q>
            <cite className="not-italic text-blue">
              {author}
              <span className="text-sm text-white"> - {organization}</span>
            </cite>
          </div>
        </div>
      </SwiperSlide>
    )
  );

  return (
    <div className="max-w-[90%] mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          delay: 6000,
        }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={onBeforeSwiperInit}
      >
        {renderedTestimonialItems}
        <div className="flex justify-center gap-1">
          <Button
            className="bg-white text-blue text-2xl"
            ref={prevRef}
            isIconOnly
            size="sm"
            aria-label="Prev"
            title="Prev"
          >
            <FaChevronLeft />
          </Button>
          <Button
            className="bg-white text-blue text-2xl"
            ref={nextRef}
            isIconOnly
            size="sm"
            aria-label="Next"
            title="Next"
          >
            <FaChevronRight />
          </Button>
        </div>
      </Swiper>
    </div>
  );
};
