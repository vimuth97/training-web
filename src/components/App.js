import React from "react";
import "./component.css";
import AddForm from "./AddForm";
import DiaryCardList from "./DiaryCardList";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>
          <b>Home</b>
        </h2>
        <AddForm />
        <DiaryCardList />
      </div>
    );
  }
}

export default App;
