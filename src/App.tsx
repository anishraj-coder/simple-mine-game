import Header from "./Components/Header.tsx";
import GridWrapper from "./Components/GridWrapper.tsx";
import {useNavigate} from "react-router-dom";
import {useGameStore} from "./Store/useGameStore.ts";

const App = () => {
    const navigate=useNavigate();
    const startNew=useGameStore(state=>state.startGame)
    const handleNewGame=()=>{
        startNew(0);
        navigate('/');
    }
    return (
        <div className={`bg-Background w-ful h-screen flex flex-col items-center justify-between relative `}>
            <Header/>
            <div className={`w-full h-[40vh]   flex justify-center items-center`}>
                 <GridWrapper/>
            </div>
            <button onClick={handleNewGame} className={`bg-accent text-ptext font-medium Gilroy text-xl px-4 py-2 rounded-lg mb-50 lg:mb-25 cursor-pointer select-none active:bg-divider border-4 border-divider`}> Start new Game</button>
        </div>
    );
};

export default App;