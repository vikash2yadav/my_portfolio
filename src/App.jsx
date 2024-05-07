import './app.scss'
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Main />
    </section>

    <section id="Service">
      <Services />
    </section>

    <section id="Portfolio">
      <Portfolio />
    </section>


    <section id="Contact">
    </section>

    {/* <Test />     <Test />    <Test />   */}
  </div>;
};

export default App;