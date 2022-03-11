import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Questions({answers = []}) {
	return answers.map((answer, index) => (
		<div className={classes.question} key={index}>
			<div className={classes.qtitle}>
				<span className="material-icons-outlined"> help_outline </span>
				{answer.title}
			</div>
			{/* for result analysis page option can't be checked */}
			<Answers input={false} options={answer.options}/>
		</div>
	))
}
