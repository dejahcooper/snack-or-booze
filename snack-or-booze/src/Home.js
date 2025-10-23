import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8 offset-md-2">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h3" className="font-weight-bold">
            Welcome to Snack or Booze!
          </CardTitle>
          <CardText>
            We currently offer <strong>{snacks.length}</strong> snack
            {snacks.length === 1 ? "" : "s"} and{" "}
            <strong>{drinks.length}</strong> drink
            {drinks.length === 1 ? "" : "s"} -- pick your craving or add your
            own.
          </CardText>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button tag={Link} color="primary" to="/snacks">
              Browse Snacks
            </Button>
            <Button tag={Link} color="primary" to="/drinks">
              Browse Drinks
            </Button>
            <Button tag={Link} color="secondary" to="/add">
              Add Something New
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
