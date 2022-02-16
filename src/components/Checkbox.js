import React from "react";

export default function Checkbox({className, text}) {
	return (
		<label className={className}>
			<input type="checkbox" />
			<span> {text}</span>
		</label>
	);
}
