import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<div className="header-container">		
			<Link activeClassName={style.active} href="/"><h1>kellee</h1></Link>
			<nav>
				<Link activeClassName={style.active} href="/about">About</Link>
				<Link activeClassName={style.active} href="/projects">Projects</Link>
				<Link activeClassName={style.active} href="/reviews">Reviews</Link>
				<Link activeClassName={style.active} href="/contact">Contact</Link>
			</nav>
		</div>
	</header>
);

export default Header;
