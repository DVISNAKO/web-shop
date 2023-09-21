import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CreateBrand = ({show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Control placeholder={"Введите название типа"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outiline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outiline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default CreateBrand;
