import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from "../util/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} heigth={150} src={device.img} />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="mt-1 d-flex align-items-center">
            <div >{device.rating}</div>
            <Image
              style={{ width: 20 }}
              src="https://as1.ftcdn.net/v2/jpg/02/12/94/86/1000_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg"
            />
          </div>
          
        </div><div>
            {device.name}
          </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
