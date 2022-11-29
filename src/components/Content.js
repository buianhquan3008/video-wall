import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 30,
    height: '860px',
    padding: "18px 66px",
    borderRadius: "8px",
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.05)',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 200px)',
    gap: 10
  },
  p: {
    
  },
  videoWrap: {
    // width: 150,
    height: 200,
    borderRadius: '8px'
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'fill',
  }
}));

export default function Content() {
  const classes = useStyles();
  const list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div className={classes.content}>
      {/* <p className={classes.p}>Video wall is not available. Please create video wall to use this function!</p>
      {list.map(item=>(
        <div className={classes.videoWrap} key={item}>
          <video className={classes.video} autoPlay>
            <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" loop></source>
            Your browser does not support the video tag.
          </video>
        </div>
      ))} */}
    </div>
  )
}
