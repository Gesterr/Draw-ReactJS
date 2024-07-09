import { forwardRef, useEffect, useRef, useState } from 'react'
import './App.css'
import Square from './square/Square';
import Pallite from './Pallite/Pallite';

function App() {
  const [numberOfBlocks,setNumberOfBlocks] = useState();
  let colorSelected = 'red'
    function addNumberOfBlocks(){
        let input = document.getElementById('input').value;
        if(input > 500 || input < 0 ){
          alert('Нельзя больше 500 и меньше 0');
          document.getElementById('input').value = '';
        } else{
          setNumberOfBlocks(input);
        }
    }
   
    function check(id){
      let check = document.getElementById(id);
  
      
      if (check.style.backgroundColor !== colorSelected){
        check.style.backgroundColor = colorSelected;
      } else{
        check.style.backgroundColor = '#5e5d5d';
      }
    }

    function changeColor(color){
      colorSelected = color
    }

    return (
    <div className="playField">
      <div className='blocks-PlayField'>
      <Pallite onClick={(color) => changeColor(color)}></Pallite>
      {numberOfBlocks ? <>
      {/* <Squares color={colorSelected} numberOfBlocks={numberOfBlocks}></Squares> */}
      {
        Array.from({length:numberOfBlocks}, (_, index) => <Square key={index} onClick={(id) => check(id)}></Square>)               
      }


      </>
      :
        <>          
          <h1>Введите количество блоков</h1>
          <input id='input' type="number" />
          <button onClick={() => addNumberOfBlocks()}>Click</button>
        </>
      }
      </div>
    </div>        
  )
}

export default App
