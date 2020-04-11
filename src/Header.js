import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#537895",
    backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)"
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#f39f86",
    fontWeight: "bold"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#f39f86", 0.15),
    "&:hover": {
      backgroundColor: fade("#f39f86", 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");

  console.log(search);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            Top Games
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "#f39f86" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                props.filter(search);
              }}
            />
          </div>
          <IconButton
            edge="end"
            className={classes.menuButton}
            style={{ color: "#f39f86" }}
            aria-label="open drawer"
            onClick={props.sorter}
          >
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
