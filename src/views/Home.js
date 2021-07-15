import React, { useEffect } from "react";
import Fab from '@material-ui/core/Fab';
import ParticlesBg from 'particles-bg'
import {withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from "reactstrap";
import animated from './mmm.png';
import { green, purple } from '@material-ui/core/colors';
import Staking from './Staking';
import { useHistory } from 'react-router-dom';
import Lottie from "lottie-react";
import abcd from './abcd.json'
    

  
   
   

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:'white',
        marginBottom:20,
        height:900,
    },
    fab1: {
      margin: 0,
      top: 300,
      right: 20,
      bottom: 20,
      left: 724,
      position: 'fixed',
      height:'50px',
      width:'230px'
    },
    fab2: {
      margin: 0,
      top: 300,
      bottom: 20,
      left: 500,
      position: 'fixed',
      height:'50px',
      width:'230px'
    },
    buttons: {
      boxShadow: 'none',
    textTransform: 'none',
    fontSize: 30,
    padding: '6px 12px',
    lineHeight: 1.5,
    border:10,
   borderRadius:10,
    backgroundColor: "#00b3ff",
    '&:hover': {
      backgroundColor: "#05e395",
    }
  },
  buttonsS: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 30,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ffa500',
    border:10,
    borderRadius:10,
    '&:hover': {
      backgroundColor: '#00b3ff',
      borderColor: '#00b3ff',
    },
  },
  buttonsd: {
  fontSize: 30,
  padding: '6px 12px',
  lineHeight: 1.5,
   border:10,
   borderRadius:10,
  backgroundColor: "#00b3ff",
  '&:hover': {
    backgroundColor: "#05e395",
  }
},
buttonsSD: {
  fontSize: 30,
  padding: '6px 12px',
  lineHeight: 1.5,
  marginLeft:10,
  backgroundColor: '#ffa500',
  border:10,
  borderRadius:10,
  '&:hover': {
    backgroundColor: '#00b3ff',
    borderColor: '#00b3ff',
  },
},
    animated:{
        left:40,
        top:30
    },
    content:{
        top:290,
        left:180
    },
    animatedm:{
        left:20,
        top:50
    },
    contentm:{
        top:80,
        left:40
    }
  }));




  const initialPositionValue = "fixed";


export default function Home(){
    const classes = useStyles();
    let history = useHistory();

  const redirectExchange = () => {
    history.push('/login')
  }
  const redirect = () => {
    window.location = "/#/staking"
  }
    const [width,setwidth] = React.useState(window.innerWidth)

    const handleWindowSizeChange = () => {
        setwidth(window.innerWidth)
      };
      useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange());
      })
      const isMobile = width <= 900;
  if (isMobile) {
      return(
        <div className="rootH">
        {/* <Button className={classes.fab1}  size="large" variant="contained" color="secondary">
        Staking
      </Button>
      <Button className={classes.fab2} size="large" variant="contained" color="primary">
        Exchange
      </Button>
<ParticlesBg color="#0971f1" num={200} type="cobweb" bg={false} /> */}
<Container>
    <Row className={classes.animatedm}>
    <Lottie animationData={abcd} />

        {/* <img src={animated} alt="gifffs..."/> */}
       </Row>
       <Row>
        <Col className={classes.contentm}>
     <button className={classes.buttons} onClick={redirectExchange}>
        Exchange
      </button>
      </Col>
      <Col className={classes.contentm}>
      <button className={classes.buttonsS} onClick={redirect}>
        Staking
      </button>
        </Col>
    </Row>
</Container>
              </div>
      )
  }
  else{
    return (
        <div className="rootH">
        {/* <Button className={classes.fab1}  size="large" variant="contained" color="secondary">
        Staking
      </Button>
      <Button className={classes.fab2} size="large" variant="contained" color="primary">
        Exchange
      </Button>
<ParticlesBg color="#0971f1" num={200} type="cobweb" bg={false} /> */}

<Container>
    <Row>
        <Col className={classes.animated}>
        {/* <img src={animated} alt="gifffs..."/> */}
        <Lottie animationData={abcd} />

        </Col>
        <Col className={classes.content}>
        <button className={classes.buttonsd} onClick={redirectExchange}>
        Exchange
      </button>
      
      <button className={classes.buttonsSD} onClick={redirect}>
        Staking
      </button>
        </Col>
    </Row>
</Container>
              </div>
    );
            }
  }

  