import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './documentExport.css'

const DocumentExport = () => {

    const [documentTypeList, setDocumentTypeList] = useState({
        dateFrom: '',
        dateTo: '',
        includeNotes: false,
        documentTypeNames: ['']
    });

    // const [documentTypes, setDocumentTypes] = useState<string[]>([]);

    const handleSetDocumentTypes = (e: any) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
        }
        else {
            e.target.classList.add('active');
        }
        let selectedDocTypes: string[] = [];
        const activeElements = Array.from(document.getElementsByClassName('active'));
        activeElements.forEach(element => {
            selectedDocTypes.push(element.innerHTML);
        });

        console.log(selectedDocTypes);
        



        setDocumentTypeList({ ...documentTypeList, documentTypeNames: selectedDocTypes });
        //setDocumentTypes(documentTypess => [...documentTypess, e.target.innerHTML]);
    }

    return (
        <Container className="document-type-select-container">
            <Row>
                <Col sm={6}>
                    <h1 className="document-type-select-header">Select Document Types:</h1>
                    <ListGroup defaultActiveKey="#link1" className="document-type-select">
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 1
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 3
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 4
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 5
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 6
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 7
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 8
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 9
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={handleSetDocumentTypes}>
                            Document Type 10
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <h1 className="date-select-header">Select Dates:</h1>
                    <Row>
                        <Col sm={6}><Form.Control type="date" /></Col>
                        <Col sm={6}><Form.Control type="date" /></Col>
                    </Row>
                    <Form.Check className="notes-toggle" type="switch" id="custom-switch" label="Include Notes" />
                </Col>
            </Row>
            <Row>
                <Col sm={6}>

                </Col>
                <Col sm={6}>

                </Col>
            </Row>

        </Container>
    );
}

export default DocumentExport;