import React from 'react';
import Avatar from '@mui/material/Avatar';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, } from "../../../styled";
import {
    randomTraderName,
    randomId,

} from '@mui/x-data-grid-generator';

import {
    GridRowModes, 
    GridToolbarContainer,
} from '@mui/x-data-grid';



export const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    
];


export  const columns = [
    {
        field: 'user', headerName: 'NAME', width: 300, editable: false, renderCell: (params) => {
            return (
                <div className='d-flex'>
                    <Avatar src={params.row.avatar} sx={{ marginRight: 3 }} />
                    <span>
                        {params.row.name}
                    </span>
                </div>
            )
        }
    },
    {
        field: 'pos',
        headerName: 'POSITION',
        type: 'text',
        width: 500,
        align: 'left',
        headerAlign: 'left',
        editable: true,
    }
];

export const contentMenu = [
    { text: "All Squad" },
    { text: "Tournament A" },
    { text: "Tournament B" }];


export function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const [searched, setSearched] = React.useState("");

    const requestSearch = (e) => {
        const searchedVal = e.target.value;
        const filteredRows = initialRows.filter((row) => {
            setSearched(searchedVal);
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows((oldRows) => [...filteredRows]);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch("");
    };

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, user: '', pos: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
          ...oldModel,
          [id]: { mode: GridRowModes.Edit, fieldToFocus: 'pos' },
        }));
      };

    return (
        <GridToolbarContainer sx={{ display: "flex", justifyContent: "space-between", margin: "8px 0" }}>
            <Search sx={{ borderRadius: 25 }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searched}
                    onChange={requestSearch}
                    onCancelSearch={() => cancelSearch()}
                />
            </Search>
            <button className='pull-btn' color="primary" onClick={handleClick}>
                <PersonAddAltOutlinedIcon />
                &nbsp;&nbsp;Add New Offical
            </button>
        </GridToolbarContainer>
    );
}