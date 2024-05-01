const ProfileCard = ({ title, handle, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="PDA logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p>Title is {title}</p>
                    <p>Username is {handle}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;