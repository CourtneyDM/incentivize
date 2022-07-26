import React from "react";
import Section from "./components/UI/Section";
import ChildList from "./components/Child/ChildList";
import Header from "./components/UI/Header";
import ChoreForm from "./components/Form/ChoreForm";

const App = () => {
  // Temporary data
  let currentDate = new Date(Date.now());
  let currentHour, currentMinute, currentSecond;

  let childList = [
    {
      name: "Courtney",
      age: 6,
      imgSrc: "",
      chores: [
        "Homework/Spanish",
        "Put away toys",
        "Eat dinner",
        "Bath time",
        "Put on pajamas",
        "Put away dirty clothes",
        "Potty time",
        "Brush teeth",
        "Choose bedtime story",
        "Bedtime"
      ]
    },
    {
      name: "Cameron",
      imgSrc: "",
      age: 3,
      chores: [
        "Practice Spanish",
        "Put away toys",
        "Eat dinner",
        "Bath time",
        "Put on pajamas",
        "Put away dirty clothes",
        "Potty time",
        "Brush teeth",
        "Choose bedtime story",
        "Bedtime"
      ]
    },
    {
      name: "Cayden",
      imgSrc: "",
      age: 1,
      chores: [
        "Put away toys",
        "Eat dinner",
        "Bath time",
        "Put on pajamas",
        "Put away dirty clothes",
        "Potty time",
        "Brush teeth",
        "Choose bedtime story",
        "Bedtime"
      ]
    }
  ];

  // Event handler for input field change
  const handleChange = (e) => {
    console.log("Input field was changed.");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Current Date: ${currentDate}\nCurrent Hour: ${currentHour}\nCurrent Minute: ${currentMinute}`);
  };

  const setCurrentTime = () => {
    currentHour = currentDate.getHours();
    currentMinute = currentDate.getMinutes();
    currentSecond = currentDate.getSeconds();
  };

  // Event handler for toggling chores when completed
  const toggleChore = (event) => {
    let chore = event.target;
    // console.log(chore.classList);

    chore.classList.contains("checked") ? chore.classList.remove("checked") : chore.classList.add("checked");
  };

  setCurrentTime();

  return (
    <Section className="container" id="page--container">
      <p id="current-timestamp">
        Current Time: {currentHour}:{currentMinute}:{currentSecond} <span id="time-icon">icon goes here</span>
      </p>
      <Header className="header" title="Rewards Tracker" />
      <ChildList childList={childList} toggleChore={toggleChore} />
      <ChoreForm handleChange={handleChange} handleButtonClick={handleFormSubmit} />
    </Section>
  );
};

export default App;
