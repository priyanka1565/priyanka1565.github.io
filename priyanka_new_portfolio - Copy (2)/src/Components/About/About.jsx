import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
    width < 650
      ? "https://res.cloudinary.com/dfjdtufsq/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667578168/samples/animals/my-logo_ckihba.jpg"
      : "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true";
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Priyanka and I enjoy creating things that
					live on the internet. My interest in web development started
					back last year when I was trying to edit things on the web —
					taught me a lot about HTML & CSS!. <br />
					<br /> Fast Forwarding to today, I built a number of web
					applications and 4 major projects. Learned a great deal
					about teamwork, leadership, and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
