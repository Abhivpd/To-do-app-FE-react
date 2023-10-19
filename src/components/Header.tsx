import { AppBar, Stack, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>To Do App</Typography>
        <Stack
          direction={"row"}
          spacing={"1rem"}
          padding={"1rem"}
          marginLeft={"auto"}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/Login"}>Login</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
