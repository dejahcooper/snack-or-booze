import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Menu({ items, title, basePath, description }) {
  return (
    <section className="col-md-6">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          {description && (
            <CardText className="text-center text-light-grey">{description}</CardText>
          )}
          <ListGroup>
            {items.length === 0 ? (
              <ListGroupItem className="text-center text-muted">
                Nothing here yet -- why not add something?
              </ListGroupItem>
            ) : (
              items.map((item) => (
                <ListGroupItem
                  key={item.id}
                  tag={Link}
                  to={`/${basePath}/${item.id}`}
                  action
                >
                  {item.name}
                </ListGroupItem>
              ))
            )}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
