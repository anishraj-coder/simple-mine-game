import {type ChangeEvent, type FormEvent, useState} from "react";
import {useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header.tsx";
import {motion} from "motion/react";

const containerVarient={
    hidden:{opacity:1},
    visible:{
        opacity: 1,
        transition:{
            staggerChildren:0.2,
        }
    }
};
const itemVarient={
    hidden:{opacity:0,translateY:20},
    visible: {
        opacity: 1,
        translateY: 0,

    },
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
    },

}
const GameStart=()=>{
    const {startGame}=useGameStore(useShallow(state=>({startGame:state.startGame})));
    const [prob, setProb] = useState<number|undefined>(80);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('')
    const navigate=useNavigate();
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        startGame(Number(prob!));
        navigate('/game');
    }
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const val=Number(e.target.value);
        setProb(val);
        if(val>=0&&val<=100){
            setIsError(false);
            setErrorMsg('');
        }else{
            setIsError(true);
            setErrorMsg('Enter value between 0 and 100');
        }

    }
    return(
        <div className={`w-full h-screen bg-Background `}>
            <Header/>
            <motion.form initial={'hidden'} animate={'visible'} variants={containerVarient} className={`flex flex-col  items-center justify-center gap-4 h-[80vh]`} onSubmit={(e=>handleSubmit(e))}>
                <motion.label variants={itemVarient!} htmlFor="input" className={`text-ptext font-medium Gilroy text-center text-xl italic`}>Enter the Probability</motion.label>
                <motion.input variants={itemVarient} value={prob}  onChange={handleChange} type="number" className={`Gilroy text-2xl placeholder:text-sm text-center text-ptext px-4 p-2 w-1/3 rounded-xl  font-medium bg-divider/80 focus:outline-none focus:ring-2 focus:ring-accent  outline-none lg:w-2/15 no-spinners relative`} placeholder={`Enter probability`}/>
                <motion.div className={`h-4`}>
                    {isError && errorMsg && (
                        <motion.p
                            variants={itemVarient}
                            className="text-red-500 text-sm font-medium italic whitespace-nowrap"
                        >
                            {errorMsg}
                        </motion.p>
                    )}
                </motion.div>

                <motion.button variants={itemVarient} disabled={prob === undefined||isError} className={`text-ptext Gilroy px-4 py-2 rounded-lg bg-accent outline-2 outline-accent active:outline-divider disabled:text-stext`}>Submit</motion.button>
            </motion.form>
        </div>
    );
}
export default GameStart