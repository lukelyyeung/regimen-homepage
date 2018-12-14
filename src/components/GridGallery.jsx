import React from 'react';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import HoverContainer from './common/HoverContainer';

const overlayProps = {
	style: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		fontWeight: 700,
		height: '100%',
	},
};

const ImageOverlay = ({ children }) => <div {...overlayProps}>{children}</div>;

function GridGallery({ images, id, ...props }) {
	return (
		<div className="section" id={id}>
			<h2 className="section__header">活動紀錄</h2>
			<StackGrid
				monitorImagesLoaded
				columnWidth="33%"
				duration={600}
				gutterWidth={8}
				gutterHeight={8}
				easing={easings.cubicOut}
				appearDelay={600}
				appear={transitions.appear}
				appeared={transitions.appeared}
				enter={transitions.enter}
				entered={transitions.entered}
				leaved={transitions.leaved}
				{...props}
			>
				{images.map(({ label, src }) => (
					<HoverContainer
						key={label}
						overlay={
							<ImageOverlay>
								<h3 style={{ color: 'white' }}>{label}</h3>
							</ImageOverlay>
						}
					>
						<img
							src={src}
							alt={label}
							style={{ width: '100%', height: '300px', objectFit: 'cover' }}
						/>
					</HoverContainer>
				))}
			</StackGrid>
		</div>
	);
}

export default GridGallery;
