import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//import {connect} from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const logout=()=>{
    window.location.href="/";
};

 export default function AdminComponent() {
    
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
     
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
      <List>
        {[''].map((text, index) => (
          <ListItem button key={text}>
           <List><Link to="/getallcustomer">
              <Button  variant="contained" color="primary">
                   <Typography>Customer Manage </Typography>
                   </Button>
                   <br></br></Link>
                   
        </List>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {[''].map((text, index) => (
          <ListItem button key={text}>
            <List> <Link to="/ordermanage">
                   <Button variant="contained" color="primary">
                   <Typography>Orders</Typography> 
                   </Button></Link><br></br>
        </List>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {[''].map((text, index) => (
          <ListItem button key={text}>
           <List> <Link to="/pizzamanage">
             <Button  variant="contained" color="primary">
                 <Typography> Pizza </Typography>
                   </Button></Link>
                   <br></br>
                   
        </List>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {[''].map((text, index) => (
          <ListItem button key={text}>
           <List> <Link to="/couponmanage">
             <Button  variant="contained" color="primary">
                   <Typography>Coupon</Typography>
                   </Button></Link>
                   <br></br>
                   
        </List>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <List>
        {[''].map((text) => (
          <ListItem button key={text}>
           <List> <Button onClick={logout} variant="contained" color="secondary">
                    LOGOUT
                   </Button>
                   <br></br>
        </List>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
             
        <Divider />
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography component="h2" variant="h4" align="center">
          <h1>WELCOME </h1>
          <h1>Admin</h1>
          <h1></h1>
          
                   
        </Typography>
      </main>
    </div>
  );
}
