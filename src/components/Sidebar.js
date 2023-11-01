import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";

export default function SelectedListItem() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 260,
        backgroundColor: "white",
        height: "100vh",
      }}
      className="shadow"
    >
      <Typography
        sx={{ margin: "20px" }}
        variant="body2"
        component="h2"
        className="text-indigo-700 "
      >
        COMMUNITYMANAGER
      </Typography>

      <List
        component="nav"
        aria-label="main mailbox folders"
        className="mt-[10px]"
      >
        <ListItemButton>
          <ListItemIcon>
            <SpaceDashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LocalActivityIcon />
          </ListItemIcon>
          <ListItemText primary="Facilities" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Maintinance" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Sign-in" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </List>

      <div className="absolute  bottom-0">
        <ListItemButton className="bottom-0">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </div>
    </Box>
  );
}
