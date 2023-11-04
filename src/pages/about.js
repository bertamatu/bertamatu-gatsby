import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

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
                            <hr/>
                        </Link>
                    </header>
                    <h3>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</h3>
                    <ul>
                        <li>
                            Energetic, flexible, highly motivated, positive team
                            player;
                        </li>
                        <li>Eager to learn and open to new challenges;</li>
                        <li>
                            Having the potential to motivate and support others;
                        </li>
                    </ul>
                    <div>
                        Because of my unfulfilled potential when working in
                        finance, I decided to make a career shift to software
                        engineering. I didn't choose it because of a decent
                        salary and programming is not just one of my hobbies -{' '}
                        <strong>it's my passion</strong>.
                    </div>
                    <br />
                    <h3>How It Started</h3>
                    <ul>
                        <li>
                            In <strong>2019</strong> I've started to learn
                            Front-end engineering fundamentals and built my very
                            first simple website in a week!
                        </li>
                        <li>
                            In <strong>2020 January</strong> I finished
                            full-stack studies at the{' '}
                            <a
                                href="https://bit.lt"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Baltic Institute of Technology
                            </a>{' '}
                            - was one of the most driven students. I was a
                            self-taught front-end enthusiast, so I mentored my
                            classmates and other students at coding school with
                            our daily tasks and homework during scrum classes in
                            the front-end development module. During the
                            studies, we also got familiar with OOP and Java
                            fundamentals. My final project was{' '}
                            <a
                                href="https://github.com/bertamatu/springCrudApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                a web CRUD app
                            </a>{' '}
                            , built with Spring Boot and MySQL. I enjoyed
                            working on the front-end part and I already was
                            self-taught in some front-tend technologies, so I
                            decided to focus on it after getting my diploma.
                        </li>
                    </ul>
                    <h3>How It’s Going</h3>
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
                                TypeScript, and front-end testing - Jest and
                                Cypress.
                            </li>
                        </ul>
                        <div>
                            Currently, I am a full-time front-end software
                            engineer supporting my team as the lead for UI
                            performance research and Cypress testing, and making
                            critical decisions when required.
                        </div>
                        <br />
                        <Link
                            href="https://instagram.com/berta.codes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                            <hr/>
                        </Link>
                        <h3>Tech content creator, mentor and speaker.</h3>
                        <section>
                            Since <strong>2020</strong> mentoring and having fun
                            on Social networks (Instagram/Linkedin). Just after
                            finishing my studies, Covid happened. Everything got
                            closed. No coding academies, no workshops, no
                            meeting similar-minded people, nothing {'(!)'}. I
                            had to find ways to keep moving toward my software
                            engineering career. After some investigation, I
                            decided to join Instagram and do some networking
                            with software developers outhere. I've shared my
                            daily goals and losses when building my projects
                            portfolio. Today there is a community of over 100k
                            people. I enjoy sharing my developer's journey and
                            helping and motivating others because I know how
                            much support is needed to become{' '}
                            <strong>a self-taught software engineer</strong>.
                            <br />
                            <br />
                            During <strong>2021-2022</strong> in partnership
                            with Lithuania Junior Achievement (LJA)
                            organization, I had the opportunity to visit schools
                            in Lithuania. During these visits, I spoke to
                            students about the tech world, software engineering,
                            and startups, with the aim of encouraging them to be
                            brave, creative, and curious.
                            <br />
                            <br />
                            In <strong>2023</strong>, for the half of the year,
                            I had the opportunity to be a mentor at The Kaunas
                            University of Technology for the Product Development
                            Project module. This module brings together
                            researchers, lecturers, social partners, and student
                            teams to collaborate on developing a product or
                            service from idea to prototype. As a mentor, I
                            provided guidance and advice to the student teams,
                            along with other company representatives involved in
                            the program.
                        </section>
                        <br />
                        <Link
                            href="https://github.com/bertamatu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github />
                            <hr/>

                        <h3>Let's see the code!</h3>
                        <span><img src="https://img.shields.io/github/followers/bertamatu?style=social" height="16em" width="auto" alt='github berta codes matuliauskiene'/></span>
                        <span>&nbsp;&nbsp;</span>
                        <span><img src="https://img.shields.io/github/stars/bertamatu/bertamatu?style=plastic&color=white&labelColor=black" height="16" width="auto" alt='berta codes' /></span>
                        <br/>
                        <span><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bertamatu&layout=compact&show_icons=true&theme=graywhite&hide_border=true&icon_color=ff00ff&text_color=333"  height="135em" alt='berta codes'/></span>
                        <img src="https://github-readme-stats.vercel.app/api?username=bertamatu&show_icons=true&theme=graywhite&hide_border=true&title_color=333&icon_color=FB4570&text_color=333" height="135em" alt='berta codes'/>
                        </Link>
                    </div>
                </AboutText>
            </Layout>
        </AboutPage>
    );
};

const AboutPage = styled.main`
    width: 100%;
    overflow-y: auto;
    margin-top: 5vh;
`;
const AboutText = styled.article`
    margin: 80px auto;
    font-size: 13px;
    color: black;
    text-align: justify;
    padding: 0 50px;
    width: 100%;
    @media (min-width: 768px) {
        width: 55vw;
        font-size: 14px;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: #000;
`;
const LinkedIn = styled(FaLinkedin)`
    font-size: 50px;
    margin-right: 0.5rem;
    color: #0e76a8;
`;
const Instagram = styled(FaInstagramSquare)`
    font-size: 3.2rem;
    margin-right: 0.5rem;
    color: #fb3958;
`;
const Github = styled(FaGithub)`
    font-size: 50px;
    color: #000;
    margin-right: 0.5rem;
`;

export default About;
