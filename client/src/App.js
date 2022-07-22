import Header from "./components/Header";

function App() {
  const testArr = ["Courtney", "Gisenia", 2, 3, 9, "CJ", "Cams", "Squish"];
  // Event handler for adding a task
  const addTask = (e) => {
    console.log(e.target.value);
    testArr.splice(0, testArr.length, "Mom & Dad", "Courtney", "Cams", "Cayden");
    console.log(testArr);
  };
  return (
    <div className="container">
      <Header onClick={addTask} />
    </div>
  );
}

export default App;
