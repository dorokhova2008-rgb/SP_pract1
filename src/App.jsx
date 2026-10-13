import './App.css';
import ProductCard from './ProductCard';
import cat from './assets/cat.jpg';
import ya from './assets/ya.jpg';
import rich from './assets/rich.jpg';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Магазин элитных яхт</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard 
          name="Яхта 'Мечта'" 
          price={50000} 
          image={cat}
        />
        
        <ProductCard 
          name="Круизер 'Волна'" 
          price={120000} 
          image={ya}
        />
        
        <ProductCard 
          name="Лодка 'Успех'" 
          price={85000} 
          image={rich}
        />
      </div>
    </div>
  );
}

export default App;







// import { useState } from 'react';
// import './App.css'
// import Counter from "./Counter";

// function App(){
//   const [message, setMessage] = useState("Tap the button")
//   //сейчас солнцею это факт, который записан в ьуссадж
//   //СетМессадж - действиею скоро начнется дождь - установи это значение мессадж 
//   function handleClick(){
//     setMessage("Button was tapped");
//   }

//   function Welcome(props){
//     return <h1>Hi,{props.name}</h1>
//   }
//   return(
//     <div>
//       <h1>Hi, react</h1>
//       {/* fef */}
//       <h1>{message}</h1>
//       <button onClick={handleClick}>Click</button>
//       <Counter/>
      
//       <div>
//         <Welcome name ="Aleks"/>
//       </div>
//     </div>
//   );
// }
// export default App;