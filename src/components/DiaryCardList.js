import React from "react";
import { fetchData } from "../actions";
import { connect } from "react-redux";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Spring } from "react-spring/renderprops";
import { MyCard } from './styles';
import { ShowMoreButton } from './styles';

class DiaryCardList extends React.Component {

   showmore = false;

  showMore(key) {
    if (!this.showmore && document.getElementById(key)) {
      document.getElementById(key).getElementsByTagName("p1")[0].style.display =
        "inline-block";
      document
        .getElementById(key)
        .getElementsByTagName("span")[0].style.display = "none";
      document.getElementById(key).getElementsByTagName("Button")[0].innerText =
        "Show Less";
      this.showmore = true;
    } else {
      if (document.getElementById(key)) {
        document
          .getElementById(key)
          .getElementsByTagName("p1")[0].style.display = "none";
        document
          .getElementById(key)
          .getElementsByTagName("span")[0].style.display = "inline-block";
        document
          .getElementById(key)
          .getElementsByTagName("Button")[0].innerText = "Show More";
        this.showmore = false;
      }
    }
  }

    render () {
      this.props.fetchData()
      const listItems = this.props.state.DiaryCards.data.map((item) => {
        if (item.text.length > 10) {
          const part1 = item.text.substring(0, 10);
          const part2 = item.text.substring(10, item.text.length);
    
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={item.key}>
              <MyCard
                id={item.key}
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
                  <ShowMoreButton
                    id="read"
                    //variant="contained"
                    color="primary"
                    style={{outline:"none"}}
                    onClick={() => this.showMore(item.key)}
                  >
                    Show more
                  </ShowMoreButton>
                </CardActions>
              </MyCard>
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={item.key}>
              <MyCard>
                <CardContent>
                  <h4>{item.title}</h4>
                  <h5>
                    <sub>Subtitle</sub>
                  </h5>
                  <p>{item.text}</p>
                </CardContent>
              </MyCard>
            </Grid>
          );
        }
      });
     
      return (
        <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1200, duration: 1400 }}
    >
      {(props) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={props}
        >
          {listItems}
        </Grid>
      )}
    </Spring>
      )
    }
  }

  const mapStateToProps = (state) => ({
    state: state,
  })

  const mapDispatchToProps = (dispatch,props) =>{
    return {
      fetchData: () => dispatch(fetchData())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(DiaryCardList);

//<ul><li>{JSON.stringify(this.props.state.DiaryCards)}</li></ul> 