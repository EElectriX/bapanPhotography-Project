import React from 'react';
import { NavLink } from 'react-router-dom';
const sections = [
  { id : 1,
    title: "My Courses",
    subtitle: "Products & Solutions",
    image: "/rahel-arlitt--h9UkcKg1Bk-unsplash.jpg",
    link: "#",
  },
  {
    id : 2,
    title: "My Services",
    subtitle: "Products & Services",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    link: "#",
  },
  {
    id : 3,
    title: "ABOUT ME",
    subtitle: "Company Information",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    link: "About",
  },
];

const ThreeColumns = () => {
  return (
    <div className="bg-black">
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen w-full m-0 p-0">
     
      {sections.map((section) => (
        <NavLink key={section.id} to={section.link}
        className="w-full h-full object-cover bg-black relative group overflow-hidden cursor-pointer 
        transition-transform duration-500 transform 
        hover:scale-x-[1.05] hover:z-10 hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.5)] "
        >
         
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
              {section.title}
            </h2>
            <a
              href={section.link}
              className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded
               text-white font-medium backdrop-blur transition drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]"
            >
              {section.subtitle} &gt;
            </a>
          </div>
        </NavLink>

      ))}
    </div>
    </div>
  
  );
};

export default ThreeColumns;