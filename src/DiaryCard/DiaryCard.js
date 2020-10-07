import React from "react";
import "./DiaryCard.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    if (item.text.length > 10) {
      const part1 = item.text.substring(0, 10);
      const part2 = item.text.substring(10, item.text.length);

      return (
        <Grid item xs={12} sm={6} md={3} key={item.key}>
          <Card
            id={item.key}
            style={{
              borderRadius: "1rem",
              backgroundColor: "lightblue",
              margin: "10px",
              marginTop: "15px"
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
                style={{ borderRadius: "1rem" }}
                onClick={() => props.showMore(item.key)}
              >
                <b>Show more</b>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={12} sm={6} md={3} key={item.key}>
          <div className="list" key={item.key}>
            <Card
              style={{
                width: "18rem",
                borderRadius: "1rem",
                backgroundColor: "lightblue",
                margin: "10px",
                marginTop: "15px",
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
          </div>
        </Grid>
      );
    }
  });

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {listItems}
    </Grid>
  );
}
