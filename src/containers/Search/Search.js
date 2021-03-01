import React, {useState} from 'react';
import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import './Search.css';
import SimpleCard from '../../UI/Card';

const Search = props => {
  
  const [currentSearch, setCurrentSearch] = useState("");
  const [closingPrice, setClosingPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);

  const performSearch = () => {
    const apiKey="T1V7iYCOAYxyHarQ1dIXeOTpGishwrO0";
    const url = `https://api.polygon.io/v2/aggs/ticker/${currentSearch}/prev?unadjusted=true&apiKey=${apiKey}`;

    axios.get(url).then(function (response) {
      const results = response.data.results[0];

      if(results){
        setClosingPrice(results.c);
        setHighestPrice(results.h);
      }
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  return (
    <div className="Search">
      <div>
        <TextField color="secondary" className="Input" onChange={e => setCurrentSearch(e.target.value)} />
        <Button style={{marginLeft: '10px'}} variant="contained" color="secondary" onClick={performSearch}><SearchIcon /></Button>
      </div>
      <br />
      <SimpleCard />
     
      {closingPrice > 0 && 
        <div>
          <div className="Result">
            <label>Yesterday's Closing Price: ${closingPrice}</label>
          </div>
          <div style={{marginTop: '10px'}}>
            <label>Yesterday's Highest Price: ${highestPrice}</label>
          </div>
        </div>
      }
    </div>
  );
};

export default Search;
