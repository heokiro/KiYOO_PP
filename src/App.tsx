import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header, Footer } from './components/layout';
import { Hero, About, Projects, Contact } from './components/sections';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
