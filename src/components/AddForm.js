import React from "react";
import "./component.css";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Box } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Spring } from "react-spring/renderprops";
import { MyFab } from './styles';

const AddForm = ({ dispatch }) => {
  let input1;
  let input2;


  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 1200 }}
    >
      {(props) => (
        <div style={props}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input1.value.trim()) {
                return;
              }
              if (!input2.value.trim()) {
                return;
              }
              dispatch(addTodo(input1.value, input2.value));
              input1.value = "";
              input2.value = "";
            }}
          >
            <FormControl fullWidth={true}>
              <input
                placeholder="Submit New"
                ref={(node) => (input1 = node)}
                required
                style={{
                  borderRadius: "2rem",
                  padding: "7px",
                  backgroundColor: "rgb(140,245,255)",
                  outline: "0",
                  border: "none",
                  marginBottom: "13px",
                }} 
              />
              <textarea 
                className="textarea1"
                id="textarea1"
                placeholder="Enter Description"
                ref={(node) => (input2 = node)}
                rows="5"
                style={{
                  borderRadius: "0.5rem",
                  padding : "7px",
                  backgroundColor: "rgb(140,245,255)",
                  outline: "0",
                  border: "none",
                  marginBottom: "15px",
                }}
                required
              />
              <Box>
                <MyFab 
                  id="submit"
                  type="submit"
                  size="medium"
                  variant="extended"
                  color="primary"
                 style={{ outline: "0" }}
                >
                  <b>Submit</b>
                </MyFab>
              </Box>
            </FormControl>
          </form>
        </div>
      )}
    </Spring>
  );
};

export default connect()(AddForm);
