
import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './FInalCryptologo.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import bg2 from './bg4.png';
import bg3 from './bg5.jpeg';
import bg1 from './bg6.jpeg';
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';
import { Modal } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles.css';
import SearchField from "react-search-field";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ScrollView } from 'react-native';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'white',
    height:1500,

  },
  
  appbarm:{
    backgroundColor:'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop:20
  },
  title: {
    flexGrow: 1,
    marginTop:20,
    color:'black',

  },
  logo:{
height:30,
width:80,
paddingRight:10,
  },
wallet:{
  marginTop:15,
  marginRight:20,
  fontSize:12
},
walletm:{
  marginTop:25,
  marginRight:2,
  fontSize:12
},
cardholder:{
  marginTop:100,
},
cards:{
  width:400,
  height:800,
  backgroundColor:'#2E2E2E',
 marginLeft:500,
 fontFamily:'Orbitron',
 borderRadius:20
},
cardsHeader:{
    width:650,
    height:80,
    backgroundColor:'#2E2E2E',
   marginLeft:400,
   fontFamily:'Orbitron',
   borderRadius:20
  },
cardsm:{
  width:400,
  height:800,
  backgroundColor:'#2E2E2E',
 marginLeft:50,
 fontFamily:'Orbitron',
 color:'white'
},
cardsmHeader:{
    width:400,
    height:100,
    backgroundColor:'#2E2E2E',
   marginLeft:50,
   fontFamily:'Orbitron',
   color:'white'
  },
titlec: {
  fontSize: 24,
  color:'white',
paddingLeft:10,
fontFamily:'Orbitron'
},
titlecm: {
  fontSize: 15,
  color:'white',
paddingLeft:5,
fontFamily:'Orbitron'
},
pos: {
  marginBottom: 12,
},
btn:{
 marginTop:70,
 width:370,
 backgroundColor:'#5CB3FF',
 alignContent:'center',
 fontFamily:'Orbitron',
},
btnm:{
  fontFamily:'Orbitron',
  top:40,
  width:300,
  left:30
 },
 content:{
  left:15,
  fontFamily:'Orbitron',
  color:'white',
  fontSize:10
 },
 contentc:{
  color:'grey',
  fontSize:18,
  top:50,
  paddingRight:40,
textAlign:'center'  
},
 header:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:22,
    paddingLeft:5
   },
   headerc:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:32,
    paddingLeft:400,
    marginTop:-20
},
headerc2:{
    fontFamily:'Orbitron',
    color:'white',
    fontSize:32,
    paddingLeft:250,
    marginTop:-20
},
   column:{
       top:20
   },
   cardsfooter:{
width:380,
height:180,
marginLeft:510,
borderRadius:20,
backgroundColor:'#2E2E2E',
   },
   cardsmfooter:{
    width:400,
    height:180,
    marginLeft:45,
    borderRadius:20,
    marginTop:40,
    backgroundColor:'#2E2E2E',
       },
       
headercontent:{
marginTop:10,
backgroundColor:'#5CB3FF',
width:350,
marginLeft:8,
borderRadius:10,
padding:20,
fontSize:14,
color:'blue'
},
title_text:{
  marginTop:1,
  color:'white',
  marginLeft:120,
},

add:{
  color:'white',
  marginLeft:190
},
text:{
  marginTop:10
},
cardModal:{
  width:450,
  height:500,
  backgroundColor:'#36454F',
 fontFamily:'Orbitron',
 borderRadius:20,
 marginLeft:500,
},
title_textModal:{
  marginTop:1,
  color:'white',
  marginLeft:50,
  fontSize:30,
  
},
}));
const initialPositionValue = "fixed";



export default function Deposit() {
  const classes = useStyles();
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [showModal, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const darkMode = useDarkMode(false);
  const handleWindowSizeChange = () => {
      setwidth(window.innerWidth)
    };
    useEffect(()=>{
      window.addEventListener('resize', handleWindowSizeChange());
    })
    const isMobile = width <= 900;
    const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
if (isMobile) {
  return(
<div className="root">
      <AppBar position="static" className="appbarm">
        <Toolbar>
          <div className={classes.logo}>
          <img src={logo} alt="logo"/>
          </div>
          <Typography variant="h6" className={classes.title}>
            AntEagle
          </Typography>
          <Button variant="outline-danger" className={classes.walletm}>Connect to a Wallet</Button>
          
        </Toolbar>
      </AppBar>
<div className={classes.cardholder}>
     
    <Card className={classes.cardsm} variant="outlined">
    <CardContent>
      <Typography variant="h6" className={classes.title_text}>
        Add Liquidity
      </Typography>
           <div className={classes.headercontent}>
           Tip: When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.
           </div>
        <Typography>
        <Typography>
          <div className="content_text">
         
<div>

<div style={{margin:10,color:'white'}}>
Input
</div>

<div style={{marginLeft:280,marginTop:-34}}>
Balance
</div>

</div>
<div style={{marginTop:-10,marginLeft:190}}>
<Button variant="secondary" class="buttonM" onClick={handleShow}>AntEagle</Button>
         </div>
{/* <textarea
            className={classes.text}
            id="FormControl"
            rows="1"
            placeholder="0.0"
            /> */}
          </div>
          
        </Typography>
        <Typography>
          <div className={classes.add}>
            +
          </div>
        </Typography>
        <Typography>
        <div className="content_text">
         
         <div>
         
         <div style={{margin:10}}>
         Input
         </div>
         
         <div style={{marginLeft:280,marginTop:-34}}>
         Balance
         </div>
         
         </div>
          <div style={{marginTop:-10,marginLeft:190}}>
          <Button variant="secondary" class="buttonM" onClick={handleShow}>AntEagle</Button>
                   </div>
         {/* <textarea
                     className={classes.text}
                     id="FormControl"
                     rows="1"
                     placeholder="0.0"
                     /> */}
                   </div>
        </Typography>
        <Typography>
        <div className="content_text">
         <h6 style={{color:'white',marginLeft:10,marginTop:10}}>Prices and Pool Share</h6>
         
<h4 style={{color:'white',marginLeft:30,marginTop:20}}>
675501
</h4>
<h4 style={{color:'grey',marginLeft:20,marginTop:-10}}>
TITAN per MATIC
</h4>
<h4 style={{color:'white',marginLeft:200,marginTop:-69}}>
0.00000148038
</h4>
<h4 style={{color:'grey',marginLeft:190,marginTop:-10}}>
MATIC per TITAN
</h4>
<h4 style={{color:'white',textAlign:'center'}}>
  0%
</h4>
<h4 style={{color:'grey',textAlign:'center',marginTop:-15}}>
Share of Pool
</h4>
                   </div>
        </Typography>
      <Button className={classes.btnm}>Enter an Amount</Button>
      </Typography> 
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card className={classes.cardsmfooter} variant="outlined">
      <CardContent>
      <div className={classes.contentc}>
        
      ⭐️ By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
        </div>        
      
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Modal show={showModal} onHide={handleClose}>
    <div style={{backgroundColor:'#2E2E2E'}}>
    <h1 style={{color:'white',textAlign:'center',marginTop:20}}>
              Select a token
          </h1>
          <div style={{width:350,paddingLeft:60}}>
        <SearchField
  placeholder="Search name or Paste Address"
/>
</div>
   <div style={{width:350,marginLeft:50}}>
     
<List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
        
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        
       
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
        
          <ListItemText primary="Drafts" />
        </ListItem>
  
      </List>
</div>    
</div>  
      </Modal>
    </div>
    </div>
      );
}
else{
  return (

    <div className="rootadd">
      <AppBar position="static" className="appbarAdd">
        <Toolbar>
          <div className={classes.logo}>
          <img src={logo} alt="logo"/>
          </div>
          <Typography variant="h6" className={classes.title}>
            AntEagle
          </Typography>
          
          <Button variant="outline-danger" className={classes.wallet}>Connect to a Wallet</Button>
       
        </Toolbar>
      </AppBar>
<div className={classes.cardholder}>


          
    <Card className={classes.cards} variant="outlined">
      <CardContent>
      <Typography variant="h6" className={classes.title_text}>
        Add Liquidity
      </Typography>
           <div className={classes.headercontent}>
           Tip: When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.
           </div>
        <Typography>
        <Typography>
          <div className="content_text">
         
<div>

<div style={{margin:10,color:'white'}}>
Input
</div>

<div style={{marginLeft:280,color:'white',marginTop:-34}}>
Balance
</div>

</div>
 <div style={{marginTop:-10,marginLeft:190}}>
 <Button variant="secondary" class="buttonM" onClick={handleShow}>AntEagle</Button>

         {/* <button class="buttonM" onClick={handleShow}>AntEagle</button> */}
         </div>
{/* <textarea
            className={classes.text}
            id="FormControl"
            rows="1"
            placeholder="0.0"
            /> */}
          </div>
          
        </Typography>
        <Typography>
          <div className={classes.add}>
            +
          </div>
        </Typography>
        <Typography>
        <div className="content_text">
         
         <div>
         
         <div style={{margin:10,color:'white'}}>
         Input
         </div>
         
         <div style={{marginLeft:280,marginTop:-34,color:'white'}}>
         Balance
         </div>
         
         </div>


         <div style={{marginTop:-10,marginLeft:190}}>
 <Button variant="secondary" class="buttonM" onClick={handleShow}>AntEagle</Button>
         </div>
         {/* <textarea
                     className={classes.text}
                     id="FormControl"
                     rows="1"
                     placeholder="0.0"
                     /> */}
                   </div>
                   
        </Typography>
        <Typography>
        
        <div className="content_text">
         <h6 style={{color:'white',marginLeft:10,marginTop:10}}>Prices and Pool Share</h6>
         
<h4 style={{color:'white',marginLeft:30,marginTop:20}}>
675501
</h4>
<h4 style={{color:'grey',marginLeft:20,marginTop:-10}}>
TITAN per MATIC
</h4>
<h4 style={{color:'white',marginLeft:200,marginTop:-69}}>
0.00000148038
</h4>
<h4 style={{color:'grey',marginLeft:190,marginTop:-10}}>
MATIC per TITAN
</h4>
<h4 style={{color:'white',textAlign:'center'}}>
  0%
</h4>
<h4 style={{color:'white',textAlign:'center',marginTop:-15}}>
Share of Pool
</h4>
                   </div>

        </Typography>
      <Button className={classes.btn}>Enter an Amount</Button>
      </Typography> 
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card className={classes.cardsfooter} variant="outlined">
      <CardContent>
      <div className={classes.contentc}>
        
      ⭐️ By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
        </div>        
      
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Modal show={showModal} onHide={handleClose}>
    <div style={{backgroundColor:'#2E2E2E'}}>
    <h1 style={{color:'white',textAlign:'center',marginTop:20}}>
          Select a token
          </h1>
          <div style={{width:350,paddingLeft:60}}>
        <SearchField
  placeholder="Search name or Paste Address"
/>
</div>
   <div style={{width:350,marginLeft:50,backgroundColor:'#2E2E2E'}}>
     
<List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
        
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        
       
        <ListItem button>
          
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
        
          <ListItemText primary="Drafts" />
        </ListItem>
  
      </List>
</div>    
</div>  
      </Modal>
    </div>
    </div>
  );
}
}
