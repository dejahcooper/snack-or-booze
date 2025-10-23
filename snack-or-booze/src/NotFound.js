import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function NotFound() {
  return (
    <section className="col-md-6 offset-md-3">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h4">404: Page Not Found</CardTitle>
          <CardText className="mb-4">
            The page you requested isn't on the menu. Maybe try a snack or a
            drink instead.
          </CardText>
          <Button tag={Link} to="/" color="primary">
            Back Home
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;
