import "./Projects.css";
import { ProjectCard } from "./ProjectCard";
import { Container, Col, Row, Image } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";

// function Projects() {
//   return (
//     <section id="projects" className="projects">
//       <Container>
//         {/* <div className="project-bx"> */}
//           <Row>
//             <h2 className="mb-5">Projects:</h2>
//             <Col xs={12} md={6} xl={3}>
//               <img
//                 className="img-fluid "
//                 src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
//               />
//             </Col>
//             <Col xs={12} md={6} xl={9}>
//               <h2 className="project-title">Plants app</h2>
//               <p>bla bla about project</p>
//               <AiFillGithub />
//               <VscPreview />
//             </Col>
//           </Row>
//         {/* </div> */}
//       </Container>
//     </section>
//   );
// }

const projects = [
  {
    title: "Plant app",
    description: "bla bla",
    image:
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80',
  },
];

function Projects() {
  return (
    <section id='projects' className="projects">
      <Row >
        <Col>
        
        {
          projects.map((project, index) => {
            return(
              <ProjectCard key={index} {...project}/>
            )
          })
        }
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
