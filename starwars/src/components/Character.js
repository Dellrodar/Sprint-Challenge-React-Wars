//Write your Character component here
import React, { useState } from "react";
import { Collapse, Button, CardTitle, CardText, Card } from "reactstrap";
import './Character.css'

function CharacterCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(props);
  console.log(props.card);
    return (
      <div className="charCardContainer">
        <div>
          <Card
            body
            className="center"
          >
            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              <CardTitle tag="h3">{props.card.name}</CardTitle>
            </Button>
            <Collapse isOpen={isOpen}>
              <CardText>Birth year: {props.card.birth_year}</CardText>
              <CardText>Gender: {props.card.gender}</CardText>
              <CardText>Height: {props.card.height}</CardText>
              <CardText>Hair color: {props.card.hair_color}</CardText>
              <CardText>Eye Color: {props.card.eye_color}</CardText>
            </Collapse>
          </Card>
        </div>
      </div>
    );
  }
export default CharacterCard;