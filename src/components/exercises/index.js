import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto",
  },
};

const Exercises = ({ exercises, category }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <>
                <Typography
                  variant="h5"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) => (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Span" />
                  </ListItem>
                </List>
              </>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h4" style={{ color: "#777" }}>
            Welcome!
          </Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
