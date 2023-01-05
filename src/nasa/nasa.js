import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
  

function Nasa(props){
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
    const {data,dateChanger}= props;
    return (
    <><div className="date-content">
      <Button color="primary" onClick={()=> dateChanger(-1)}>azalt</Button>
      <p>{data.date}</p>
      <Button color="danger" onClick={()=> dateChanger(1)}>arttır</Button>
    </div> 
    <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">{data.title}</AccordionHeader>
          <AccordionBody accordionId="1">
          <img src={data.url} alt={data.title}/>
          <p>{data.explanation}</p>
          <p>{data.copyright}</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
     </> )
}

export default Nasa