import React from 'react';
import {Link} from "react-router-dom";
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
                    <Link
                        style={{marginRight: '8px', textDecoration: 'none'}}                    
                        to={{
                          pathname: `/user/${props.data.id}`,
                          state: {
                            id: props.data.id,
                            name: props.data.name,
                            email: props.data.email,
                            phone: props.data.phone,
                            fake: props.data.fake
                          }
                        }}><Button variant="outlined">View</Button>
                    </Link>
                    <Button 
                        style={{marginRight: '8px'}}
                        variant="outlined"
                        color="primary"
                        onClick={() => props.updateHandler(props.data.id)}>
                        Update
                    </Button>
                    <Button 
                        style={{marginRight: '8px'}}
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