import './App.css';
import Video from './components/Video'
import react,{useState} from 'react';
import Modal from './components/Modal'
import { RiCloseLine } from "react-icons/ri";


function App() {

  const [isOpen,setIsOpen] = useState(false);
  const[play,setPlay] = useState(true);
  let prev = isOpen;

  return (

    <div className="App">

      <Video/>

      <Modal setIsOpen={true}/>
        
    </div>
  );
}

export default App;
