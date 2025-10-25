import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import * as pages from "./pages";
import * as components from "./components";

import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={<Theme />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<components.Layout />}>
          <Route path="/" element={<pages.HomePage />} />
          <Route path="/page1" element={<pages.Page1 />} />
          <Route path="/page2" element={<pages.Page2 />} />
          <Route path="/page3" element={<pages.Page3 />} />
          <Route path="/page4" element={<pages.Page4 />} />
          <Route path="/page5" element={<pages.Page5 />} />
          <Route path="/page6" element={<pages.Page6 />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
