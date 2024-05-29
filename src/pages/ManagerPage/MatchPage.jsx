import React from "react"
import CustomSelect from "../../components/CustomSelect";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Stack from '@mui/material/Stack';
import { contentMenu } from "./datas/matchData"

function MatchPage() {
    const menuItems = [1, 2, 3, 4];
    return (
        <>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <CustomSelect data={contentMenu} label={"Tournament"}/>
                <button className="pull-btn">Join New Tournament</button>
            </Stack>
            <div className="main-body competition-items">
                <div className="d-flex match-item-column">
                    <div className="match-item-column-date">
                        DATE
                    </div>
                    <div className="match-item-column-team">
                        TEAM
                    </div>
                    <div className="match-item-column-team">
                        Jersey
                    </div>
                </div>
                {menuItems.map((item, index) => <div key={index} className="d-flex match-item align-center">
                    <div className="d-flex match-item-date align-center">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div >
                            <p>
                                10/20/2024
                            </p>
                            <p>
                                09:00
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-column match-item-team">
                        <div>
                            <img className="team-mark-small" src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                            <span>Leral Madrid</span>
                        </div>
                        <div>
                            <img className="team-mark-small" src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                            <span>Leral Madrid</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column match-item-team">
                        <CustomSelect data={[index % 2 == 0 ? "Home" : "Alway"]} disable/>
                    </div>
                </div>)}
            </div>

        </>
    );
}



export default MatchPage;
