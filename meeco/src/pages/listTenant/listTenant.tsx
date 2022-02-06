import Navbar from "../../components/navbar/navbar";
import React from "react";
import style from "./listTenant.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TenantsActions } from "../../redux/actions/tenantsActions";
import { connect } from "react-redux";

function ListTenant(props: any) {
  return (
    <div className={style.main}>
      <Navbar />
      <Row className="m-auto w-75 pt-4">
        <Col xs="12">
          <h3>Tenants</h3>
        </Col>
        <Col className={style.tenantListing}>
          <Row className="p-4">
            <Col xs="10">
              <input className={style.searchField} placeholder="Search" />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link to="/create">
                <Button variant="primary" className={style.primaryBtn}>
                  Create Tanent
                </Button>
              </Link>
            </Col>
            <Row className="m-auto">
              <Col xs="12" className={style.listingHeading}>
                <span>Tenant</span>
              </Col>
              {props?.tenantsReducer?.tenantList.map(
                (tenant: any, id: number) => {
                  return (
                    <Col key={id} xs="12" className={style.tenantItem}>
                      <span>{tenant}</span>
                    </Col>
                  );
                }
              )}
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state;
};
export default connect(mapStateToProps, TenantsActions)(ListTenant);
