import { containerSx } from "@/common/styles"
import Container from "@mui/material/Container"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth={"lg"} className="text-align-center">
        <a href="https://github.com/elkirillova/todolist/tree/v1" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </Container>
    </footer>
  )
}
