import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Box, Button, ButtonGroup, Divider, Grid, Input, OutlinedInput, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1200,
    height: 750,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: '12px',
    padding: theme.spacing(2),
  },
  title: {
    height: 27,
    fontFamily: 'Sarabun',
    fontSize: 21,
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'black',
    marginBottom: theme.spacing(2),
  },
  steps: {
    borderBottom: '1px solid #8d8e91', 
    marginBottom: theme.spacing(2),
  },
  step: {
    border: 'solid 1px #ebebeb',
    borderBottom: 'none', 
    fontFamily: 'Sarabun',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000',
    padding: '10px 40px',
  },
  grid: {

  },
  subTitle: {
    fontFamily: 'Sarabun',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000',
    marginBottom: 20,
  },
  info: {
    fontWeight: '400',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '250px',
    height: '40px',
    borderRadius: '4px',
    fontSize: '16px',
    paddingLeft: 10,
    border: 'solid 1.5px #d3d3d3',
    '&::placeholder': {
      fontFamily: 'Sarabun',
      fontSize: '16px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'italic',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#939393',
    }
  },
  gridWrap: {
    // paddingLeft: 20,
    // paddingRight: 20
  },
 
  box: {
    width: '100%',
    height: 500,
    // background: '#e2e2e2',
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



// register Handsontable's modules
registerAllModules();
  const data = [
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,],
    [,,,,,,,,,,]
  ];


export default function SimpleModal({open, handleClose}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography className={classes.title} align='center' component='div'>
        Add new video wall
      </Typography>
      <Grid container className={classes.steps} wrap='wrap'>
        <Typography className={classes.step}>1. Basic setup</Typography>
        <Typography className={classes.step}>2. Select Camera</Typography>
        <Typography className={classes.step}>3. Task plan setup</Typography>
      </Grid>
      <Grid className={classes.grid} container spacing={2}>
        <Grid xs={3} item>
          <Typography className={classes.subTitle}>Video wall info</Typography>
          <label className={clsx(classes.subTitle, classes.info)}>Video wall info:</label>
          <input className={classes.input} placeholder='Enter text here'/>
          <label className={clsx(classes.subTitle, classes.info)}>Description:</label>
          <input className={classes.input} placeholder='Enter text here'/>
        </Grid>
        <Grid xs={0.5} item>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item xs className={classes.gridWrap}>
          <Typography className={classes.subTitle}>Video wall screen</Typography>
          {/* <Box className={classes.box}></Box> */}

          <HotTable
            className={classes.box}
            data={data}
            // height={500}
            width='100%'
            rowHeights={48}
            stretchH='all'
            readOnly={true}
            mergeCells={true}
            licenseKey="non-commercial-and-evaluation" // for non-commercial use only
          />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}