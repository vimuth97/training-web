import React from 'react'
import { connect } from 'react-redux'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Spring } from "react-spring/renderprops";

const TodoList = ({ todos }) => {

    var showmore = false;
    function showMore(key) {
      if (
        !showmore &&
        document.getElementById(key)
      ) {
        document.getElementById(key).getElementsByTagName("p1")[0].style.display = "inline-block";
        document.getElementById(key).getElementsByTagName("span")[0].style.display = "none";
        document.getElementById(key).getElementsByTagName("Button")[0].innerText = "Show Less";
        showmore = true;
      } else {
        if (document.getElementById(key)) {
          document.getElementById(key).getElementsByTagName("p1")[0].style.display = "none";
          document.getElementById(key).getElementsByTagName("span")[0].style.display = "inline-block";
          document.getElementById(key).getElementsByTagName("Button")[0].innerText = "Show More";
          showmore = false;
        }
      }
    }
  
    const listItems = todos.map((item) => {
        if (item.text.length > 10) {
          const part1 = item.text.substring(0, 10);
          const part2 = item.text.substring(10, item.text.length);
    
          return (
            
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={item.key} >
              <Card
                id={item.key}
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <h4>{item.title}</h4>
                  <h5>
                    <sub>Subtitle</sub>
                  </h5>
                  <p>
                    {part1}
                    <span style={{ display: "inline" }}>...</span>
                    <p1 style={{ display: "none" }}>{part2}</p1>
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    id="read"
                    //variant="contained"
                    color="primary"
                    style={{ borderRadius: "1rem" }}
                    onClick={() => showMore(item.key)}
                  >
                    Show more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={item.key}>
           
                <Card
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "lightblue", 
                  }}
                >
                  <CardContent>
                    <h4>{item.title}</h4>
                    <h5>
                      <sub>Subtitle</sub>
                    </h5>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
            
            </Grid>
            
          );
        }
      });
    
      return (
        <Spring
        from={{ opacity:0}}
        to ={{ opacity:1}}
        config={{delay:500,duration:1200}}
      >
       {props => (
          <Grid
      
          container 
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          //style={{marginTop:"10px"}}
          style={props}
        >
          {listItems}
        </Grid>
        )}
            </Spring>
        
      );
    }
    
















//   return <ul>
//     {todos.map(todo =>
//       <Card
//         key={todo.key}>
//         {todo.title}
//         </Card>
      
//     )}
//   </ul>
//}

const mapStateToProps = state => ({
todos: state.todos
})



export default connect(mapStateToProps)(TodoList)