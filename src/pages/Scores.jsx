import { Box, Button, Typography } from "@mui/material";
// import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


const Scores = () => {
    const { score ,amount_of_question} = useSelector((state) => state)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleBackTohome = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(10));
        navigate('/');
    }
    return (
        <>
            {/* <Box mt={30}>
            <Typography variant='h4' fontWeight='bold' mb={3}> Total Score : {score}</Typography>
            <Button variant='outlined' onClick={handleBackTohome}>Back To Home</Button>
          </Box> */}
            {/*  Prototype:
          -----------------------------------------------------------------------------------
          |                                 ScoreCard                                       |
          -----------------------------------------------------------------------------------
          |Total Number of Questions:                                                       |
          |Category:                                                                        |
          |Difficulty Level:                                                                |
          |----------------------------------------------------------------------------------
          |Correct Answers:                                                                 |
          |total Scored:                                                                    |
          |Emoji for You:                                                                   |
          |                                 Best Of luck                                    |
          -----------------------------------------------------------------------------------
          */}

            <Box mt={30}>
                <Typography variant="h4" fontWeight='bold' mb={3}>Total Number Of Questions: {amount_of_question}</Typography>
                <Typography variant='h4' fontWeight='bold' mb={3}> Total Score : {score}</Typography>
                <Button variant='outlined' onClick={handleBackTohome}>Back To Home</Button>
            </Box>
        </>
    )
}
export default Scores;
