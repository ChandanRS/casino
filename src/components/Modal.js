import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Timelines from './Timelines'
import closeIcon from '../images/close.svg'

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '55rem',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:'34rem',
    overflowY: 'scroll'
  },
}));

export default function SimpleModal({user}) {

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
      <h2 style={{display:"flex",justifyContent:"center",position:"relative",color:"#2077B1"}} id="simple-modal-title">Timelines for {user && user.real_name}
      <Button style={{position:"absolute",right:'0px',fontWeight:"600"}} onClick={handleClose}><img style={{width:"1rem",height:"1rem"}} alt="close" src={closeIcon}></img></Button>
      </h2>
      
      <div style={{display:"flex",justifyContent:"center"}} id="simple-modal-description">
       <Timelines user={user} />
      </div>
      <SimpleModal />
    </div>
  );

  return (
    <div style={{fontFamily:"DM Sans"}}>
      <Button style={{marginTop:"10px",fontWeight:'600'}} href="" color="primary" type="button" onClick={handleOpen}>
        {user && user.real_name}
      </Button>
      <Modal
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
