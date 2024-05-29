import React from 'react';
import { useDispatch} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, } from "../../../styled";
import { requestPlayer } from '../../../redux/actions';
import {
    randomTraderName,
    randomId,

} from '@mui/x-data-grid-generator';
import {
    GridToolbarContainer,
} from '@mui/x-data-grid';



export const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        position: "Defender",
        performance: 97,
        status: 'Good Performance',
        jersey: 22,
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        position: "Midfielder",
        performance: 97,
        status: 'Injury',
        jersey: 22,
    },

];

export const columns = [
    {
        field: 'user', headerName: 'Name', width: 280, editable: false, renderCell: (params) => {
            return (
                <div className='d-flex'>
                    <Avatar src={params.row.avatar} sx={{ margin: "5px 20px 5px 0" }} />
                    <span>
                        {params.row.name}
                    </span>
                </div>
            )
        }
    },
    {
        field: 'position', headerName: 'POSITION', width: 150, align: 'left', headerAlign: 'left',
        type: 'singleSelect', valueOptions: ['Goal Keeper', 'Defender', 'Midfielder'], editable: true,
        valueFormatter: (value, row, func) => {
            return func.valueOptions[value]
        },
    },
    {
        field: 'performance', headerName: 'PERFORMANCE', width: 120, align: 'left', headerAlign: 'left',
        editable: true, type: "number", renderCell: (params) => {
            return (
                params.value + "%"
            )
        }
    },
    {
        field: 'status', headerName: 'STATUS', width: 150, align: 'left', headerAlign: 'left', editable: true,
        type: 'singleSelect', valueOptions: ['Good Performance', 'Injury'],
        renderCell: (params) => {
            const value = params.value;
            if (value === "Good Performance") return <font color='green'>{value}</font>
            else return <font color='red'>{value}</font>;
        },

    },
    {
        field: 'jersey',
        headerName: 'JERSEY NUMBER',
        type: 'number',
        align: 'left',
        headerAlign: 'left',
        width: 120,
        editable: true,
    },
];

export const contentMenu = [
    { text: "All Squad" },
    { text: "Tournament A" },
    { text: "Tournament B" }];


export function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const [searched, setSearched] = React.useState("");
    const dispatch = useDispatch();
    const handleRequstPlayer = () => {
       dispatch(requestPlayer());
    };

    const requestSearch = (e) => {
        const searchedVal = e.target.value;
        const filteredRows = initialRows.filter((row) => {
            setSearched(searchedVal);
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows((oldRows) => [...filteredRows]);
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
                />
            </Search>
            <button className='pull-btn' color="primary" onClick={handleRequstPlayer}>
                <PersonAddAltOutlinedIcon />
                &nbsp;&nbsp;Request Player
            </button>
        </GridToolbarContainer>
    );
}