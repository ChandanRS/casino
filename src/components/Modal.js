import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Timelines from "./Timelines";
import closeIcon from "../images/close.svg";
import Casino from './casinoFiles/Casino'
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "55rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "34rem",
    overflowY: "scroll",
  },
}));

export default function SimpleModal({data}) {
  // const [selectedUser,setSelectedUser] = React.useState(user)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          color: "#2077B1",
        }}
        id="simple-modal-title"
      >
        {/* Timelines for {user && user.real_name} */}
        
      </h2>

      <div
        style={{ display: "flex", justifyContent: "center" }}
        id="simple-modal-description"
      >
        {/* <Timelines user={user} /> */}
        <Casino handler={handleClose} />
        {/* <Button
          style={{ position: "absolute", right: "0px", fontWeight: "600" }}
          onClick={handleClose}
        >
          <img
            style={{ width: "1rem", height: "1rem" }}
            alt="close"
            src={closeIcon}
          ></img>
        </Button> */}
      </div>
      {/* <SimpleModal /> */}
    </div>
  );
console.log({open})
  return (
    <div style={{ fontFamily: "DM Sans" }}>
      <div style={{ width: "10rem",margin:"auto"}}>
      <Button
        style={{ margin: "2rem", fontWeight: "600",padding:"0.5rem 2rem" }}
        href=""
        color="primary"
        variant="contained"
        type="button"
        onClick={handleOpen}
        fullWidth
      >
        {/* {user && user.real_name} */}
        PLAY
      </Button>
      </div>
      <Modal
      data = {data}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
