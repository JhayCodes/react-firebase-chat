import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="/avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="/arrowUp.png" alt="" />
                    </div>
                </div><div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="/arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="/arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="avatar" alt="" />
                                <span>photo_2024_3.png</span>
                            </div>
                            <img src="/download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="avatar" alt="" />
                                <span>photo_2024_3.png</span>
                            </div>
                            <img src="/download.png" className="icon" alt="" />
                        </div>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="/arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail