// This file implements the the selectable card component
import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import "./SelectableCard.css"

function SelectableCard(props) {
  const { myItem, isSelected, handleClick } = props;
  const [open, setOpen] = useState(false);

  return (
    // mt-3 adds margin to the top
    // mb-3 adds margin to the bottom
    // mx-5 adds a horizontal margin of 48px to both the left and right sides of the element
    <>
      <Card
        type='radio'
        id={myItem.id}
        className={`mt-3 mb-3 mx-5 hoverable-card ${isSelected ? 'selected' : 'inherit'}`}
        onClick={handleClick}
        style={{ width: '18rem', cursor: 'pointer'}}
      >
        <Card.Img variant="top" src={myItem.img_src} />
        <Card.Body>
          <Card.Title>{myItem.title} {myItem.price}</Card.Title>

          <Card.Link
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Learn more
          </Card.Link>
          <Collapse in={open}>
            <div id="example-collapse-text">
              {myItem.learn_more}
            </div>
          </Collapse>

        </Card.Body>
      </Card>


    </>
  );
}

export default SelectableCard;