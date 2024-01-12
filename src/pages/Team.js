import React from "react";
import Nico from "../Nico.png";
import Jingyi from "../Jingyi.jpg";
import Simon from "../Simon.jpg";
import Aritra from "../Aritra.jpg";
import Anna from "../Anna.jpg";

const Team = () => {
  const members = [
    {
      name: "Jingyi Hu",
      role: "Fluid simulation, Chemical experiment developer",
      photo: Jingyi,
      mail: "jingyihu@kth.se",
      linkedIn: "https://www.linkedin.com/in/jingyi-hu-3853a41a4",
    },
    {
      name: "Simon Hallak",
      role: "Interaction developer and Scene creation",
      photo: Simon,
      mail: "shallak@kth.se",
      linkedIn: "http://linkedin.com/in/simon-hallak-2738a318b",
    },
    {
      name: "Aritra Bhakat",
      role: "Wheelchair physics and interaction, integrating fluid simulation",
      photo: Aritra,
      mail: "aritra@kth.se",
      linkedIn: "https://www.linkedin.com/in/aritra-bhakat/",
    },
    {
      name: "Anna Kristiansson",
      role: "Interaction, Modelling and Scene Design",
      photo: Anna,
      mail: "annakris@kth.se",
      linkedIn: "https://www.linkedin.com/in/anna-kristiansson-79b505174/",
    },
    {
      name: "Nicolas Rollino",
      role: "Web Development and Fluid simulation",
      photo: Nico,
      mail: "nsrs@kth.se",
      linkedIn: "https://www.linkedin.com/in/nicolas-rollino-262527197/",
    },
    // {
    //     name: "Adria Cruz",
    //     role: "Supervisor",
    //     photo: Adria,
    //     mail: "adria.cruz@ericsson.com",
    //     linkedIn: "https://www.linkedin.com/in/adriacruzcebrian/",
    //   },

  ];
  return (
    <div id="team" className="flex flex-col h-fit w-full justify-center items-center">
      <div className="text-6xl w-4/5">Team</div>
      <div className="flex flex-col justify-center h-4/5 md:flex-wrap md:flex-row">
        {members.map((member) => {
          return (
            <div
              className="flex flex-col mt-8 w-full items-center  md:w-1/4 md:mx-5"
              key={member.name}
            >
              <img
                className="h-56 w-56 rounded-full object-cover object-center"
                src={member.photo}
                alt=""
              />
              <div className="mt-8 font-bold">{member.name}</div>
              <div className="font-bold  text-center">Primary role:  {member.role}</div>
              <div className=" font-bold">Mail: {member.mail}</div>
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