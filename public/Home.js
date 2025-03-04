import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Cybersecurity Awareness!</h1>
            <p>
                This website is dedicated to helping children understand the importance of cybersecurity.
                Here, you will find resources, tips, and fun activities to learn how to stay safe online.
            </p>
            <h2>Why Cybersecurity Matters</h2>
            <p>
                In today's digital world, it's essential to know how to protect yourself and your personal information.
                Cybersecurity helps you understand the risks and how to avoid them.
            </p>
            <h2>Resources</h2>
            <ul>
                <li><a href="/resources/games">Interactive Games</a></li>
                <li><a href="/resources/videos">Educational Videos</a></li>
                <li><a href="/resources/articles">Helpful Articles</a></li>
            </ul>
            <h2>Stay Safe Online!</h2>
            <p>
                Remember to always think before you click and never share personal information with strangers.
                Let's learn together how to be safe online!
            </p>
        </div>
    );
};

export default Home;