import React, {useEffect, useState} from "react";
import { Link } from "react-scroll";

const Homepage = () => {
  const [showReadMore, setShowReadMore] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReadMore(true);
    }, 7000); // 5000 milliseconds (5 seconds)

    return () => {
      clearTimeout(timer); // Clear the timer in case the component unmounts before 5 seconds
    };
  }, []);
  return (
    <div className="flex h-[120vh] w-full bg-black justify-center items-center text-white text-4xl">
      <iframe 
      className="h-full w-full" 
      src="https://www.youtube.com/embed/-ASJqcCm-PM?si=LQHpps8IPjn7VUe-" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      
      

      {showReadMore && (
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="animate-fade border rounded-full px-5 w-fit cursor-pointer hover:bg-gray-600 mt-5 absolute bottom-20  "
        >
          Read More
        </Link>
      )}
    </div>
  );
};

export default Homepage;
  //<iframe
  //title="demo"
  //className="h-full w-full"
  //src="https://www.youtube.com/watch?v=-ASJqcCm-PM">
  //</iframe>
  