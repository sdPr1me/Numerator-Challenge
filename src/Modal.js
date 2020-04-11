import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#537895",
    backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  dialog: {
    backgroundColor: "#f39f86",
    backgroundImage: "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)",
    width: "600px"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Details(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.Name}
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.dialog}>
          <ListItem button>
            <ListItemText primary={props.Rank} secondary="Rank" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={props.Publisher} secondary="Publisher" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={props.Year} secondary="Year" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={props.Genre} secondary="Genre" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={props.Platform} secondary="Game Platform" />
          </ListItem>
          <Divider />
          <ListItem button className={classes.dialog}>
            <ListItemText
              primary={props.Sales}
              secondary="Total Global Sales"
            />
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
