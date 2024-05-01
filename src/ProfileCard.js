const ProfileCard = ({ title, handle, image }) => {
    return (
        <div>
            <img src={image} alt="PDA logo" />
            <div>Title is {title}</div>
            <div>Username is {handle}</div>
        </div>
    );
}

export default ProfileCard;