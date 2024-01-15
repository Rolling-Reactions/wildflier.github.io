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
              from a helicopter, using accelerometer and gyroscope data from 
              their phones. The first player controls the helicopter and the 
              second player controls the water gun. The goal is to put out 
              the wildfire before it spreads too far!
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
                      For this project we wanted to explore using multiple devices for interaction, and using interaction methods beyond mouse and keyboard, such as the gyroscope and accelerometer. We also wanted to push ourselves to try new graphical techniques and procedural generation.
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
            <p className="text-4xl font-bold w-4/5">Goals</p>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full  md:w-2/5 px-8">

              <div>
                <b>For Developers</b>
              </div>
              
              <div>
                For this project we wanted to explore using multiple 
                devices for interaction, and using interaction methods 
                beyond mouse and keyboard, such as the gyroscope and 
                accelerometer. We also wanted to push ourselves to try 
                new graphical techniques and procedural generation.
              </div>

              </div>
              <div className="w-full px-8 mt-4  md:w-2/5 md:mt-0">
                <div>
                  <b>For Players</b>
                </div>
                <div>
                  Our primary goal when starting the project was to 
                  create a fun co-op experience for the players. Co-op 
                  games in general are a great vehicle to bond with 
                  your friends by working together to achieve a goal. 
                  In our case the goal is to put out a forest fire, 
                  and the players have to communicate in order to 
                  effectively put it out.
                </div>            
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center w-full my-5 justify-center">
            <p className="text-4xl font-bold w-4/5">Challenges and Obstacles</p>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full  md:w-2/5 px-8">
                <b>Networking</b> was the biggest challenge in the project. We needed 
                to perform networking for both mobile devices. The water gun 
                controls were extra challenging as the screen had to streamed 
                from the PC to the phone, as well as transferring the gyroscope, 
                accelerometer and interaction data back to the PC.
              </div>
              <div div className="w-full px-8 mt-4  md:w-2/5 md:mt-0">
                It was also a challenge to create a complete game in such a short
                amount of time. 
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full my-5 justify-center">
            <p className="text-4xl font-bold w-4/5">Technologies Used</p>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full  md:w-2/5 px-8">

                <div><b>Unity</b> was the game engine used for this project. All the members were familiar with it and we knew it had versatile networking features which was important for our game.</div>
          
                <div><b>Blender:</b> In order to create the different Level Of Detail (LOD) for the tree models, we used Blender.</div>
                
              </div>
              <div div className="w-full px-8 mt-4  md:w-2/5 md:mt-0">

              <div><b>Github</b> was used for version control, which was crucial so that the team could work on many features in parallel.</div>
              
              <div><b>Trello</b> was used to organise weekly Agile sprints and bring structure to the collaboration.</div>
                
              <div><b>Discord</b> was used for daily communication between team members and our supervisor.</div>
              
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full my-5 justify-center">
            <p className="text-4xl font-bold w-4/5">Related Work</p>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full  md:w-2/5 px-8">

                <div><b>1. Stop disasters 2.0: Video games as tools for Disaster Risk Reduction</b></div>
                <div>Anthony Gampbell, 2016</div>
                <div></div>
          
                <div><b>2. Unity3D Android Gyroscope Controls (with a helicopter game)</b></div>
                
              </div>
              <div div className="w-full px-8 mt-4  md:w-2/5 md:mt-0">
     
              <div><b>Similar Cool Project: FireJumper Inferno</b></div>
                
              <div>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/uXP2cxPGLmM?si=85lZKyaR6ed64MZr" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


<iframe width="560" height="315" src="https://www.youtube.com/embed/uXP2cxPGLmM?si=85lZKyaR6ed64MZr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


export default About;