
import { Stack, Typography } from "@mui/material";
function Teams() {
    return (
        <div className="favourite-item" >
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{ margin: "10px 0", "& img": { margin: "5px", width: "60px", height: "60px" } }}>
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/roma-17e4658d0167a4c5364d5c46567b4b26.webp" alt="" />
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/norwich-000850c406869927899512b03f73011c.webp" alt="" />
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/napoli-e38f842b0fb88a89c9ef4a4535b5510a.webp" alt="" />
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/man_city-8dfa0397d2bbfdc5bf20c8f60c107123.webp" alt="" />
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/arsenal-df131c6115d1faf5c916f1ff1c5ee35d.webp" alt="" />
                <img src="https://www.livescore.com/ls-web-assets/images/cross_app/tottenham-71af4ec67ca8e70ebd4aa23c5ee409c8.webp" alt="" />
            </Stack>
            <div className="text-center">
                <Typography variant="h5">
                    Never miss a moment
                </Typography>
                <Typography variant="subtitle1">
                    Get instantly notified about news, line-ups and scores from your favourite teams by using the LiveScore app
                </Typography>
            </div>
        </div>
    );
}

export default Teams;