import React from "react";
import Nico from "../Nico.png";
import Jingyi from "../Jingyi.jpg";
import Simon from "../Simon.jpg";
import Aritra from "../Aritra.jpg";
import Anna from "../Anna.jpg";
import Adria from "../Adria.jpg";

const Team = () => {
  const members = [
    {
      name: "Jingyi Hu",
      role: "Networking, Helicopter Controls",
      photo: Jingyi,
      mail: "jingyihu@kth.se",
      linkedIn: "https://www.linkedin.com/in/jingyi-hu-3853a41a4",
    },
    {
      name: "Simon Hallak",
      role: "Helicopter Controls, Fire Spreading and Networking.",
      photo: Simon,
      mail: "shallak@kth.se",
      linkedIn: "http://linkedin.com/in/simon-hallak-2738a318b",
    },
    {
      name: "Aritra Bhakat",
      role: "Created the Map: Procedurally Generating Terrain and Trees. Fire Spreading Algorithm. Optimized the Performance of Fire Simulation and Forest Rendering.",
      photo: Aritra,
      mail: "aritra@kth.se",
      linkedIn: "https://www.linkedin.com/in/aritra-bhakat/",
    },
    {
      name: "Anna Kristiansson",
      role: "Performance Optimization (Modeling Level Of Detail for trees), Fire and Smoke Particle Effects, Fire Spreading Algoritm",
      photo: Anna,
      mail: "annakris@kth.se",
      linkedIn: "https://www.linkedin.com/in/kristiansson-anna/",
    },
    {
      name: "Nicolas Rollino",
      role: "Shooting Mechanics, Fire Extinguishing, Water Shader. Modeling and Shader for Watergun.",
      photo: Nico,
      mail: "nsrs@kth.se",
      linkedIn: "https://www.linkedin.com/in/nicolas-rollino-262527197/",
    },
    {
        name: "Adria Cruz",
        role: "Supervisor",
        photo: Adria,
        mail: "adria.cruz@ericsson.com",
        linkedIn: "https://www.linkedin.com/in/adriacruzcebrian/",
      },

  ];
  return (
    <div id="team" className="flex flex-col h-fit w-full justify-center items-center"> 
      <p className="text-4xl font-bold w-4/5">Team </p> 
      
      <div className="flex flex-col justify-center h-4/5 md:flex-wrap md:flex-row ">
        {members.map((member) => {
          return (
            <div
              className="flex flex-col mt-8 w-full items-center  md:w-1/4 md:mx-5"
              key={member.name}
            >
              <img
                className="h-56 w-56 object-cover rounded-full object-center"
                src={member.photo}
                alt=""
              />
              <div className="mt-8 font-bold">{member.name}</div>
              <div className=" font-bold">{member.mail}</div>
              <div className="  text-center">{member.role}</div>
              <a className="hover:underline font-bold" href={member.linkedIn}>LinkedIn</a>
              <div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;