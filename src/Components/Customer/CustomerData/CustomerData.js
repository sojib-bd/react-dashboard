import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, company, city, state) {
    return { name, company, city, state };
}

const rows = [
    createData('Frozen yoghurt', 'Example.Inc', 'New york', 'GK'),
    createData('Ice cream sandwich', 'Example.Inc', 'Lubbock', 'ZK'),
    createData('Eclair', "Example.Inc", 'London', 'YK'),
    createData('Cupcake', "Example.Inc", 'Paris', 'AY'),
    createData('Gingerbread', 'Example.Inc', 'Italy', 'BX'),
    createData('Frozen yoghurt', 'Example.Inc', 'New york', 'GK'),
    createData('Ice cream sandwich', 'Example.Inc', 'Lubbock', 'ZK'),
    createData('Cupcake', "Example.Inc", 'Paris', 'AY'),
    createData('Gingerbread', 'Example.Inc', 'Italy', 'BX'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="right">Company</StyledTableCell>
                        <StyledTableCell align="right">City</StyledTableCell>
                        <StyledTableCell align="right">State</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell padding="checkbox">
                                <Checkbox
                                //   checked={isItemSelected}
                                // inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" padding="none">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.company}</StyledTableCell>
                            <StyledTableCell align="right">{row.city}</StyledTableCell>
                            <StyledTableCell align="right">{row.state}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
