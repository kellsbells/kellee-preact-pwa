import { h, Component } from 'preact';
import style from './style';

const Project = (props) => (
	<li class={style.project}>
		<img class={style.projectImage} src={'/assets/projects/' + props.details.image} alt={props.details.name}/>
		<div class={style.projectOverlay}>
			<p>{props.details.name}</p>
		</div>
	</li>
);

export default Project;