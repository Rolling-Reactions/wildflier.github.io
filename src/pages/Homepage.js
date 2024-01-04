import React, {useEffect, useState} from "react";
import { Link } from "react-scroll";
import vid from "../Intro_1.mp4";

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
      <video className="h-fit w-full" autoPlay muted>
        <source src={vid} type="video/mp4" />
        <image src="../Nico.png" alt="" />
      </video>
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
//         <iframe
// title="demo"
// className="h-full w-full"
// src="https://www.youtube.com/embed/x70-3mPJzX0"
// />