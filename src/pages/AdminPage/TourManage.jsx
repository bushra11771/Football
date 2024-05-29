import React from "react"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { clsx } from "clsx";
import SearchIcon from '@mui/icons-material/Search';
import CustomEditTable from "../../components/CustomEditTable";
import { setBreadCrumbs } from "../../redux/actions";
import { Search, SearchIconWrapper, StyledInputBase, Main, DrawerHeader } from "../../styled";
import {
    randomTraderName,
    randomId,
    randomArrayItem,

} from '@mui/x-data-grid-generator';
import {
    GridToolbarContainer,
} from '@mui/x-data-grid';


const roles = ['In Progress', 'Not Started', 'End'];
const randomRole = () => {
    return randomArrayItem(roles);
};

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 25,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 36,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 19,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 28,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 23,
        joinDate: "Knock Out",
        role: randomRole(),
    },
];

function TourManage() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = function () {
        
        dispatch(setBreadCrumbs("add", { icon: "", text: "Premier League" }));
        Navigate("/admin/tournamentDetail/")
    }
    const columns = [
        {
            field: 'name', headerName: 'TOURNAMENT', width: 220, editable: true
        },
        {
            field: 'age',
            headerName: '#OF TEAM',
            type: 'number',
            width: 220,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'joinDate',
            headerName: 'SYSTEM',
            // type: '',
            width: 200,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'STATUS',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['In Progress', 'Not Started', 'End'],
            renderCell: (params) => {
                return (
                    <span className={clsx(params.row.role == "In Progress" ?
                        "text-success" : params.row.role == 'Not Started' ?
                            "text-warning" : "text-light")}>
                        {params.row.role}
                    </span>
                )
            }
        }
    ];
    return (
        <>
            <div className="main-body" style={{ marginTop: 30 }}>
                <CustomEditTable
                    customToolbar={EditToolbar}
                    columns={columns}
                    data={initialRows}
                    option={{onRowClick:handleClick}} />
            </div>
        </>
    );
}

function EditToolbar(props) {
    const [searched, setSearched] = React.useState("");

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
                />
            </Search>
            <button className='pull-btn' color="primary"
            >
                create New Tournament
            </button>
        </GridToolbarContainer>
    );
}


export default TourManage;
