import { Box, Typography } from "@mui/material";
import { CardTask } from "./CardTask";

export const ContainerCards = ({ toDo, setToDo }) => {
  return (
    <Box sx={{ width: "100%" }} display="flex" justifyContent="center" bgcolor="#E2E2E2" marginTop="20px" borderRadius="5px">
      <Box>
        <Typography textAlign="left" p={2}>
          To do List 💣
        </Typography>

        <Box>
          {toDo &&
            toDo.map((task) => {
              return (
                <CardTask
                  key={task.id}
                  text={task.text}
                  isComplete={task.isComplete}
                  toDo={toDo}
                  setToDo={setToDo}
                  value={task.id}
                  id={task.id}
                ></CardTask>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};
