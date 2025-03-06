import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ Menuclick }) {
    const [activeItem, setActiveItem] = useState(""); // Track the active item

    const handleItemClick = (item) => {
        setActiveItem(item); // Update the active item
        Menuclick(item); // Pass the clicked item to the parent component
    };

    const data = [
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true", title: "Nadir On The Go" },
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", title: "Coke Studio Bangla" },
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true", title: "MKBHD" },
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true", title: "Figma" },
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true", title: "ATC Android TOTo c..." },
        { img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true", title: "Alux.com" },
    ];

    return (
        <div className="container1">
            <div className="logo">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="Menu" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="Logo" />
            </div>

            <div className="list">
                <div
                    className={`img1 ${activeItem === "Home" ? "active" : ""}`}
                    onClick={() => handleItemClick("Home")}
                >
                    <img className="img01" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="Home" />
                    <p className="text1">Home</p>
                </div>
                <div
                    className={`img2 ${activeItem === "Explore" ? "active" : ""}`}
                    onClick={() => handleItemClick("Explore")}
                >
                    <img className="img02" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="Explore" />
                    <p className="text2">Explore</p>
                </div>
                <div
                    className={`img3 ${activeItem === "Shorts" ? "active" : ""}`}
                    onClick={() => handleItemClick("Shorts")}
                >
                    <img className="img03" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="Shorts" />
                    <p className="text3">Shorts</p>
                </div>
                <div
                    className={`img4 ${activeItem === "Subscription" ? "active" : ""}`}
                    onClick={() => handleItemClick("Subscription")}
                >
                    <img className="img04" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="Subscription" />
                    <p className="text4">Subscription</p>
                </div>
            </div>

            <hr className="hr" />
            <div className="list1">
                <div
                    className={`img5 ${activeItem === "Library" ? "active" : ""}`}
                    onClick={() => handleItemClick("Library")}
                >
                    <img className="img05" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="Library" />
                    <p className="text5">Library</p>
                </div>
                <div
                    className={`img6 ${activeItem === "History" ? "active" : ""}`}
                    onClick={() => handleItemClick("History")}
                >
                    <img className="img06" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="History" />
                    <p className="text6">History</p>
                </div>
                <div
                    className={`img7 ${activeItem === "Your videos" ? "active" : ""}`}
                    onClick={() => handleItemClick("Your videos")}
                >
                    <img className="img07" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="Your videos" />
                    <p className="text7">Your videos</p>
                </div>
                <div
                    className={`img8 ${activeItem === "Watch later" ? "active" : ""}`}
                    onClick={() => handleItemClick("Watch later")}
                >
                    <img className="img08" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="Watch later" />
                    <p className="text8">Watch later</p>
                </div>
                <div
                    className={`img9 ${activeItem === "Liked videos" ? "active" : ""}`}
                    onClick={() => handleItemClick("Liked videos")}
                >
                    <img className="img09" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="Liked videos" />
                    <p className="text9">Liked videos</p>
                </div>
                <div
                    className={`img10 ${activeItem === "Show more" ? "active" : ""}`}
                    onClick={() => handleItemClick("Show more")}
                >
                    <img className="img010" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="Show more" />
                    <p className="text10">Show more</p>
                </div>
            </div>

            <hr className="hr" />
            <p className="sub">SUBSCRIPTION</p>

            <div className="list2">
                {data.map((item, index) => (
                    <div key={index} className="img16">
                        <img className="img011" src={item.img_url} alt={item.title} />
                        <p className="text16">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;