import React from "react";
import Section from "./components/UI/Section";
import Header from "./components/UI/Header";
import Time from "./components/Calendar/CurrentTime";
import ChoreForm from "./components/Form/ChoreForm";
import NewChild from "./components/Child/NewChild";

const App = () => {
  // Initialize new Date object
  let now = new Date(Date.now());
  // Temporary data
  let childList = [
    {
      name: "Courtney",
      age: 6,
      imgSrc: "",
      chores: {
        morning: ["Potty time", "Wash face", "Make your bed", "Eat breakfast", "Brush teeth", "Get dressed", "Comb hair", "Get backpack ready", "School time"],
        evening: ["Homework/Spanish", "Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
      }
    },
    {
      name: "Cameron",
      age: 3,
      imgSrc: "",
      chores: {
        morning: ["Potty time", "Wash face", "Make your bed", "Eat breakfast", "Brush teeth", "Get dressed", "Comb hair", "Get backpack ready", "School time"],
        evening: ["Practice Spanish", "Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
      }
    },
    {
      name: "Cayden",
      age: 1,
      imgSrc: "",
      chores: {
        morning: ["Eat breakfast", "Brush teeth", "Get dressed", "Comb hair", "Get bag ready", "Daycare time"],
        evening: ["Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
      }
    }
  ];

  return (
    <Section id="page--container">
      <Header className="header" title="Rewards Tracker" />
      <Time childList={childList} now={now} />
      <ChoreForm />
      <NewChild now={now} />
    </Section>
  );
};

export default App;
