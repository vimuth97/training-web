import React from "react";
import "./App.css";
import AddTodo from "../addtodo";
import TodoList from '../TodoList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title:"a",
         text: "b",
         key:"1"
      },
      {title:"a",
         text: "bssssssssssssss",
         key:"2"
      }
      ],
      currentItem: {
        title: "",
        text: "",
        key: "", //to identify each item uniquely
      },

    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.showMore = this.showMore.bind(this);
  }

 

  showForm(){
    document.getElementById("submit").style.marginTop="10px";
    document.getElementById("submit").style.display="inline";
    document.getElementById("filled-textarea").style.display="block";
  }


  handleInput(e) {
    if (e.target.id === "standard-basic") {
      this.setState({
        currentItem: {
          title: e.target.value,
          text: this.state.currentItem.text,
          key: Date.now(),
        },
      });
    } else {
      this.setState({
        currentItem: {
          title: this.state.currentItem.title,
          text: e.target.value,
          key: Date.now(),
        },
      });
    }
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem: {
        title: "",
        text: "",
        key: "",
      },
    });
    document.getElementById("submit").style.display="none";
    document.getElementById("filled-textarea").style.display="none";
  }

  showmore = false;
  showMore(key) {
    if (
      !this.showmore &&
      document.getElementById(key)
    ) {
      document.getElementById(key).getElementsByTagName("p1")[0].style.display = "inline-block";
      document.getElementById(key).getElementsByTagName("span")[0].style.display = "none";
      document.getElementById(key).getElementsByTagName("Button")[0].innerText = "Show Less";
      this.showmore = true;
    } else {
      if (document.getElementById(key)) {
        document.getElementById(key).getElementsByTagName("p1")[0].style.display = "none";
        document.getElementById(key).getElementsByTagName("span")[0].style.display = "inline-block";
        document.getElementById(key).getElementsByTagName("Button")[0].innerText = "Show More";
        this.showmore = false;
      }
    }
  }

  

  render() {

    return (
      <div className="App">

          <h2>
            <b>Home</b>
          </h2>
          
  
        <AddTodo />
        <TodoList />
        </div>
  
    );
  }
}

export default App;
