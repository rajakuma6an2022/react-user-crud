import ReactDOM from "react-dom/client"
import App from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"
import { Toaster } from "react-hot-toast"
import 'bootstrap/dist/css/bootstrap.min.css'

const qc=new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={qc}>
    <ThemeProvider theme={theme}>
      <App/>
      <Toaster/>
    </ThemeProvider>
  </QueryClientProvider>
)
