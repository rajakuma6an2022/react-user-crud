import UsersPage from "./pages/UsersPage"
import { AppBar, Toolbar, Typography } from "@mui/material"

export default function App(){
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            User CRUD System
          </Typography>
        </Toolbar>
      </AppBar>
      <UsersPage/>
    </>
  )
}
