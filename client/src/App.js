import React from "react";
import ChildList from "./components/ChildList";
import Header from "./components/Header";
import ChoreForm from "./components/ChoreForm";

function App() {
  // Temporary data
  let currentDate = new Date(Date.now());
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let childList = [
    {
      name: "Courtney",
      age: 6,
      imgSrc: "",
      chores: ["Homework/Spanish", "Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
    },
    {
      name: "Cameron",
      imgSrc: "",
      age: 3,
      chores: ["Practice Spanish", "Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
    },
    {
      name: "Cayden",
      imgSrc: "",
      age: 1,
      chores: ["Put away toys", "Eat dinner", "Bath time", "Put on pajamas", "Put away dirty clothes", "Potty time", "Brush teeth", "Choose bedtime story", "Bedtime"]
    }
  ];

  const onClick = () => {
    console.log(`Current Date: ${currentDate}\nCurrent Hour: ${currentHour}\nCurrent Minute: ${currentMinute}`);
  };

  const handleChange = (e) => {
    console.log("Input field was changed.");
  };

  return (
    <section className="container">
      <Header className="header" title="Rewards Tracker" />
      <ChildList childList={childList} />
      <ChoreForm handleChange={handleChange} onClick={onClick} />
    </section>
  );
}

export default App;
