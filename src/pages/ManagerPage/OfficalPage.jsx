import React from "react"
import CustomEditTable from "../../components/CustomEditTable";
import {columns, EditToolbar, initialRows } from "./datas/officalData"

function OfficalPage() {
   
    return (
        <CustomEditTable customToolbar={EditToolbar} columns={columns} data={initialRows} />
    );
}

export default OfficalPage;
