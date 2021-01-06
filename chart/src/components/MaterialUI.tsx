import React from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  btnStyle: {
    background: 'green',
    padding: '3px 50px'
  },
  typoStyle: {
    color: 'blue'
  },
  paperStyle: {
    background: 'orange',
    height: '50px'
  }
})

const MaterialUI: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography
        className={classes.typoStyle} // colorよりも優先される
        color="secondary"
        variant="h1"
        align="right"
        gutterBottom
        noWrap
      >
        Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paperStyle}>xs=7</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paperStyle}>xs=5</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        テスト
      </Button>
    </div>
  )
}

export default MaterialUI
