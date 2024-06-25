import React from 'react';
import '../Root.css'
import './ScooberSplat.css';

export default function ScooberSplat() {
    return (
        <div className={"Root-header ScooberSplat"}>
            <img
                src={"../Scoober Splat Logo.png"}
                alt={"Scoober Splat Logo"}
                className={"ScooberSplatLogo"}
            />
            <br/>
            <p>
                A cross-platform online party game with 70k+ players and a 95% Positive rating on <a href={"https://store.steampowered.com/app/1601830/Scoober_Splat/"} target="_blank" rel={"noreferrer"}>Steam</a>.
            </p>
            <br/>
            <div className={"Videos"}>
                <iframe
                    src="https://www.youtube.com/embed/rphtcQZmUlA?si=bWw3qZsUZ6nK1jAc"
                    title="YouTube video player"
                    className={"Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
                <iframe
                    src="https://www.youtube.com/embed/6idYouyN1MA?si=HDEByAXBNkl7IuUm"
                    title="YouTube video player"
                    className={"Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <br/>
            <p>
                "Scoober Splat is a hilarious online party game of monster chase. With up to 16 players, two people play as monstrous Goobers on the hunt. Together, the rest of the Scoobers must repair the submarine in order to escape certain death. After the dust settles, everyone gains a new power-up and it starts all over again, with even more chaos!
            </p>
            <p>
                With cross-platform play on mobile devices and in your browser, playing with all of your friends is easy as dropping a link in your group chat. Work together and scream along with built-in proximity chat!"
            </p>
            <p>
                Scoober Splat was live from 2021-2022 and is now offline :(
            </p>
            <br/>
            <img
                src={"../Scoober Run.gif"}
                alt={"Scoober Run Animation"}
                className={"ScooberSplatRun"}
            />
            <br/>
            <p>
                My work on Scoober Splat included:
            </p>
            <ul>
                <li>A custom GPU-based lighting/field-of-view rendering system</li>
                <li>Backend features like account management, payment processing, etc.</li>
                <li>Reverse-engineering the Photon Voice SDK to add support for WebGL</li>
                <li>Collecting analytics and telemetry data and populating Grafana dashboards with SQL</li>
                <li>Collaboratively designed game mechanics with a focus on tutorialization</li>
                <li>Various UI and networked gameplay programming</li>
            </ul>
            <br/>
        </div>
    );
}