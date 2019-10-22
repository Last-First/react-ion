import React from 'react';
import {Button,
    TableBody,
    TableCell,
    TableRow} from '@material-ui/core';

const user = (props) => {
    const rows = [props.data];
    return(
        <TableBody>
            {rows.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                    <Button 
                        variant="outlined"
                        onClick={() => props.updateHandler(props.data.id)}>
                        View
                    </Button>
                    <Button 
                        variant="outlined"
                        color="primary"
                        onClick={() => props.updateHandler(props.data.id)}>
                        Update
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={() => props.deleteHandler(props.data.id)}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
    );
};

export default user;