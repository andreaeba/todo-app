import { Box, FormControl, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export const Filters = ({ toDo, setToDo, isComplete, id }) => {

    const [ filterSelected, setFilterSelected ] = useState("")

  const handleSelectChange = (e) => {

    const filterSelected = e.target.value

    setFilterSelected(filterSelected)

    console.log("hola", e.target.value)

    // console.log(e.target.value);

    const tasksArray = JSON.parse(localStorage.getItem("tasks"));

    if (filterSelected === "completed") {
      const tasksCompleted = tasksArray.filter((task) => task.isComplete === true);
      console.log(tasksCompleted);
      setToDo(tasksCompleted);
      return toDo;
    }

    if (filterSelected === "incompleted") {
      const tasksIncompleted = tasksArray.filter((task) => task.isComplete === false);
      setToDo(tasksIncompleted);
      return toDo;
    }

    if (filterSelected === "all") {
      setToDo(tasksArray);
      return toDo;
    }
  };

  return (
    <>
      <Box>
        {/* <FormControl >
          <FormLabel>Filter tasks</FormLabel>
          <Select placeholder="Select a filter" onChange={handleFilterTasks}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Select>
        </FormControl> */}

        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select a status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={filterSelected}
    label={filterSelected}
    onChange={handleSelectChange}
  >
    <MenuItem value="all">All</MenuItem>
    <MenuItem value="completed">Completed</MenuItem>
    <MenuItem value="incompleted">Incompleted</MenuItem>
  </Select>
</FormControl>
      </Box>
    </>
  );
};
