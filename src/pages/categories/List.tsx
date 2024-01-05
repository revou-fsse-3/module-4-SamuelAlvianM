    import {
        Table,
        TableContainer,
        Paper,
        TableHead,
        TableRow,
        TableCell,
        TableBody,
        Container,
        Typography,
        Button,
        TableFooter,
        TablePagination,
    } from '@mui/material';
    import { Link, useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import { useEffect, useState } from 'react';
    import Logout from '../../components/Logout';
    
    interface Category {
        id: string;
        name: string;
        is_active: boolean;
    }
    
    const List = () => {
        const navigate = useNavigate();
        const [rows, setRows] = useState<Category[]>([]);
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);
    
        const handleEdit = (id: string) => () => {
        navigate(`/edit/${id}`);
        };
    
        const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
        };
    
        const token = window.localStorage.getItem('token');
    
        const fetchList = async () => {
        const response = await axios.get('https://mock-api.arikmpt.com/api/category', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        setRows(response.data.data);
        };
    
        useEffect(() => {
        fetchList();
        }, []);
    
        const handleDelete = (id: string) => async () => {
        try {
            await axios.delete(`https://mock-api.arikmpt.com/api/category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
    
            fetchList();
        } catch (error) {}
        };
    
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const displayedRows = rows.slice(startIndex, endIndex);
    
        return (
        <div className="content">
            <Container maxWidth="md">
            <div className="category-list">
                <Typography variant="h4" component="h4" align={'center'} style={{ fontWeight: 800 }}>
                List Data
                </Typography>
    
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">User Name</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {displayedRows.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.is_active ? 'Active' : 'Deactive'}</TableCell>
                        <TableCell align="center">
                            <div className="action-group">
                            <Button size="small" variant="contained" onClick={handleEdit(row.id)}>
                                Edit
                            </Button>
                            <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                onClick={handleDelete(row.id)}
                            >
                                Delete
                            </Button>
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[1, 5, 10, { label: 'All', value: -1 }]}
                        colSpan={4}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                            'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={(event, newPage) => setPage(newPage)}
                        onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
                        />
                    </TableRow>
                    </TableFooter>
                </Table>
                </TableContainer>
                <Link
                to={'/add'}
                style={{
                    fontSize: '20px',
                    backgroundColor: '#FAEF5D',
                    color: '#176B87',
                    fontWeight: 800,
                    textAlign: 'center',
                    border: '2px solid #0F1035',
                }}
                >
                --Click Me to Add New Data--
                </Link>
                <div>
                <Logout />
                </div>
            </div>
            </Container>
        </div>
        );
    };
    
    export default List;
    