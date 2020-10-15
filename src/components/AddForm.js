import React from "react";
import "./component.css";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Box } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Spring } from "react-spring/renderprops";
import { MyFab, style_des, style_title } from "./styles";


const AddForm = ({ dispatch }) => {
  let input1;
  let input2;

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 0, duration: 1400 }}
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
                style={style_title}
              />
              <textarea
                className="textarea1"
                id="textarea1"
                placeholder="Enter Description"
                ref={(node) => (input2 = node)}
                rows="5"
                style={style_des}
                required
              />
              <Box>
                <MyFab
                  id="submit"
                  type="submit"
                  size="large"
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
