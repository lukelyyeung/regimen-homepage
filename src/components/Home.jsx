import React from 'react';
import { Layout, Button } from 'antd';

import Topbar from './Topbar';
import Jumbotron from './Jumbotron';
import HeroContent from './HeroContent';
import heroBackgroundUrl from './images/hero.jpg';
import ProjectIntro from './ProjectIntro';
import Features from './Features';
import Modal from './common/Modal';
import Footer from './Footer';

import '../styles/main.scss';
import photo1 from './images/photo01.jpg';
import photo2 from './images/photo02.jpg';
import photo3 from './images/photo03.jpg';
import photo4 from './images/photo04.jpg';
import photo5 from './images/photo05.jpg';
import photo6 from './images/photo06.jpg';
import GridGallery from './GridGallery';
import NetWorkSearch from './NetWorkSearch';

const IMAGES = [
	{ src: photo1, label: '選用藥材' },
	{ src: photo2, label: '成品中藥梘' },
	{ src: photo3, label: '宣傳海報' },
	{ src: photo4, label: '製作過程： 攪勻原材料' },
	{ src: photo5, label: '製作過程： 倒模及冷卻' },
	{ src: photo6, label: '團隊合照' },
];
function Home() {
	return (
		<Layout className="application">
			<Topbar />
			<section role="main">
				<Jumbotron background={heroBackgroundUrl}>
					<HeroContent id="hero-content" />
				</Jumbotron>
				<ProjectIntro id="project-introduction" />
				<Features id="features" />
				<NetWorkSearch id="practitioner-network"/>
				<GridGallery images={IMAGES} id="gallery" />
				<Modal
					title="問卷調查"
					className="flex-center"
					style={{ alignItems: 'flex-end' }}
					cancelText="取消"
					skipConfirm
					outputRender={({ onClick }) => (
						<Button
							onClick={onClick}
							className="floating-btn"
							type="primary"
							shape="circle"
							icon="profile"
						/>
					)}
					width={740}
				>
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSdnXHdJnzo1o1WblcxMQpLy-IrS9PATckaMNTM3x6TfxOP9vg/viewform?embedded=true"
						width="648"
						height="1955"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
					>
						載入中…
					</iframe>
				</Modal>
			</section>
			<Footer id="contact-us" />
		</Layout>
	);
}

export default Home;
