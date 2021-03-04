import {
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 500,
    },
})

export default function BookList({ apiResponse }) {
    const classes = useStyles();

    if (apiResponse) {
        return (
            <>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader size="small" aria-label="book table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Title</TableCell>
                                        <TableCell align="center">Author/s</TableCell>
                                        <TableCell align="center">Description</TableCell>
                                        <TableCell align="center">Image</TableCell>
                                        <TableCell align="center">Link</TableCell>
                                        <TableCell align="center">Add to Database</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {apiResponse.map(book =>
                                    <p>{book.volumeInfo.title}</p>
                                )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={1}></Grid>
                test
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}