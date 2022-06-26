import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Box } from "@mui/system";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    handleCategoryChange,
    handleDifficultyChange,
    handleTypeChange,
  } from "../redux/actions";

  

function SelectField({ label, options }) {
    const dispatch = useDispatch();

    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case "Category":
              dispatch(handleCategoryChange(e.target.value));
              break;
            case "Difficulty":
              dispatch(handleDifficultyChange(e.target.value));
              break;
            case "Type":
              dispatch(handleTypeChange(e.target.value));
              break;
            default:
              return;
          }
    }
    // useEffect(() => {
    //     // console.log(options.length)
    //     options?.map((o) => {
    //         console.log(o)
    //     })
    // }, [])

    return (
        <Box mt={3} width='100%' >
            <FormControl fullWidth={true}>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {
                        options?.map(({ id, name }) => {
                          return  <MenuItem value={id} key={id}>
                                {name}
                            </MenuItem>
                        })
                    }
                    {/* <MenuItem>Option1</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField