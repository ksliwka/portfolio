import {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Contact.css'


function Contact() {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setButtonText('Sendning...')
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    })
    setButtonText('Send')
    let result = response.json()
    setFormDetails(formInitialDetails)
    if(result.code === 200) {
      setStatus({success: true, message: 'Message sent successfully'})
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later'})
    }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="alig-items-center">
          
          <h2>CONTACT</h2>
          <Col>
          <p>Let's connect</p>
          </Col>
          <Col>
          <form onSubmit={handleSubmit}>
            
              <Col  className="px-1">
                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
              </Col>
              <Col  className="px-1">
              <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
              </Col>
              <Col  className="px-1">
              <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
              </Col>
              
              <Col>
              <textarea  value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
              <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {
                status.message && <Col>
                <p className={status.success === false ? "danger" : 'success'}>{status.message}</p>
                </Col>
              }
           
          </form>
          </Col>
        
          
        </Row>
      </Container>
    </section>

  
  );
}

export default Contact;
