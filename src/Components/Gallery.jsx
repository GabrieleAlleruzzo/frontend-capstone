import { useState } from "react";
import { Modal, Card, Row, Col, Container } from "react-bootstrap";

function Gallery(params) {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleShow = (img) => {
    setCurrentImg(img);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="my-5">
      <Row>
        {params.images.map((img, index) => (
          <Col key={index} sm={12} md={4} className="p-0">
            <Card
              className=" rounded-0 border-0 shadow-none"
              onClick={() => handleShow(img)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                className="rounded-0 border-0 shadow-none"
                variant="top"
                src={img.src}
                alt={img.alt}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0 ">
          {currentImg && (
            <img
              src={currentImg.src}
              alt={currentImg.alt}
              className="img-fluid w-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Gallery;
