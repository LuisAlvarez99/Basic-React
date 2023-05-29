import NavBar from './NavBar';
import Home from './Home';
import { useState } from 'react';
import '../styles/App.css';


function App() {
  const [active,setActive] = useState(
    {
      flag: 'active'
    },
    );
    console.log(active);
  return (
    <div>
      <NavBar myprop={active}/>
      <Home />
    </div>
     
  );
  };
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
