import "bulma/css/versions/bulma-no-dark-mode.min.css";

import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assitants
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                content="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                content="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                content="Siri was made by Apple and is being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;