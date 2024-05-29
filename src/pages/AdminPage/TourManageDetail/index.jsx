import React from "react"
import clsx from "clsx";
import { useParams } from "react-router-dom";
import TeamPage from "./TeamPage";
import MatchPage from "./MatchPage";
import OfficalPage from "./OfficalPage";
import { setBreadCrumbs } from "../../../redux/actions";
import Knockout from "./Knockout";
function TourManageDetail() {
    const menuLists = ["TEAMS", "KNOCKOUT", "MATCHES", "OFFICAL TEAM"];
    const [RenderPage, setRenderPage] = React.useState(<TeamPage></TeamPage>);
    const { key } = useParams();
    const [select, setSelect] = React.useState(0);

    React.useEffect(() => {
        switch (key) {
            case "":
                setRenderPage(<TeamPage></TeamPage>)
                break;
            case "match":
                setRenderPage(<MatchPage></MatchPage>)
                break;
            case "offical":
                setRenderPage(<OfficalPage></OfficalPage>)
                break;

            default:
                break;
        }

    }, [key]);

    const handleMenu = (index, text) => {
        setSelect(index);
        console.log(index);
        switch (index) {
            case 0:
                setRenderPage(<TeamPage />);
                break;
            case 1:
                setRenderPage(<Knockout />);
                break;
            case 2:
                setRenderPage(<MatchPage />);
                break;
            case 3:
                setRenderPage(<OfficalPage />);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="main-head d-flex flex-column">
                <div className="main-head-intro d-flex j-between align-center">
                    <div className="main-head--logo d-flex align-center j-start">
                        <img src="https://static.livescore.com/i2/fh/england.jpg" alt="" />
                        <div className="main-head--info d-flex flex-column">
                            <h2 className="main-head--team">Premier League</h2>
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
                {RenderPage}
            </div>

        </>
    );
}



export default TourManageDetail;
