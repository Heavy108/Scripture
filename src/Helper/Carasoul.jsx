"use client";
import "../CSS/Carasoul.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Card = (props) => {
  return (
    // Embla requires a slide wrapper to manage widths properly
    <div className="embla__slide">
      <div className={`outerFrame ${props.isActive ? "active" : ""}`}>
        <div
          className="potrait"
          style={{
            backgroundColor: props.bg_color,
          }}
        >
          <img
            src={`data:image/jpeg;base64,${props.image}`}
            alt={props.title}
          />
        </div>
        <div className="Introduction">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link href={props.address}>
            <button className="read"> Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Carausel Pagination Dot
const Dot = ({ isActive, onClick }) => {
  return (
    <span
      className={`dot ${isActive ? "active" : ""}`}
      onClick={onClick}
    ></span>
  );
};

const Carasoul = ({ items }) => {
  // Initialize Embla with loop and center alignment
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  // Track the current active slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="carouselwrapper module-wrapper">
      <center className="CarasoulDescription">
        <h4>FEATURES MAGAZINE</h4>
      </center>

      {/* Embla Viewport */}
      <div className="embla" ref={emblaRef}>
        {/* Embla Container */}
        <div className="embla__container">
          {items.map((t, index) => (
            <Card
              key={t.title + index}
              text={t.text}
              title={t.title}
              image={t.image}
              bg_color={t.bg_color}
              address={t.address}
              isActive={index === selectedIndex}
            />
          ))}
        </div>
      </div>

      <div className="ui">
        <span onClick={scrollPrev} className="prev">
          <GoArrowLeft />
        </span>

        <div className="dots-container">
          {items.map((_, index) => (
            <Dot
              key={index}
              isActive={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        <span onClick={scrollNext} className="next">
          <GoArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Carasoul;
