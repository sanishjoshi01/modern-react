const ProfileCard = (props) => {
    return (
        <div>
            <div>Title is {props.title}</div>
            <div>Username is {props.handle}</div>
        </div>
    );
}

export default ProfileCard;