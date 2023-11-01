import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Typography } from "@mui/material";

export default function SelectedListItem() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 260,
        height: "100vh",
      }}
      className="shadow  bg-gray-400"
    >
      <ListItemButton>
        <ListItemIcon>
          <ListItemText primary="New Event" />
          <AddBoxOutlinedIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider sx={{ margin: "15px" }} />
      <div>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className="mt-[10px] flex flex-col items-center "
        >
          <div className="mx=[40px]">
            <Typography variant="h4" component="h2">
              Events
            </Typography>
            <div className="my-[40px]  ">
              <Typography variant="h4" component="h2">
                87
              </Typography>
              <Typography
                variant="caption text"
                component="h2"
                className="text-gray-500"
              >
                Events
              </Typography>
            </div>
            <div className="my-[40px] ">
              <Typography variant="h4" component="h2">
                4
              </Typography>
              <Typography
                variant="caption text"
                component="h2"
                className="text-gray-500"
              >
                Full Events
              </Typography>
            </div>
            <div className="my-[40px] ">
              <Typography variant="h4" component="h2">
                40
              </Typography>
              <Typography
                variant="caption text"
                component="h2"
                className="text-gray-500"
              >
                Upcoming Events
              </Typography>
            </div>
            <div className="my-[40px] ">
              <Typography variant="h4" component="h2">
                6
              </Typography>
              <Typography
                variant="caption text"
                component="h2"
                className="text-gray-500"
              >
                Cancelled Events
              </Typography>
            </div>
          </div>
        </List>
      </div>
    </Box>
  );
}
