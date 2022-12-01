import React from 'react';
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';
const Sino = (props) => {
    return (
        <>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={props.imagen}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.titulo}
                    </CardTitle>
                    <Button>SI</Button>
                    &nbsp;
                    <Button>NO</Button>
                </CardBody>
            </Card>
        </>
    );
}

export default Sino;