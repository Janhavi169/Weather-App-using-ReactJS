import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import { getData } from "../services/api";
import Information from "./information";

const useStyles = makeStyles({
  input: {
    marginRight: 40,
  },
  component: {
    padding: 10,
    backgroundColor: "#c5d2e8",
    borderRadius: "20px",
    margin: "10px",
  },
  button: {
    width: "150px",
    height: "40px",
    borderRadius: "10px",
    marginTop: "10px",
    backgroundColor: "#06204d",
  },
});

const Form = () => {
  const classes = useStyles();
  const [data, getWeatherData] = useState();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [click, handleClick] = useState(false);

  useEffect(() =>{
      const getWeather = async() =>{
        city && await getData(city ,country).then(response =>{
        getWeatherData(response.data);
        console.log(response.data)
    })}
    getWeather();
    handleClick(false);
  }, [click]);

  const handleCitychange = (value) =>{
    setCity(value);
  }

  const handleCountrychange = (value) =>{
    setCountry(value);
  }

  return (
      <React.Fragment>
    <Box className={classes.component}>
      <TextField
        inputProps={{ className: classes.input }}
        className={classes.input}
        onChange = {(e) => handleCitychange(e.target.value)}
        id="filled-basic"
        label="Enter City"
        variant="filled"
      />
      <TextField
        inputProps={{ className: classes.input }}
        className={classes.input}
        onChange = {(e) => handleCountrychange(e.target.value)}
        id="filled-basic"
        label="Enter Country"
        variant="filled"
      />
      <Button 
      onClick = {() => handleClick(true)}
      className={classes.button} variant="contained" color="secondary">
        Get Weather
      </Button>
    </Box>
    <Information data={data}/>
    </React.Fragment>
  );
};

export default Form;
