import {Col, Container} from 'react-bootstrap'
import './ProjectCard.css'

export const ProjectCard = ({title, description, image}) => {
    return(
        <Container className='mt-5'>
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image}/>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
        </Container>
    )
}