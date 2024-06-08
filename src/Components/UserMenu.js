import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const UserMenu = () => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItemButton component={Link} to="/signin">
        <ListItemText primary="Sign in" />
      </ListItemButton>
      <ListItemButton component={Link} to="/signup">
        <ListItemText primary="Sign up" />
      </ListItemButton>
    </List>
  );
};
