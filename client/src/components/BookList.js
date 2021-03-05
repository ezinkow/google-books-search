import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 10000000,
    },
})

export default function BookList({ apiResponse }) {
    const classes = useStyles();

    function handleSaveToDb(id) {
        // console.log('id', id)
        // const foundBook = apiResponse
        const foundBook = apiResponse.find(book => book.id === id)
        console.log('found', foundBook)
        // const updateSavedBook = savedBook.slice()
        // updateSavedBook.push(foundBook)
        let authorsObj = foundBook.volumeInfo.authors.join(', ')
        const bookObject = {
            id: foundBook.id,
            title: foundBook.volumeInfo.title,
            authors: authorsObj,
            description: foundBook.volumeInfo.description,
            image: foundBook.volumeInfo.imageLinks.smallThumbnail,
            link: foundBook.volumeInfo.infoLink,
        }

        console.log('obj', bookObject)
        axios.post('/api/books', bookObject)
    }
    // console.log('saved', savedBook)

    if (apiResponse) {
        return (
            <>
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
                                    {apiResponse.map(book => (
                                        <TableRow key={book.id}>
                                            <TableCell component="th" scope="row">
                                                {book.volumeInfo.subtitle ?
                                                    <p>{book.volumeInfo.title}: {book.volumeInfo.subtitle}</p>
                                                    : <p>{book.volumeInfo.title}</p>}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {book.volumeInfo.authors ? <p>{book.volumeInfo.authors.join(", ")}</p> : ""}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <p>{book.volumeInfo.description}</p>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {book.volumeInfo.imageLinks ?
                                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} /> : ""}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <a href={book.volumeInfo.infoLink}>Link</a>
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <button onClick={() => handleSaveToDb(book.id)}>Add book to database</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}