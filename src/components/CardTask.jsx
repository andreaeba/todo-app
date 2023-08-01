import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "@mui/icons-material";

export const CardTask = ({ id, text, isComplete, setToDo, toDo }) => {

  // Function para eliminar card
  const deleteTask = (e) => {
    // e.preventDefault();

    console.log(id)



    // const isDelete = window.confirm(
    //   `¿Está seguro que desea eliminar la tarea?`
    // );

    // if (isDelete) {

    //   // const newListTaks = toDo.filter((task) => task.id !== id);
    //   // setToDo(newListTaks);

    //   // localStorage.setItem("tasks", JSON.stringify([toDo]));

    //   console.log(id)
    // }
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: 50,
          margin: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
        <Box>
          <CardActions>
            <IconButton variant="outlined" color="primary" size="small" value={id}>
              <CheckIcon />
            </IconButton>
            <IconButton variant="outlined" color="primary" size="small" value={id}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              value={id}
              onClick={(e) => deleteTask(id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
