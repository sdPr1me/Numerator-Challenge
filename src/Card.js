import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import MUICard from "@material-ui/core/Card";
import MUICardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import Modal from "./Modal";
const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    backgroundColor: "#537895",
    backgroundImage: "linear-gradient(315deg, #537895 0%, #09203f 74%)"
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
    backgroundColor: "#f39f86",
    color: "black",
    fontWeight: "bold"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
    color: "#f39f86"
  },
  subheader: {
    fontSize: 14,
    color: "#c7c7c7",
    marginBottom: "0.875em"
  },
  statLabel: {
    fontSize: 12,
    color: "#c7c7c7",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
    color: "#f39f86"
  }
}));

export default function Card(props) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%"
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <React.Fragment>
      <MUICard
        className={cx(styles.card, shadowStyles.root)}
        onClick={handleClickOpen}
      >
        <MUICardContent>
          <Avatar className={styles.avatar}>#{props.rank}</Avatar>
          <h3 className={styles.heading}>{props.name}</h3>
          <span className={styles.subheader}>{props.publisher}</span>
        </MUICardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Year</p>
            <p className={styles.statValue}>{props.year}</p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <p className={styles.statLabel}>Genre</p>
            <p className={styles.statValue}>{props.genre}</p>
          </Box>
        </Box>
      </MUICard>
      <Modal
        Name={props.name}
        Publisher={props.publisher}
        Year={props.year}
        Genre={props.genre}
        Rank={props.rank}
        Sales={props.sales}
        Platform={props.platform}
        open={openDialog}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}
