import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );
//   root.render(
//     element
//   );
// }
// setInterval(tick, 1000);




// export interface IMioComponenteProps {
//   value: string;
// }

// const MioComponente = (props: IMioComponenteProps) => {
//   const [person, updateName] = useState<string>(props.value);

//   useEffect(() => {
//     console.log(person);
//     debugger;
//     setTimeout(() => {
//       updateName(props.value);
//     }, 1500);
//   }, [person]);

//   return (
//     <div>
//       <div>Hello {person}</div>
//       <button onClick={() => updateName("Gianluca")}>Cambia nome</button>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <MioComponente value="Alessandro" />
// );