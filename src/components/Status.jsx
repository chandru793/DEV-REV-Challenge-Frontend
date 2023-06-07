import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import TablePagination, {
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import '../assets/css/Status.css'

//components
import Sidebar from './Sidebar';

const Status = () => {

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const books = [
        {
            bname: 'Harry Potter',
            author: 'Bloomsbury',
            publisher: 'J K Rowling',
            Pyear: 1997,
            genre: "Fantasy, Young Adult",
            total: 20,
            status: true,
        },
        {
            bname: 'The Alchemist',
            author: 'Paulo Coelho',
            publisher:'Harper Torch',
            Pyear:1988 ,
            genre: "Fiction, Allegory",
            total: 16,
            status: false,
        },
        {
            bname: 'It ends with us',
            author: 'Collen Hoover',
            publisher: 'Atriabooks',
            Pyear: 2016,
            genre: "Contemporary Romance, Fiction",
            total: 9,
            status: true,
        }, {
            bname: 'Sivagamiyin Sabatham',
            author: 'Kalki',
            publisher: 'Jaya Bakti',
            Pyear: 1944,
            genre: "Historical Fiction",
            total: 18,
            status: false,
        },
        {
            bname: 'Ponniyin Selvan',
            author: 'Kalki',
            publisher: 'Jaya Bakti',
            Pyear: 1954,
            genre: "Historical Fiction",
            total: 52,
            status: true,
        },
        {
            bname: 'Attack on Titan',
            author: 'Hajime Isayama',
            publisher: 'Kondansha',
            Pyear: 2009,
            genre: "Manga, Science Fiction, Fantasy",
            total: 21,
            status: true,
        },
        {
            bname: 'Parthiban Kanavu',
            author: 'Kalki',
            publisher: 'Manonmani',
            Pyear: 1942,
            genre: "Historical Fiction, Romance",
            total: 34,
            status: false,
        },
        {
            bname: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            publisher: 'J. B. Lippincott & Co.',
            Pyear: 1960,
            genre: "Fiction, Bildungsroman",
            total: 12,
            status: false,
        },
        {
            bname: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            publisher: "Charles Scribner's Sons",
            Pyear: 1925,
            genre: "Fiction, Jazz Age, Literary Fiction",
            total: 17,
            status: true,
        },
        {
            bname: 'Pride and Prejudice',
            author: 'Jane Austen',
            publisher: 'T. Egerton, Whitehall',
            Pyear: 1819,
            genre: "Fiction, Romance, Classic Literature",
            total: 21,
            status: false,
        },
        {
            bname: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            publisher: 'George Allen & Unwin',
            Pyear: 1955,
            genre: "Fantasy, Epic Fantasy",
            total: 18,
            status: false,
        },
        {
            bname: 'To the Lighthouse',
            author: 'Virginia Woolf',
            publisher: 'Hogarth Press',
            Pyear: 1927,
            genre: "Modernist Fiction, Stream of Consciousness",
            total: 15,
            status: true,
        },
    ]

    const [library, setLibrary] = useState(books);

    const filteredBooks = library.filter(items =>
        (items.bname != null && items.bname.toLowerCase().includes(search.toLowerCase())) ||
        (items.author != null && items.author.toLowerCase().includes(search.toLowerCase())) ||
        (items.genre != null && items.genre.toLowerCase().includes(search.toLowerCase())) ||
        (items.Pyear != null && items.Pyear.toString().toLowerCase().includes(search.toString().toLowerCase()))
    );

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredBooks.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const blue = {
        400: '#3399FF',
    };

    const grey = {
        0: '#ffffff',
        10: '#343434',
        20: '#272727',
    };

    const Root = styled('div')(
        ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    text-align: left;
    padding: 15px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[10]};
  }
  `,
    );

    const CustomTablePagination = styled(TablePagination)(
        ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[10] : grey[10]};
    border-radius: 50px;
    background-color: transparent;
    color:${theme.palette.mode === 'dark' ? grey[0] : grey[0]};

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    }

    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[400]};
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    color:${theme.palette.mode === 'dark' ? grey[0] : grey[0]};

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    }

    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[400]};
    }
  }
  `,
    );

    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="status">
                <div className="pagename">
                    <h3 className='hh3'>Status</h3>
                </div>
                <div className="search">
                    <form className='.sform'>
                        <SearchIcon fontSize='medium' color='#fff' className='searchicon' />
                        <input
                            type='text'
                            name='search'
                            className='searchinput'
                            placeholder='Search by book, author, genre, published year'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div className="table">

                    {/* table pagination */}
                    <Root sx={{ width: '100%', maxWidth: '100%' }}>
                        <table aria-label="custom pagination table">
                            <thead>
                                <tr>
                                    <th>BOOK NAME</th>
                                    <th>AUTHOR NAME</th>
                                    <th>PUBLISHER NAME</th>
                                    <th>PUBLISHED YEAR</th>
                                    <th>GENRE</th>
                                    <th>TOTAL COUNT</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(rowsPerPage > 0
                                    ? filteredBooks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredBooks
                                ).map((row) => (
                                    <tr key={row.bname}>
                                        <td>{row.bname}</td>
                                        <td style={{ width: 120 }} align="right">
                                            {row.author}
                                        </td>
                                        <td style={{ width: 130 }} align="right">
                                            {row.publisher}
                                        </td>
                                        <td style={{ width: 130 }} align="right">
                                            {row.Pyear}
                                        </td>
                                        <td style={{ width: 150 }} align="right">
                                            {row.genre}
                                        </td>
                                        <td style={{ width: 120 }} align="right">
                                            {row.total}
                                        </td>
                                        <td style={{ width: 150 }} align="right">
                                            {row.status ? (<Fab variant="extended" size="small" color="success" aria-label="add" sx={{ fontSize: 'x-small' }}>
                                                <FiberManualRecordIcon sx={{ mr: 0.5, fontSize: 'medium' }} />
                                                Available
                                            </Fab>) : (<Fab variant="extended" size="small" color="error" aria-label="add" sx={{ fontSize: 'x-small' }}  >
                                                <FiberManualRecordIcon sx={{ mr: 0.5, fontSize: 'medium' }} />
                                                Not Available
                                            </Fab>)}
                                        </td>
                                    </tr>
                                ))}

                                {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <CustomTablePagination
                                        rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                                        colSpan={7}
                                        count={filteredBooks.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                'aria-label': 'rows per page',
                                            },
                                            actions: {
                                                showFirstButton: true,
                                                showLastButton: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </tr>
                            </tfoot>
                        </table>
                    </Root>
                </div>
            </div>
        </div>
    )
}

export default Status