import React from "react";
import PersonList from "./PersonList";

function NameList() {
  const name = ["Sanosh", "Padma", "Baloji"];
  const person = [
    {
      id: 1,
      name: "Santosh",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Ajit",
      age: 29,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Supreeth",
      age: 25,
      skill: "Vue",
    },
  ];
  const nameMap = person.map(detail => (
    <PersonList key = {detail.id} detail = {detail}/>
    ));
  return <div>{nameMap}</div>;
}

export default NameList;
