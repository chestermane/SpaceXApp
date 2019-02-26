import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from 'react-moment';
import 'moment-timezone';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, rocketName, rocketType, payload, date) {
  id += 1;
  return { id, name, rocketName, rocketType, payload, date };
}

function SimpleTable(props) {
  const { classes } = props;
  const { flight } = props;

  const rows = [
    createData(
      flight.mission_name,
      flight.rocket.rocket_name,
      flight.rocket.rocket_type,
      flight.rocket.second_stage.payloads[0].payload_id,
      <Moment format="MM/DD/YYYY">{flight.launch_date_local}</Moment>
      
    )
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Mission Name</TableCell>
            <TableCell align="center">Rocket Name</TableCell>
            <TableCell align="center">Rocket Type</TableCell>
            <TableCell align="center">Payload</TableCell>
            <TableCell align="center">Lauch Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.rocketName}</TableCell>
              <TableCell align="center">{row.rocketType}</TableCell>
              <TableCell align="center">{row.payload}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
