import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

	return (
		<section id="projects">
			<Container>
				<div className="project-wrapper">
					<Title title="Projects" />
					<Row>
						<Col lg={6} sm={12}>
						<Fade
						right={isDesktop}
						bottom={isMobile}
						duration={1000}
						delay={1000}
						distance="30px"
						>
						<div className="project-wrapper__image">
							<a
							href='#!'
							target="_blank"
							aria-label="Project Link"
							rel="noopener noreferrer"
							>
							<Tilt
							options={{
							reverse: false,
							max: 8,
							perspective: 1000,
							scale: 1,
							speed: 300,
							transition: true,
							axis: null,
							reset: true,
							easing: 'cubic-bezier(.03,.98,.52,.99)',
						}}
						>
						<div data-tilt className="thumbnail rounded">
							<ProjectImg alt="" filename={img} />
						</div>
						<div className="project-wrapper__text">
							<h3 className="project-wrapper__text-title">{'Project Title'}</h3>
							<div>
								<p>
									'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'
									</p>
								</div>
								<a
								target="_blank"
								rel="noopener noreferrer"
								className="cta-btn cta-btn--hero"
								href='#!'
								>
								See Live
							</a>
						</div>
					</Tilt>
				</a>
			</div>
		</Fade>
	</Col>
	</Row>
	</div>
	</Container>
	</section>
	);

export default Projects;
