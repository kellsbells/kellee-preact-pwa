import { h } from 'preact';
import style from './style';

const About = () => (
  <section id="about" class={style.about}>
    <div class="About-container">
      <h3 className="gradient-text">the nutshell</h3>

      <div class={style.aboutText}>
        <h4>My personal statement:</h4>
        <p>“My vision is to be an honest, hard working and positive leader and to be recognized internationally within the development community. I am committed to growing as a developer as I continue voraciously and intentionally learning. My mission is to create a beautiful web experience accessible to users all over the world.”</p>
      </div>

      <div class={style.aboutText}>
        <h4>What I'm doing in my 9-5:</h4>
        <p>ReactJS, Redux, ES6, NodeJS, MongoDb, Webpack, SCSS, AngularJS, Firebase, D3, Git, Jira</p>
      </div>

      <div class={style.aboutText}>
        <h4>What I've done before:</h4>
        <p>HTML5, CSS3, VueJS, jQuery, PHP, WordPress, Photoshop, Shopify, Bitbucket</p>
      </div>

      <div class={style.aboutText}>
        <h4>What I'm doing in my spare time:</h4>
        <p>ReactNative, AWS, Angular, TypeScript, GraphQL, Python</p>
      </div>
      
      <div class={style.aboutText}>
        <a class="button" href="http://kelleemartins.com/Kellee-Martins-Resume.pdf" download="">Download Resume</a>
      </div>
      
    </div>
  </section>
);

export default About;
