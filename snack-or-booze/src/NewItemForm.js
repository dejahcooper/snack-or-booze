import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";

const INITIAL_STATE = {
  type: "snacks",
  name: "",
  description: "",
  recipe: "",
  serve: "",
};

function NewItemForm({ addItem }) {
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const id = slugify(formData.name, { lower: true, strict: true });
      const payload = { ...formData, id };

      await addItem(formData.type, payload);
      setFormData(INITIAL_STATE);
      history.push(`/${formData.type}/${id}`);
    } catch (err) {
      console.error("Error adding item", err);
      setFormError("Unable to save the item. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <Card>
        <CardBody>
          <CardTitle tag="h4" className="mb-4 text-center">
            Add a New Snack or Drink
          </CardTitle>
          {formError && <Alert color="danger">{formError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="type">Category</Label>
              <Input
                id="type"
                type="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="snacks">Snack</option>
                <option value="drinks">Drink</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="recipe">Recipe</Label>
              <Input
                id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="serve">Serve</Label>
              <Input
                id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button color="primary" type="submit" block disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Item"}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItemForm;
