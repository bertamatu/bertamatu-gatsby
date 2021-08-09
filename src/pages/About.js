import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

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
                    <p>
                        Because of my unfulfilled potential, I decided to make a
                        career shift from finance and accounting to front-end
                        development. I didn't choose it because of a decent
                        salary and programming is not just one of my hobbies -
                        it's my passion.
                    </p>
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
                    <p>
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
                        front-end module. We also got familiar with OOP and Java
                        fundamentals. My{' '}
                        <Link
                            href="https://github.com/bertamatu/springCrudApp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            final project
                        </Link>{' '}
                        was a web CRUD app, built with Spring Boot and MySQL. I
                        enjoyed working on the front-end part the most, so I
                        decided to focus on it after getting my diploma.
                    </p>
                    <p>
                        I got my first front-end developer job in 2020 August.
                        Spent there 6 months working with Vue Js.
                        <br />
                        In 2021 March I joined another company to get more
                        experience in React Js, TypeScript and front-end
                        testing.
                        <br />
                        <a
                            href="https://www.linkedin.com/in/bertam/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            More...
                        </a>
                    </p>
                </AboutText>
            </Layout>
        </AboutPage>
    );
};

const AboutPage = styled.main`
    width: 100vw;
    overflow-y: auto;
    margin-top: 6%;
`;
const AboutText = styled.article`
    margin: 80px auto;
    font-size: 0.7rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    text-align: justify;
    padding: 0 50px;
    @media (min-width: 768px) {
        width: 55vw;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: red;
`;
const LinkedIn = styled(FaLinkedin)`
    font-size: 3rem;
    margin-bottom: -0.2rem;
    margin-right: 1rem;
    color: #0e76a8;
`;

export default About;
