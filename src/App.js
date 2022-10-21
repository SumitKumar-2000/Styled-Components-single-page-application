import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styledComponents/Container.styled";
import GlobalStyles from "./components/styledComponents/Global";
import content from "./content";
import Card from "./components/Card";

function App() {

  const theme = {
    colors : {
      header : "#ebfbff",
      body : "#ffffff",
      footer : "#003333"
    },

    mobile: "768px",
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Header/>
        <Container>
          {content.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
