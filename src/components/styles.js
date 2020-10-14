import { styled } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


export const MyFab = styled(Fab)({
        marginBottom: "20px", 
        outline: "0",
        border: "none",
  });

export const MyCard = styled(Card)({
    borderRadius: "1rem",
    backgroundColor: "lightblue",
});

export const ShowMoreButton = styled(Button)({
    borderRadius: "1rem", 
    outline:"none",
    backgroundColor: "#4DF0FF",
});