import React from "react";
import "./App.css";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DiaryCard from "../diarycard/DiaryCard";
import { Spring } from "react-spring/renderprops";


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
         text: "b",
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
        <div className="container-fluid">
          <h2>
            <b>Home</b>
          </h2>
          </div>
          <div>
          <Spring
          from={{ opacity:0}}
          to ={{ opacity:1}}
          config={{delay:500,duration:1200}}
        >
          {props =>(
          <form onSubmit={this.addItem} style={props}>
            <FormControl fullWidth={true}>
              <div className="container-fluid" >
              <div className="row">
              <div className="col-lg-12">
                <TextField
                  id="standard-basic"
                  required
                  style={{
                    borderRadius: "2rem",
                    padding: "7px",
                    backgroundColor: "rgb(140,245,255)",
                  }}
                  InputProps={{ disableUnderline: true }}
                  placeholder="Submit New"
                  fullWidth={true}
                  //variant="filled"
                  value={this.state.currentItem.title || ""}
                  onChange={this.handleInput}
                  onClick ={this.showForm}
                />
              
                </div>
              </div>
              <div className="row" id="filled-textarea">
                <div className="col-lg-12" >
             
               
                    <TextField
                
                style={{
                  backgroundColor: "rgb(140,245,255)",
                  borderRadius: "0.2rem",
                  padding: "7px",
                  marginTop: "12px",
              
                }}
                required
                placeholder=" Enter Description"
                rows={4}
                fullWidth={true}
                multiline
                //variant="filled"
                value={this.state.currentItem.text || ""}
                onChange={this.handleInput}
                InputProps={{ disableUnderline: true }}
              />
              </div>
              </div>
              <Button
                  id="submit"
                  type="submit"
                  size="large"
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "rgb(140,155,255)",
                    marginTop:"10px",
                    display:"none"
                  }}
                >
                  <b>Submit</b>
                </Button>
              
                </div>
              
            </FormControl>
          </form>
          )
        }
          </Spring>
          </div>
          <Spring
          from={{ opacity:0}}
          to ={{ opacity:1}}
          config={{delay:500,duration:1200}}
        >
        {props=>(<div style={props}><DiaryCard
          items={this.state.items}
          showMore={this.showMore}
        ></DiaryCard>
        </div>
        )
  }
        </Spring>
        </div>
  
    );
  }
}

export default App;
