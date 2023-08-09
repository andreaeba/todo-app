import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const Filters = ({ toDo, setToDo, isComplete, id }) => {

  const [filterSelected, setFilterSelected] = useState("");

  const handleSelectChange = (e) => {
    const filterSelected = e.target.value;

    setFilterSelected(filterSelected);

    const tasksArray = JSON.parse(localStorage.getItem("tasks"));

    if (filterSelected === "completed") {
      const tasksCompleted = tasksArray.filter(
        (task) => task.isComplete === true
      );

      console.log(tasksCompleted);
      setToDo(tasksCompleted);
      return toDo;
    }

    if (filterSelected === "incompleted") {
      const tasksIncompleted = tasksArray.filter(
        (task) => task.isComplete === false
      );
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
