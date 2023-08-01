import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { CardTask } from "./CardTask";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";

export const ContainerCards = ({ toDo, setToDo }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Typography textAlign="left" p={2}>
          To do ⌛
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
                >
                  
                    
                 
                </CardTask>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};
