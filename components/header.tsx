import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Link href="/">
              <a>
                <Button color="inherit">logo</Button>{" "}
              </a>
            </Link>
          </div>
          <div>
            <Link href="/posts">
              <a>
                <Button color="inherit"> Les annonces </Button>{" "}
              </a>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
