import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
        <header>
        <img className="loguito"
        src={require(`./imagenes/KNDLogo.png`)}
        />
        </header>
        <h1>This is what the boys says after join to KND:</h1>
        <Testimonio
        link="https://knd.fandom.com/wiki/Numbuh_1" 
        numero="1"
        cargo="Leader"
        escuadron="1-5"
        testimonio="Lead the cavalry is the best i'm going to take a Chocolomo after the mission."  
        imagen="1"
        />
        <Testimonio 
        link="https://knd.fandom.com/wiki/Numbuh_2"
        numero="2"
        cargo="Gunner and demolitioner"
        escuadron="1-5"
        testimonio="I don't know i just point and shoot, i'm hungry, in the base we can eat a lot of candys and hot-dogs"
        imagen="2"
        />
        <Testimonio 
        link="https://knd.fandom.com/wiki/Numbuh_3"
        numero="3"
        cargo="Adorable cavalry operationer"
        escuadron="1-5"
        testimonio="Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!,Rainbow-Monkeys!"
        imagen="3"
        />
        <Testimonio 
        link="https://kndfanon.fandom.com/wiki/Numbuh_4"
        numero="4"
        cargo="Battle specialist"
        escuadron="1-5"
        testimonio="I hate the adorable things and the school, just let's rock with the next mission."
        imagen="4"
        />
        <Testimonio 
        link="https://knd.fandom.com/wiki/Numbuh_5"
        numero="5"
        cargo="Tactics and stealth commander"
        escuadron="1-5"
        testimonio="I enjoy the moments on the base and smash teenagers hahaha"
        imagen="5"
        />
        

      </div>      
    </div>
  );
}

export default App;
