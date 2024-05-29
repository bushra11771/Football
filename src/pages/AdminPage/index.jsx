import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { Main, DrawerHeader } from "../../styled";
import TourManage from "./TourManage";
import TourManageDetail from "./TourManageDetail";
import TeamManage from "./TeamManage";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import { setBreadCrumbs } from "../../redux/actions";

var linkFlag = true;
function AdminPage() {
    const [RenderPage, setRenderPage] = React.useState(<TourManage></TourManage>);
    const { key } = useParams();
    const dispatch = useDispatch();
    const open = useSelector(state => state.drawer.open);
    const breadcrumbs = useSelector(state => state.breadcrumbs);


    
    React.useEffect(() => {
        if(linkFlag == true) {
            dispatch(setBreadCrumbs("set", { icon: "", text: "Tournament Management" }));
            linkFlag = false;
        }
        switch (key) {
            case "tournament":
                setRenderPage(<TourManage></TourManage>)
                break;
            case "tournamentDetail":
                setRenderPage(<TourManageDetail></TourManageDetail>)
                break;
            case "teammanage":
                setRenderPage(<TeamManage></TeamManage>)
                break;

            default:
                break;
        }

    }, [key]);

    return (
        <Main open={open}>
            <DrawerHeader />
            <CustomBreadcrumbs data={breadcrumbs} />
            {RenderPage}
        </Main >
    );
}



export default AdminPage;
