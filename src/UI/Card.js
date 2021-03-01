import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: 275,
    backgroundColor: '#424242',
    color: 'white'
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  pos: {
    marginBottom: 12,
    color: 'white'
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>      
        <Typography variant="h5" component="h2">
         Apple
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          $AAPL
        </Typography>
        <Typography variant="body2" component="p">
          Sector: Information Technology
          <br />
          Market Cap: $2.2T
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" block variant="contained" color="secondary" endIcon={<AddIcon />}>ADD To List</Button>
      </CardActions>
    </Card>
  );
}