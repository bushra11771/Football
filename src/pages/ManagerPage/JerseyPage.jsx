import React from "react"
import JerseyCard from "../../components/JerseyCard"
function JerseyPage() {
    const jerseyList = [
        { title: "Jersey Home", icon: "/images/jersey/liverpool-red.avif" },
        { title: "Jersey Away", icon: "/images/jersey/liverpool-black.avif" },
        { title: "Third Kit ", icon: "/images/jersey/liverpool-white.avif" },
        { title: "Goal Keeper", icon: "/images/jersey/liverpool-green.avif" },
    ]

    return (
        <div className="d-flex j-start jersey-lists ">
            {jerseyList.map((item) => <JerseyCard title={item.title} icon={item.icon} />)}
            <JerseyCard title={"Add New jersey"} icon={"/images/jersey/new jersey.png"} option="new"/>
        </div>

    );
}

export default JerseyPage;
