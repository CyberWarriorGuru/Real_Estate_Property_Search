import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ResultPane from "./ResultPane";

const BulkSearchPane = () => {
    const [result, setResult] = useState([]);
    const [options, setOptions] = useState([
      {
        id:1,
        State: "CA",
      }
      ]);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
        <Form className="border square border-3 px-5 opacity-100 w-100 text-light">
        <h3 className="text-center mt-5 text-dark">
            Please search property details from csv File
        </h3>
        <Form.Group className="form-group d-flex justify-content-center align-items-center">
            <Form.Control
            className="w-75 my-5"
            type="file"
            />
        </Form.Group>

        <Form.Group className="d-flex justify-content-center my-5 w-100">
            <Button value="Search Property" className="btn btn-success w-75">
            Search Property Details
            </Button>
        </Form.Group>

        <Form.Group className="form-group h-25  d-flex justify-content-center align-items-center">
            {result.length >= 1 ? <ResultPane result={result}></ResultPane> : <></>}
        </Form.Group>
        </Form>
    </div>
  )
}

export default BulkSearchPane