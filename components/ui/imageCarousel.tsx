import React from "react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    image: "https://images.credly.com/size/300x300/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description: "Issued by Amazon Web Services in January 2023.",
    href: "https://www.credly.com/badges/ac231f94-6119-47e0-ad63-15e40691b72a/public_url",
  },
  {
    id: 2,
    title: "Cloud Computing - IIT Kharagpur",
    image: "/nptel.png",
    description: "Issued by NPTEL. Scored 72% receiving elite badge.",
    href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S45290199230380511",
  },
  {
    id: 3,
    title: "Introduction to Frontend Development by Meta",
    image: "/meta.png",
    description: "Issued by Coursera in June 2024.",
    href: "https://www.coursera.org/account/accomplishments/verify/86XDN65GSLXZ",
  },
  {
    id: 4,
    title: "Applied Machine Learning in Python by University of Michigan",
    image: "/ml.png",
    description: "Issued by Coursera in February 2023.",
    href: "https://www.coursera.org/account/accomplishments/verify/SKYTT8J4249A",
  },
];

export default function Certifications() {
  return (
    <div className="pt-8 mt-10  bg-gradient-to-r from-black via-gray-700 to-black bg-black dark:bg-black">
      <div className="flex overflow-x-auto scrollbar-hide  md:space-x-6 px-4 py-4 mx-0 md:mx-20">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="min-w-[250px] max-w-[300px] flex-shrink-0 bg-transparent rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <a href={cert.href} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain bg-transparent rounded-t-xl"
              />
              <div className="p-3 bg-transparent text-white text-center rounded-b-xl">
                <div className="font-semibold font-serif">{cert.title}</div>
                <p className="text-sm mt-1 font-merriweather">{cert.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
