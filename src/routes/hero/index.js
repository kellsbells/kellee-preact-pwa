import { h } from 'preact';
import style from './style';

const Hero = () => (
	<section class={style.hero}>

    <div className="hero-container">
      <h1 className="gradient-text">kellee martins</h1>
      <h2>Front-end Engineer</h2>
    </div>
  </section>
);

export default Hero;
