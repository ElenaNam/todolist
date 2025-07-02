import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./app/App"
import { Providers } from "./common/providers"

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>,
)
