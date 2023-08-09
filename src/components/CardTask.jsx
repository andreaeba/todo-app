import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const CardTask = ({ id, text, isComplete, setToDo, toDo }) => {
  // Function para eliminar card
  const deleteTask = () => {
    const isDelete = window.confirm(
      `¿Está seguro que desea eliminar la tarea?`
    );

    if (isDelete) {
      const newListTaks = toDo.filter((task) => task.id !== id);
      setToDo(newListTaks);

      localStorage.setItem("tasks", JSON.stringify([toDo]));
    }
  };

  // Función para hacer check a task
  const checkedTask = () => {
    let newArray = JSON.parse(localStorage.getItem("tasks")).map((task) => {
      if (task.id == id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setToDo(newArray);

    localStorage.setItem("tasks", JSON.stringify(newArray));
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
          <Typography
            className={
              toDo.filter((task) => task.id == id) &&
              `${isComplete ? "checked" : ""}`
            }
          >
            {text}
          </Typography>
        </CardContent>
        <Box>
          <CardActions>
            <IconButton
              variant="outlined"
              color="primary"
              size="small"
              value={id}
              onClick={checkedTask}
            >
              <CheckIcon />
            </IconButton>

            <IconButton
              aria-label="delete"
              color="primary"
              value={id}
              onClick={deleteTask}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
