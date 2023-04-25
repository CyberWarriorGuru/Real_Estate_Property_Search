import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ResultPane from "./ResultPane";
import axios from "axios";
const SearchPane = () => {
  const [result, setResult] = useState([]);
  const [options, setOptions] = useState([
    {
      id: 1,
      State: "CA",
    },
  ]);
  const rapidOption = {
    method: 'GET',
    url: 'https://zillow56.p.rapidapi.com/search',
    params: {location: 'houston, tx'},
    headers: {
      'X-RapidAPI-Key': '0876af8c3amshcaa165cc26b7090p1fd026jsn0aa4679371f3',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
    }
  };
  const singleSearch = () => {
    axios.request(rapidOption).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-dark">
      <Form
        className="border square border-3 px-5 w-100 text-light"
        style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
      >
        <h3 className="text-center mt-5 text-dark">
          Please search property details from address
        </h3>
        <Form.Group className="form-group d-flex justify-content-center align-items-center">
          <Form.Control
            className="w-75 my-5"
            type="text"
            placeholder="1234 Highway St"
          />
        </Form.Group>
        <Form.Group className="form-group my-1 d-flex justify-content-center align-items-center">
          <Form.Control className="w-25" type="text" placeholder="City" />
          <Form.Select className="w-25 mx-1">
            {options.map((option) => {
              return <option key={option.id}>{option.State}</option>;
            })}
          </Form.Select>
          <Form.Control className="w-25" type="text" placeholder="Zip Code" />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center my-5 w-100">
          <Button value="Search Property" className="btn btn-success w-75" onClick={singleSearch}>
            Search Property Details
          </Button>
        </Form.Group>
        <Form.Group></Form.Group>
        <Form.Group className="form-group h-25  d-flex justify-content-center align-items-center">
          {result.length >= 1 ? (
            <ResultPane result={result}></ResultPane>
          ) : (
            <></>
          )}
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchPane;
