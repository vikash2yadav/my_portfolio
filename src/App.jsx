import './app.scss'
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
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

    <section id="About">
    </section>


    <section id="Contact">
      portpolio3
    </section>

    {/* <Test />     <Test />    <Test />   */}
  </div>;
};

export default App;