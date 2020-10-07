import React from "react";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DiaryCard from "./DiaryCard/DiaryCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        title: "",
        text: "",
        key: "" //to identify each item uniquely
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.showMore = this.showMore.bind(this);
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
  }

  showmore = false;
  showMore(key) {
    if (
      !this.showmore &&
      document.getElementById(key) &&
      document.getElementById(key)
    ) {
      document.getElementById(key).getElementsByTagName("p1")[0].style.display =
        "inline";
      document
        .getElementById(key)
        .getElementsByTagName("span")[0].style.display = "none";
      document.getElementById(key).getElementsByTagName("Button")[0].innerText =
        "Show Less";
      this.showmore = true;
    } else {
      if (document.getElementById(key) && document.getElementById(key)) {
        document
          .getElementById(key)
          .getElementsByTagName("p1")[0].style.display = "none";
        document
          .getElementById(key)
          .getElementsByTagName("span")[0].style.display = "inline";
        document
          .getElementById(key)
          .getElementsByTagName("Button")[0].innerText = "Show More";
        this.showmore = false;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <form onSubmit={this.addItem}>
            <FormControl fullWidth={true}>
              <div>
                <TextField
                  id="standard-basic"
                  required
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#008BAB",
                    padding: "7px",
                    margin: "10px",
                    width:"1200px"
                  }}
                  placeholder="Submit New"
                  //variant="filled"
                  value={this.state.currentItem.title || ""}
                  onChange={this.handleInput}
                />
                <Button
                  id="submit"
                  type="submit"
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#008BCB",
                    margin: "10px",
                    height: "45px"
                  }}
                >
                  <b>Submit</b>
                </Button>
              </div>
              <TextField
                id="filled-textarea"
                required
                placeholder=" Enter Description"
                rows={4}
                fullWidth={true}
                multiline
                variant="filled"
                value={this.state.currentItem.text || ""}
                onChange={this.handleInput}
              />
            </FormControl>
          </form>
        </header>

        <DiaryCard
          items={this.state.items}
          showMore={this.showMore}
        ></DiaryCard>
      </div>
    );
  }
}

export default App;
