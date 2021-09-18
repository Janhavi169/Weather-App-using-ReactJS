import { Box,Typography, makeStyles } from '@material-ui/core';
import bgimage from '../images/background_weather_app.jpg';
import Form from './form';

const useStyles = makeStyles({
    component :{
        height : '100vh',
        display :'flex',
        alignItems :'center',
        width : '60%',
        margin : '0 auto',
    },
    leftContainer :{
        backgroundImage : `url(${bgimage})`,
        height :'80%',
        width :'30%',
        backgroundSize :'cover',
        borderRadius :'20px 0 0 20px',
        
    },
    heading :{
        display :'flex',
        alignItems :'center',
        textAlign :'center',
        fontFamily: 'Prompt',
        padding: '10px',
        textShadow: '2px 2px 8px #06204d',
    
    },
    rightContainer :{
        background : 'linear-gradient( #7cb6cf ,#126082)',
        height :'80%',
        width :'70%',
        borderRadius :'0 20px 20px 0',
    }
})

const Weather = () =>{
    const classes = useStyles();
    return (
        <Box className={ classes.component }>
            <Box className={ classes.leftContainer }>
            <Typography className={ classes.heading } variant="h3" component="h2">
  Weather App using ReactJS
</Typography>
            </Box>
            <Box className={ classes.rightContainer }>
                <Form />
            </Box>
        </Box>
    );
}
 
export default Weather;