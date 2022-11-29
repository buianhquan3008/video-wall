import { Box, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import SimpleModal from './Modal'


const useStyles = makeStyles((theme) => ({
  header: {
    height: 80,
    padding: '16px 25px',
    borderRadius: 8,
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  label: {
    fontFamily: 'Sarabun',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000',
    marginRight: 8,
  },
  box: {
    // width: 450,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  select: {
    height: 43,
    width: 300
  },
  listButton: {
    display: 'flex',
    gap: 16,
  },
  button: {
    height: 45,
    width: 130,
    borderRadius: '4px',
    backgroundColor: '#dd3d4b',
    outline: 'none',
    border: 'none',
    fontFamily: 'Sarabun',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
  },
 
}));



export default function Header() {
  const classes = useStyles();
  
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    SimpleModal
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.header}>
      <Grid xs={3} item className={classes.box}>
        <label className={classes.label}>Video wall:</label>
        <FormControl  variant="outlined" className={classes.formControl}>
          <Select
            className={classes.select}
            native
            value={age}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            autoWidth={true}
          >
            <option disabled value="">
              Select video wall
            </option>
            <option value={10}>Screen area 3</option>
            <option value={20}>Screen area 4</option>
            <option value={30}>Screen area 5</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={5} item className={classes.box}>
        <label className={classes.label}>Task:</label>
        <FormControl  variant="outlined" className={classes.formControl}>
          <Select
            className={classes.select}
            native
            value={age}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            autoWidth={true}
          >
            <option disabled value="">
              Select task
            </option>
            <option value={10}>Task LLQ</option>
            <option value={20}>Task LQQ</option>
            <option value={30}>Task LQL</option>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={4} item className={classes.listButton} container justifyContent='flex-end' wrap='nowrap'>
        <button className={classes.button} type='button' onClick={handleOpen} >
          <span className={classes.plus}>+</span>&nbsp;Add video wall
        </button>
        <SimpleModal open={open} handleClose={ handleClose } />
        <button className={classes.button}>
          Settings
        </button>
        <button className={classes.button}>
          Full screen
        </button>
      </Grid>
    </div>
  )
}
