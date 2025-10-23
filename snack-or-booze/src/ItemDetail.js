import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ItemDetail({ items, cantFind }) {
  const { id } = useParams();
  const item = items.find((entry) => entry.id === id);

  if (!item) return <Redirect to={cantFind} />;

  return (
    <section className="col-md-6 offset-md-3">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetail;
