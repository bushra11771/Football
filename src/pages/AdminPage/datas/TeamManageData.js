import React from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import { Search, SearchIconWrapper, StyledInputBase, } from "../../../styled";

import {
    GridToolbarContainer,
} from '@mui/x-data-grid';
import {
    randomId,
    randomArrayItem,

} from '@mui/x-data-grid-generator';

const roles = ['Active', 'Request Approval'];
const randomRole = () => {
    return randomArrayItem(roles);
};


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
        </GridToolbarContainer>
    );
}

export const initialRows = [
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: "Arsenal",
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: "jacob jones",
        status: randomRole(),
        ofplayer: 19
    },

];
export const columns = [
    {
        field: 'team', headerName: 'TEAM', width: 220, editable: false, renderCell: (params) => {
            return (
                <div className='d-flex'>
                    <Avatar src={params.row.avatar} sx={{ margin: "10px 3px", width: "30px", height: "30px" }} />
                    <span>
                        {params.row.team}
                    </span>
                </div>
            )
        }
    },
    {
        field: 'manager',
        headerName: 'MANAGER',
        type: 'text',
        width: 180,
        align: 'left',
        headerAlign: 'left',
        editable: true,
    },
    {
        field: 'status',
        headerName: 'STATUS',
        width: 150,
        editable: true,
        type: 'singleSelect',
        valueOptions: ['Active', 'Request Approval'],
        renderCell: (params) => {
            return (
                <span className={clsx(params.row.status == "Active" ? "text-success" : "text-warning")}>
                    {params.row.status}
                </span>
            )
        }
    },
    {
        field: 'ofplayer',
        headerName: '#OF PLAYER',
        type: 'text',
        width: 180,
        editable: true,
    },
];