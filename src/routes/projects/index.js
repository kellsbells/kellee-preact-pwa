import { h, Component } from 'preact';
import style from './style';
import myProjects from './myProjects';
import Project from '../project';



export default class Projects extends Component {
	state = {
		projects: {},
	};

	componentDidMount() {
	  this.setState({ projects: myProjects });
	}

	render() {
	  	return (
	    	<section id="projects" class={style.projects}>
	    		<div className="Projects-container">
		        	<h3 className="gradient-text">all the things</h3>
		            <ul class={style.projectsList}>
						{
							Object
							.keys(this.state.projects)
							.map(key => <Project key={key} index={key} details={this.state.projects[key]} />)
						}
					</ul>
	        	</div>
	      	</section>
	  	);
	}
}