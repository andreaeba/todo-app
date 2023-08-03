import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const InputNewTask = ( {toDo, setToDo} ) => {

  const [inputText, setInputText] = useState("");

  let task = {
    id: Math.floor(Math.random() * 10000),
    text: inputText,
    isComplete: false,
  };

  const handleInputChange = (e) => {

    const text = e.target.value;

    setInputText(text);

    
  };

  const handleSaveTask = (e) => {
    e.preventDefault();

    if(task.text.length >= 2) {

      setToDo([...toDo, task]);

      localStorage.setItem("tasks", JSON.stringify([...toDo, task]));
  
      setInputText("");

    } else {
      alert("Las tareas deben tener al menos 5 letras")
    }


  };
  
  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2} p={2}>
      <TextField
        required
        id="2"
        label="Add a new task"
        variant="standard"
        value={inputText}
        onChange={handleInputChange}
      />
      <Button
        variant="contained" 
        onClick={handleSaveTask}
        sx={{ width: "150px" }}>
          Add new task
        </Button>
    </Box>
  );
};
