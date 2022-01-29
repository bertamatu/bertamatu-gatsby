import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import TechIcons from '../components/common/TechIcons';

const About = () => {
    return (
        <AboutPage>
            <Layout>
                <AboutText>
                    <header>
                        <Link
                            href="https://www.linkedin.com/in/bertam/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </Link>
                        <b>Hello, I'm Berta! Creative front-end engineer.</b>
                    </header>
                    <hr />
                    <div>
                        Because of my unfulfilled potential when working in
                        finance, I decided to make a career shift to software
                        engineering. I didn't choose it because of a decent
                        salary and programming is not just one of my hobbies -{' '}
                        <strong>it's my passion</strong>.
                    </div>
                    <br />
                    <div>
                        <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
                        <ul>
                            <li>
                                Energetic, flexible, highly motivated, positive
                                team player;
                            </li>
                            <li>Eager to learn and open to new challenges;</li>
                            <li>
                                Having the potential to motivate and support
                                others;
                            </li>
                        </ul>
                    </div>
                    <div>
                        I finished full-stack studies in a{' '}
                        <Link
                            href="https://bit.lt"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Baltic Institute of Technology
                        </Link>{' '}
                        in 2020 January - was one of the most driven students. I
                        was a self-taught front-end enthusiast, so I mentored my
                        classmates and other students at coding school with our
                        daily tasks and homework during scrum classes in the
                        front-end development module. During the studies, we
                        also got familiar with OOP and Java fundamentals. My
                        final project was{' '}
                        <Link
                            href="https://github.com/bertamatu/springCrudApp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            a web CRUD app
                        </Link>{' '}
                        , built with Spring Boot and MySQL. I enjoyed working on
                        the front-end part the most, so I decided to focus on it
                        after getting my diploma. Today I'm sharpening my
                        Javascript skills and willing to become a full-stack
                        developer.
                    </div>
                    <br />
                    <div>
                        <ul>
                            <li>
                                In <strong>2020 August</strong> I got my first
                                front-end developer job. Spent there 6 months
                                working with Vue Js.
                            </li>
                            <li>
                                In <strong>2021 March</strong> I joined another
                                company to get more experience in React Js,
                                TypeScript and front-end testing - Jest and
                                Cypress.
                            </li>
                        </ul>
                        <a
                            href="https://www.linkedin.com/in/bertam/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            More about me...
                        </a>
                        <br />
                        <br />
                        <TechIcons />
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '10px',
                            }}
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=bertamatu&show_icons=true&count_private=true&theme=monokai&bg_color=000000"
                                width="500"
                                height="auto"
                                alt="berta matuliauskiene github"
                                style={{ marginRight: '2px' }}
                            />
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=bertamatu&&theme=monokai&&layout=compact&&show_icons=true&&&bg_color=000000"
                                width="auto"
                                height="198"
                                alt="berta matuliauskiene github"
                            />
                        </div>
                    </div>
                </AboutText>
            </Layout>
        </AboutPage>
    );
};

const AboutPage = styled.main`
    width: 100%;
    overflow-y: auto;
    margin-top: 8vh;
`;
const AboutText = styled.article`
    margin: 80px auto;
    font-size: 0.7rem;
    color: black;
    text-align: justify;
    padding: 0 50px;
    @media (min-width: 768px) {
        width: 55vw;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: #fa1e3f;
`;
const LinkedIn = styled(FaLinkedin)`
    font-size: 3rem;
    margin-bottom: -0.2rem;
    margin-right: 1rem;
    color: #0e76a8;
`;

export default About;
