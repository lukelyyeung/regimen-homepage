import React from 'react';
import classNames from "classnames";

function HoverContainer({className, overlay, overlayClassName, children, ...props}) {
	const classSets = classNames("hover-container", className);
	const overlayClassSets = classNames("hover-container__overlay", overlayClassName);
	return (
		<div className={classSets} {...props}>
			{children}
			<div className={overlayClassSets}>{overlay}</div>
		</div>
	)
}

export default HoverContainer;
