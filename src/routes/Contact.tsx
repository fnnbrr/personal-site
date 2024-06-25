import React from 'react';
import '../Root.css';
import './Contact.css'

export default function Contact() {
    return (
        <div className={"Root-header Contact"}>
            <br/>
            <br/>
            <p>say hi!</p>
            <ul>
                <li>email me at <a href={"mailto:fnnbrr.dev@gmail.com"} target="_blank" rel={"noreferrer"}>fnnbrr.dev@gmail.com</a></li>
                <li>message me on <a href={"https://www.linkedin.com/in/finnbarrocallahan/"} target="_blank" rel={"noreferrer"}>LinkedIn</a></li>
                <li>dm me on Discord <a href={"https://discord.com/users/fnnbrr"} target="_blank" rel={"noreferrer"}>@fnnbrr</a></li>
                <li>check out my projects on <a href={"https://github.com/fnnbrr"} target="_blank" rel={"noreferrer"}>GitHub</a></li>
            </ul>
        </div>
    );
}