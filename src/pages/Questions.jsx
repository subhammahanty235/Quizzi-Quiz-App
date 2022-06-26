import { Box, Button, CircularProgress, Typography } from "@mui/material";
import {decode} from 'html-entities'
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { handleScoreChange } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { borders } from "@mui/system";
const Questions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const getRandom = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score


    } = useSelector(state => state)

    // console.log(question_category)
    // console.log(question_difficulty)
    // setting different time limits for differnet difficulty level hard:6sec/Q , medium:5sec/Q and easy:3sec/Q;
    let initialtimer ;
    if(question_difficulty ==='hard'){
        initialtimer = amount_of_question*6;
    }
    else if(question_difficulty === 'medium'){
        initialtimer = amount_of_question*5;
    }
    else{
        initialtimer = amount_of_question*3;
    }

    
    const [timer , setTimer]  = useState(initialtimer);
    // const [lowtime , setlowTime] = useState(false)
    let t;
    useEffect(()=>{
        t = setInterval(()=>{
            setTimer(timer-1);
            
            if(timer <= 0){
                setTimer("Time Out!!!!")

                setTimeout(() => {
                    navigate('/score')
                    
                }, 1000);
            }
        },1000)

        return ()=>{clearInterval(t)}
    })
    let api_url = `https://opentdb.com/api.php?amount=${amount_of_question}`
    if (question_category) {
        api_url = api_url.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        api_url = api_url.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        api_url = api_url.concat(`&type=${question_type}`);
    }

    const { response, error, loading } = useFetch({ url: api_url })
    
    // console.log(response)
    const [Qindex, setQindex] = useState(0);
    const [Options, setOptions] = useState([])

    useEffect(() => {
        if (response?.results?.length) {
            const question = response.results[Qindex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandom(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, Qindex]);

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }
   
    const handleOptionClick = (e)=>{
        const question = response?.results[Qindex];
        if(e.target.textContent === question.correct_answer){
            dispatch(handleScoreChange(score+1));
            e.target.style.color = 'green'
            e.target.style.border = '1px solid green'
            setTimeout(() => {
                e.target.style.color = '#1976d2'  //value of primary color , can't able to use primary directly so used this value
                e.target.style.border = '1px solid rgba(25, 118, 210, 0.5)'
            }, 500)
            setTimer(timer+3);
          
        }
        else{

            e.target.style.color = 'red'
            e.target.style.border = '1px solid red'
            setTimeout(() => {
                e.target.style.color = '#1976d2'  //value of primary color , can't able to use primary directly so used this value
                e.target.style.border = '1px solid rgba(25, 118, 210, 0.5)'
            }, 500)
            setTimer(timer-2);
        }
        
        setTimeout(() => {
            if(Qindex+1 < response?.results?.length){
    
                setQindex(Qindex+1);
                
            }
            else{
                navigate('/score');
            }
            
        }, 1000);
    }
    // console.log(response)
    return (
        <Box>
            <Box mb={3}  >
                {/* <Typography color={`${lowtime == true?'danger':'success'}`}  variant='p' align='right' >Time Remaining : {timer}</Typography> */}
                <Button color={`${timer<=5?'error':'success'}`}>Time Remaining : {timer}</Button>
            </Box>
            <Typography variant="h4">Question : {Qindex + 1}</Typography>
            <Typography mt={5}>{decode(response?.results[Qindex].question)}</Typography>
            {
                Options.map((data, id) => {
                    return <Box key={id} mt={2}>
                        <Button onClick={handleOptionClick} color='primary' fullWidth={true} variant="outlined">{decode(data)}</Button>

                    </Box>
                })
            }
            
            <Box mt={5}>
                Score : {score}/{response?.results?.length}

            </Box>
        </Box>
    )
}
export default Questions;
