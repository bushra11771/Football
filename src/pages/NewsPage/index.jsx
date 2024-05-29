import React from "react"
import { useSelector } from "react-redux";
import { Main, DrawerHeader } from "../../styled";
import { Stack, Typography } from "@mui/material";

function NewsPage() {
    const newsList = [1, 2, 3];
    const open = useSelector(state => state.drawer.open);
    return (
        <Main open={open}>
            <DrawerHeader />
            <div className="main-body">
                {newsList.map(() => <div className="news-item">
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{ width: "70%" }}>
                            <img style={{ width: 130, height: 80, margin: 10, borderRadius: 8 }} src="https://uk1.sportal365images.com/process/smp-image-api/livescore.com/14052024/22e1e294-c195-4456-857e-613c4b4abc5e.jpg?operations=fit(260:)&w=260&quality=100" alt="" />
                            <Stack >
                                <Typography variant="h5">Kilmarnock vs Celtic predictions: O'Riley ready to lead Bhoys to title</Typography>
                                <Stack direction={"row"}>
                                    <Stack direction={"row"}>
                                        <button className="outline-btn">Scottish Premiership</button>
                                        <button className="outline-btn">Kilmarnock</button>
                                        <button className="outline-btn">Scottish Premiership</button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography variant="caption">5 hours ago</Typography>
                    </Stack>
                </div>
            )}
            </div>
        </Main >
    );
}



export default NewsPage;
