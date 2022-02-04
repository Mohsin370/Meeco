import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Row, Col, Button } from "react-bootstrap";
import style from "./createTenant.module.css";
import { Link } from "react-router-dom";

export default function CreateTenant() {
  return (
    <div className={style.main}>
      <Navbar />
      <Row className="m-auto w-75 pt-4">
        <Col xs="12">
          <p className={style.breadCrumb}>Tenants/Create Tanent</p>
          <h3>Create Tenants</h3>
        </Col>
        <Col className={style.tenantCard}>
          <Row className="p-4">
            <Col xs="12">
              <h5>Name</h5>
              <input className={style.inputField} placeholder="Enter a name" />
            </Col>
          </Row>
          <hr/>
          <Row className="p-4">
            <Col xs='2'>
              <Link to="/">
                <Button variant="primary" className={style.secondaryBtn}>Cancel</Button>
              </Link>
            </Col>
            <Col style={{textAlign:'right'}}>
              <Link to="/">
                <Button variant="primary" className={style.primaryBtn}>Create Tanent</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
