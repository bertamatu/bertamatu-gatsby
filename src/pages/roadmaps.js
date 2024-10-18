import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Roadmap = () => {
  return (
    <Layout>
      <Container>
        <a href="https://www.wecodeui.com/products/front-end-developer-roadmap">
          <Image
            src="https://www.wecodeui.com/cdn/shop/files/Screenshot2024-03-09at15.52.47.png?v=1709992398"
            alt="bertacodes Berta Matuliauskiene front-end developer roadmap"
          />
        </a>
        <Text>
          <br />
          <a href="https://www.wecodeui.com/products/front-end-developer-roadmap">
            <h3>FRONT-END DEVELOPER ROADMAP</h3>
          </a>
          <header>
            <h3>Why Choose My Guide?</h3>
          </header>
          <section>
            <p>
              With over <strong>3.5 years of experience</strong>, I understand
              the challenges of starting in Front-end development. My guide is
              crafted to boost your confidence and minimize stress. It's
              basically a guide and onboarding manual in one.
            </p>
            <p>
              You will not only learn some tech stack but also get familiar with
              other tools you will encounter in your first developer job! This
              guide includes{' '}
              <strong>free access to the WECODEUI Discord community</strong>.
            </p>
          </section>

          <section>
            <h3>Tech Stack Covered</h3>
            <strong>
              HTML5 / SCSS / BOOTSTRAP / TAILWIND / JS / GIT / REACTJS / MUI /
              TYPESCRIPT / JEST / CYPRESS / NETLIFY... and much more.
            </strong>
            <br /> <br />
            <p>
              So, whether you're a Junior Developer looking to level up or a
              newcomer to the world of coding, this roadmap has you covered.
            </p>
          </section>

          <section>
            <h3>What You'll Learn</h3>
            <ul>
              <li>Essential aspects of forming a coding habit</li>
              <li>
                Navigating <strong>Tutorial Hell</strong>
              </li>
              <li>Preventing Developer Burnout</li>
              <li>
                Effective <strong>Study Plans</strong> and{' '}
                <strong>Study Schedules</strong>
              </li>
              <li>
                Mastering <strong>Time Management</strong> to optimize your
                learning journey
              </li>
            </ul>
          </section>
          <section>
            <h3>Tools & Techniques</h3>
            <p>
              Unlock the power of Google with advanced search techniques and
              explore the latest AI Tools like ChatGPT and GitHub Copilot to
              enhance your development workflow. Dive into the world of Code
              Editors, including IntelliJ IDEA and VS Code, and master the
              intricacies of Front-End Developer Tools like Chrome DevTools and
              Lighthouse.
            </p>
          </section>
          <section>
            <h3>Front-End Roadmap</h3>
            <ul>
              <li>
                Understanding <strong>Web Foundations</strong>
              </li>
              <li>
                Mastering <strong>Fundamentals</strong> like HTML5, CSS3, and
                JavaScript (including ES6 and Clean Code principles)
              </li>
              <li>
                Version control with <strong>Git and GitHub</strong>
              </li>
            </ul>
          </section>
          <section>
            <h3>Advanced Topics</h3>
            <ul>
              <li>
                Technologies like{' '}
                <strong>Node.js, React.js, Redux, and TypeScript</strong>
              </li>
              <li>
                Practical insights into{' '}
                <strong>React Router, MUI, and Redux DevTools</strong>
              </li>
              <li>
                Essential Testing and Quality Assurance techniques with{' '}
                <strong>Jest and Cypress</strong>
              </li>
              <li>
                Build Tools like <strong>Vite and Webpack</strong>
              </li>
              <li>
                Understanding <strong>Authentication Strategies</strong> in Web
                Development
              </li>
              <li>
                Deployment techniques using platforms like{' '}
                <strong>Netlify and Gatsby.js</strong>
              </li>
            </ul>
          </section>
          <section>
            <h2>Boost Your Skills</h2>
            <p>
              Enhance your <strong>Documentation skills</strong> and embrace
              Agile Development methodologies like <strong>Scrum</strong>. Build
              your Portfolio and explore Optional Tools like{' '}
              <strong>Docker, Postman, NGINX, and GraphQL</strong>.
            </p>
          </section>
          <section>
            <h2>Additional Resources</h2>
            <p>
              Access additional resources including Courses, Articles, and Tools
              like <strong>CS50</strong>, and explore avenues for Freelancing.
            </p>
          </section>
          <footer>
            <h6>
              &copy; 2024 Front-End Developer Guide by Berta Matuliauskiene. All
              rights reserved.
            </h6>
          </footer>
        </Text>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 90vh;
  width: 80%;
  margin-top: 8vh;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-top: 10vh;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  min-width: 200px;
  max-width: 300px;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 4px;
  margin-right: 40px;
`;

const Text = styled.article`
  font-size: 15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    text-align: justify;
  }
`;

export default Roadmap;
