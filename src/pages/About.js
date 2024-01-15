import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
//  <img className="h-3/6 lg:h-4/6" src={poster} alt="" />
const About = () => {
  return (
    <div id="about" className="flex flex-col h-fit w-full items-center">
      <div className="flex flex-col h-3/6 w-full justify-center items-center">
        <div className="flex flex-col h-screen w-screen  italic items-center justify-around lg:w-4/6 lg:flex-row">
        
          <div className="w-screen flex flex-col lg:w-1/3">
            <p className="text-xl font-bold lg:text-3xl text-center">
              About the project
            </p>
            <p className="px-5 lg:text-xl text-center py-4">
              Wildflier is the second project in the course DH2413 Advanced 
              Graphics and Interactions at KTH, 2023. It is a multiplayer 
              experience where two players collaborate to put out a wildfire 
              from a helicopter. The first player controls the helicopter 
              and the second player controls the water gun. The goal is to 
              put out the wildfire before it spreads too far!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
            <Carousel >
              <div className="relative h-screen w-full ">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
                  <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Goals
                    </Typography>
                    <Typography
                      variant="h0"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      For developers
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      For this project we wanted to explore using multiple 
                      devices for interaction, and using interaction methods 
                      beyond mouse and keyboard, such as the gyroscope and 
                      accelerometer. We also wanted to push ourselves to try 
                      new graphical techniques and procedural generation.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="relative h-screen w-full ">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
                  <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Goals
                    </Typography>
                    <Typography
                      variant="h0"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      For Society
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 text-base"
                    >
                      Empty 
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="relative h-screen w-full ">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black">
                  <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Goals
                    </Typography>
                    <Typography
                      variant="h0"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      For Players
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 text-lg"
                    >
                      Our primary goal when starting the project was to 
                      create a fun co-op experience for the players. Co-op 
                      games in general are a great vehicle to bond with 
                      your friends by working together to achieve a goal. 
                      In our case the goal is to put out a forest fire, 
                      and the players have to communicate in order to 
                      effectively put it out.
                    </Typography>
                  </div>
                </div>
              </div>  
            </Carousel>
          <div className="flex flex-col items-center w-full my-5 justify-center">
            <p className="text-4xl font-extrabold w-4/5">Challenges and Obstacles</p>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full  md:w-2/5 px-8">
                Networking was the biggest challenge in the project. We needed 
                to perform networking for both mobile devices. The water gun 
                controls were extra challenging as the screen had to streamed 
                from the PC to the phone, as well as transferring the gyroscope, 
                accelerometer and interaction data back to the PC.
              </div>
              <div div className="w-full px-8 mt-4  md:w-2/5 md:mt-0">
                Another challenge was to create the fire spreading algorithm.
                Work in progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;