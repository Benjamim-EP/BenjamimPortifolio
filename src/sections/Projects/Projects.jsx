import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/tramando.jpg';
import blockChain from '../../assets/blockChain.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Tramando Teatro"
          p="Ticket sales application"
        />
        <ProjectCard
          src={blockChain}
          link="https://benjamim-ep.github.io/blockchain-frontend/"
          h3="BlockChain visualization"
          p="Application for blockchain visualization"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
