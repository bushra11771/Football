import React from "react"
import CustomTab from "../../components/CustomTabs"
import CustomEditTable from "../../components/CustomEditTable";
import { contentMenu, columns, EditToolbar, initialRows } from "./datas/squadData"

function SquadPage() {
    return (
        <>
            <CustomTab borderShow={true} tabData={contentMenu} />
            <CustomEditTable customToolbar={EditToolbar} columns={columns} data={initialRows} />

        </>
    );
}



export default SquadPage;
