import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Row, Col, Button } from "react-bootstrap";
import style from "./createTenant.module.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { TenantsActions } from "../../redux/actions/tenantsActions";

interface FormValues {
  tenant: string;
}
function CreateTenant(props: any) {
  const navigate = useNavigate();
  const [isSubmit, setSubmit] = useState(true);
  const initialValues: FormValues = { tenant: "" };
  const createTenant = (values: FormValues) => {
    if (!isSubmit) {
      props.createTenant({
        tenant: values.tenant,
      });
      navigate("/");
    }
  };
  const formValidation = (values: any) => {
    if (!values.tenant || values.tenant === "") {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  return (
    <div className={style.main}>
      <Navbar />
      <Formik
        initialValues={initialValues}
        onSubmit={createTenant}
        validate={formValidation}
      >
        <Form>
          <Row className="m-auto w-75 pt-4">
            <Col xs="12">
              <p className={style.breadCrumb}>Tenants/Create Tanent</p>
              <h3>Create Tenants</h3>
            </Col>
            <Col className={style.tenantCard}>
              <Row className="p-4">
                <Col xs="12">
                  <h5>Name</h5>
                  <Field
                    id="tenant"
                    name="tenant"
                    className={style.inputField}
                    placeholder="Enter a name"
                  />
                </Col>
              </Row>
              <hr />
              <Row className="p-4">
                <Col xs="2">
                  <Link to="/">
                    <Button variant="primary" className={style.secondaryBtn}>
                      Cancel
                    </Button>
                  </Link>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={style.primaryBtn}
                    disabled={isSubmit}
                  >
                    Create Tanent
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, TenantsActions)(CreateTenant);
