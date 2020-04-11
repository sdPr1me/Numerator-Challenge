import React from "react";
import ReactDOM from "react-dom";
import AppBar from "./Header";
import jsondata from "./data.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const [data, setData] = React.useState(jsondata);
  const classes = useStyles();
  const setSearch = searchVal => {
    const newData = data.filter(datum => {
      return datum.Name.includes(searchVal);
    });
    setData(newData);
  };
  const sort = () => {
    const newData = data.sort((a, b) => {
      return a.Year > b.Year;
    });
    setData(newData);
  };
  return (
    <div className={classes.root}>
      <AppBar data={data} filter={setSearch} sorter={sort} />
      <Grid container spacing={2} style={{ marginTop: 60 }}>
        {data.map((e, i) => (
          <Grid item xs={3} sm={3} md={3}>
            <Card
              rank={e.Rank}
              name={e.Name}
              publisher={e.Publisher}
              year={e.Year}
              genre={e.Genre}
              platform={e.Platform}
              sales={e.Global_Sales}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
