import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";

export const App = () => {
  return (
    <div>
      <Header />
      <NowPlaying />
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;
