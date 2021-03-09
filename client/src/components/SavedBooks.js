import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
        maxHeight: 10000000,
    },
})

export default function SavedBooks({ books }) {
    const classes = useStyles();
    console.log('savedbooks', books)
    
    function handleDelete(id) {

    }

    // if (books == true) {
    // var saved =

    // } else { var saved = "" }

    return (
        <Grid item xs={12}>
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
                            {books.length > 0 ? books.map(book => (
                                <TableRow key={book.id}>
                                    <TableCell component="th" scope="row">
                                        {/* {book.subtitle ?
                        <p>{book.volumeInfo.title}: {book.volumeInfo.subtitle}</p>
                        :  */}
                                        {<p>{book.title}</p>}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {<p>{book.authors}</p>}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <p>{book.description}</p>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {<img src={book.image} />}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <a href={book.link}>Link</a>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <button onClick={() => handleDelete(book.id)}>Delete book</button>
                                    </TableCell>
                                </TableRow>
                            )): ""}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>
    )
}

