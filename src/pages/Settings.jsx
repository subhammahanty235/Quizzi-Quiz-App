import { Box ,Button, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFilledComp from "../components/TextFilledComp";
import useFetch from "../hooks/useFetch";
import Loading from '../images/loading.gif'
// import useFetch from "github.com/subhammahanty235/useFetch-hook-react/blob/master/useFetch.js";

const Settings =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.particpateName){

        navigate('/login')
      }
    })
    //categories 
    const {response , error , loading} =useFetch({url:"https://opentdb.com/api_category.php"})
    if(response){
        console.log("Responce"+response)
    }
    if(loading){
        return (
            <Box mt={10}>
              {/* <CircularProgress/> */}
              <img src={Loading} alt={<CircularProgress/>} />
              
            </Box>
          );
    }
    if (error) {
        return (
          <Typography variant="h6" mt={20} color="red">
            Some Went Wrong!
          </Typography>
        );
      }
    
    //   difficulty
    const difficulty = [
        {"id":"easy" , "name":"Easy"},
        {"id":"medium" , "name":"Medium"},
        {"id":"hard" , "name":"Hard"},
    ]
    const Type = [
        {"id":"multiple" , "name":"Multiple Choice"},
        {"id":"boolean" , "name":"True False"},
    ]
    const onsubmit = (e)=>{
        e.preventDefault();
        navigate("/questions")
    }
    
    return(
      <>
       <Typography varient="h1" fontWeight="bold">Choose Your Settings</Typography>
          <form onSubmit={onsubmit}>
            <SelectField options={response.trivia_categories} label="Category"/>
            <SelectField options={difficulty} label="Difficulty"/>
            <SelectField options={Type} label="Type"/>
            <TextFilledComp/>
            <Box mt={3} width="100%">
                <Button fullWidth={true} variant="outlined" type='submit'>
                    Get Started
                </Button>
            </Box>
          </form>
      </>
    )
  }
  export default Settings;
  