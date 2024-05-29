import React from "react"
import CustomEditTable from "../../components/CustomEditTable";
import { columns, initialRows } from "./datas/tranferData"


function TransferPage() {
    return (
            <CustomEditTable columns={columns} data={initialRows} />
    );
}



export default TransferPage;
