import Button from "../components/Button";
import { RiAlbumFill, RiAncientGateFill, RiAccountBoxLine } from "react-icons/ri";

const handleClick = () => {
    console.log("CLICKED");
};

const ButtonPage = () => {
    return (
        <>
            <div>
                <Button primary rounded outline onClick={handleClick}>
                    <RiAlbumFill />
                    Click
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <RiAncientGateFill />
                    Buy!
                </Button>
            </div>
            <div>
                <Button success outline>
                    <RiAccountBoxLine />
                    Deal
                </Button>
            </div>
            <div>
                <Button warning outline>Confirm</Button>
            </div>
            <div>
                <Button danger>Cancel</Button>
            </div>
        </>
    );
}

export default ButtonPage;