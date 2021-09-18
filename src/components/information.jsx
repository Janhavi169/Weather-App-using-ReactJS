import { Box, Typography, makeStyles } from "@material-ui/core";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import CloudIcon from '@mui/icons-material/Cloud';

const useStyles = makeStyles({
  component: {
    margin: 50,
  },
  row: {
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
  },
  dataStyles: {
      color: '#ffffff'
  },
  iconStyles: {
      marginRight: 15,
      color : 'darkblue',
  }
});

const Information = ({ data }) => {
  const classes = useStyles();
  return data ? (
    <Box className={classes.component}>
      <Typography className={classes.row}>
          <LocationOnIcon className={classes.iconStyles}/>
        Location - 
        <Box className={classes.dataStyles} component="span">
          {data.name}, {data.sys.country}
        </Box>
      </Typography>
      <Typography className={classes.row}>
          <DeviceThermostatIcon className={classes.iconStyles}/>
        Temperature - 
        <Box className={classes.dataStyles} component="span">
          {data.main.temp}°C
        </Box>
      </Typography>
      <Typography className={classes.row}>
          <OpacityIcon className={classes.iconStyles}/>
        Humidity -  
        <Box className={classes.dataStyles} component="span">
          {data.main.humidity}%
        </Box>
      </Typography>
      <Typography className={classes.row}>
      <WbSunnyIcon className={classes.iconStyles}/>
        Sunrise -  
        <Box className={classes.dataStyles} component="span">
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
        </Box>
      </Typography>
      <Typography className={classes.row}>
      <BrightnessMediumIcon className={classes.iconStyles}/>
        Sunset -  
        <Box className={classes.dataStyles} component="span">
          {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </Box>
      </Typography>
      <Typography className={classes.row}>
      <CloudIcon className={classes.iconStyles}/>
        Atmosphere -  
        <Box className={classes.dataStyles} component="span">
          {data.weather[0].main}
        </Box>
      </Typography>
    </Box>
  ) : (
    ""
  );
};

export default Information;
