import React from 'react';

function Jumbotron({ background, videoSrc, children }) {
	const containerClassName = `jumbotron ${videoSrc ? 'jumbotron--with-video' : ''}`;
	return (
		<div className={containerClassName} style={{ backgroundImage: `url(${background})` }}>
			{
				videoSrc ?
				(
					<video class="jumbotron__video" preload="true" muted="true" autoplay="true" loop="true">
            <source src={videoSrc} type="video/mp4" />
					</video>
				) : null
			}
			<div className="jumbotron__overlay">
			</div>
			<div className="jumbotron__inner">
				{children}
			</div>
		</div>
	)
}

export default Jumbotron;
