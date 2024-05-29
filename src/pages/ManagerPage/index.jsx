import React from "react"
import { useSelector } from "react-redux";
import { Main, DrawerHeader } from "../../styled";
import RequestDrawer from "./drawer/requestDrawer";
import OfficalPage from "./OfficalPage";
import SquadPage from "./SquadPage";
import JerseyPage from "./JerseyPage";
import MatchPage from "./MatchPage";
import TransferPage from "./TransferPage";
import clsx from "clsx";
function ManagerPage() {
    const menuLists = ["squad", "offical team", "jersey", "match", "transfers"];
    const [select, setSelect] = React.useState(0);
    const open = useSelector(state => state.drawer.open);
    const [renderPage, setRenderPage] = React.useState(<SquadPage />);

    const handleMenu = (index, text) => {
        setSelect(index);
        console.log(index);
        switch (index) {
            case 0:
                setRenderPage(<SquadPage />);
                break;
            case 1:
                setRenderPage(<OfficalPage />);
                break;
            case 2:
                setRenderPage(<JerseyPage />);
                break;
            case 3:
                setRenderPage(<MatchPage />);
                break;
            case 4:
                setRenderPage(<TransferPage />);
                break;
            default:
                break;
        }
    }

    return (
        <Main open={open}>
            <RequestDrawer />
            <DrawerHeader />
            <div className="main-head d-flex flex-column">
                <div className="main-head-intro d-flex j-between align-center">
                    <div className="main-head--logo d-flex align-center j-start">
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8650.png" alt="" />
                        <div className="main-head--info d-flex flex-column">
                            <h2 className="main-head--team">Liverpool</h2>
                            <h5 className="main-head--country text-secondary">England</h5>
                        </div>
                    </div>
                    <button className="main-head--action outline-btn">
                        Change Logo
                    </button>
                </div>
                <ul className="nav main-navbar">
                    {menuLists.map((item, index) => <li className="nav-item" key={index}>
                        <a className={clsx("nav-link", index == select && "active")} onClick={() => handleMenu(index, item)}>{item}</a>
                    </li>)}
                </ul>
            </div>
            <div className="main-body">
                {renderPage}
            </div>
        </Main >
    );
}



export default ManagerPage;
