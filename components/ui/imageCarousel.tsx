import React, { useEffect, useRef, useState } from "react";
import nptel from "../../public/nptel.png"
const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    image: "https://images.credly.com/size/300x300/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description:
      "Issued by Amazon Web Services in January 2023.",
    href:"https://www.credly.com/badges/ac231f94-6119-47e0-ad63-15e40691b72a/public_url"
  },
  {
    id: 2,
    title: "Cloud Computing - IIT Kharagpur",
    image: "/nptel.png",
    description:
      "Issued by NPTEL. Scored 72% receiving elite badge.",
    href:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S45290199230380511"
  },
  {
    id: 3,
    title: "Introduction to Frontend Development by Meta",
    image: "/meta.png",
    description:
      "Issued by Coursera in June 2024.",
      href:"https://www.coursera.org/account/accomplishments/verify/86XDN65GSLXZ"
  },
  {
    id: 4,
    title: "Applied Machine Learning in Python by University of Michigan",
    image: "ml.png",
    description:
      "Issued by Coursera in February 2023.",
      href:"https://www.coursera.org/account/accomplishments/verify/SKYTT8J4249A?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
];

export default function Certifications() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);

  const startScrolling = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // pixels per frame
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const autoScroll = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        // Reset to beginning when we reach the end
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    startScrolling();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="pt-8 mt-10 bg-gradient-to-r from-black via-gray-400 via-gray-700 via-gray-400 to-black overflow-x-hidden">
<div
        ref={scrollRef}
        className="flex -space-x-5 lg:space-x-6 overflow-x-auto scrollbar pb-1 justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="max-w-[300px] flex-shrink-0 bg-transparent rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-100 hover:animate-pulse "
          >
            <a href={cert.href} >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-contain" 
            />
            </a>
            <div className="p-2 text-center">
              <a href={cert.href} className="text- text-white font-semibold mb-2 font-serif">{cert.title}</a>
              <p className="text-white whitespace-pre-line text-sm font-merriweather">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
