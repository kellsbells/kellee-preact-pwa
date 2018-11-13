import { h } from 'preact';
import style from './style';

const Reviews = () => (
  <section id="reviews" class={style.reviews}>
    <div class="Reviews-container">
      <h3 className="gradient-text">the scuttlebutt</h3>
      <div class={style.reviewsList}>
        <div class={style.reviewsColumn}> 
          <div class={style.reviewsSingle}>
            <p>Kellee has made an impression on my professional and personal life that will last far longer than the few months that I’ve had the pleasure to work with her. She came to Zenman at a time when I needed a strong and smart developer to pick up some missing pieces. Kellee did just that and much, much more. Her strong sense of character is matched with her drive and love for the development industry. She is a self-motivated developer who is on the edge of new front-end technologies, whether that be the newest JS framework, design trends (who knew gradients could look cool in 2017?), or how to make a new process seamless for the team. Kellee’s qualifications will meet and exceed expectations for any front-end development position.</p>
            <p class={style.reviewsAuthor}>Corinne W., Colleague</p>
          </div>
        </div>
        <div class={style.reviewsColumn}>
          <div class={style.reviewsSingle}>
            <p>Your enthusiasm and dedication to getting shit done means a lot. You are our duct tape programmer<sup>*</sup></p>
            <p class={style.reviewsAuthor}>Kellee's Boss</p>
            <small><sup>*</sup><a href="https://www.joelonsoftware.com/2009/09/23/the-duct-tape-programmer/" rel="noopener noreferrer" target="_blank">
                What is a duct tape developer?
            </a></small>
          </div>
          <div class={style.reviewsSingle}>
            <p>For the last time, I am not currently interested in selling kellee.com.</p>
            <p class={style.reviewsAuthor}>Larry E., Kellee's Nemesis</p>
          </div>
          <div class={style.reviewsSingle}>
            <p>Kellee is the person you go to when you need something done. When it’s important and you need to trust that it’s handled quickly, efficiently and is top notch. Kellee is a very fun loving, down to earth person who loves spending time with family and friends. She is very giving and compassionate which shows in her hard work as VP of a local puppy rescue group.</p>
            <p>You are beautiful, inside and out. I love you, but please don't get another nose ring.</p>
            <p class={style.reviewsAuthor}>Kellee's Mom</p>
          </div>
        </div>
        <div class={style.reviewsColumn}> 
          <div class={style.reviewsSingle}>
            <p>Passionate is a phrase that comes to mind when I think about Kellee. I have had the pleasure of knowing Kellee for almost three years and I have worked with her for over half of that time. She is a highly talented developer with a passion for learning. She is incredibly dedicated and gives 110% into every project she does. She is highly adaptive and can complete any task that comes her way. She is driven, detail oriented, and learns quickly. She would be an asset to any company and team.</p>
            <p class={style.reviewsAuthor}>Vanessa H., Former Lead</p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
);

export default Reviews;
