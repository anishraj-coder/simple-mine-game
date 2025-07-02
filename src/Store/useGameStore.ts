import {create} from "zustand";
import {devtools,persist} from "zustand/middleware";

export type cellValue=0|1;
export interface GameState{
    grid: cellValue[],
    revealed: boolean[],
    score:number,
    highestScore:number,
    probability:number,
    gameOver:boolean,
}
export interface GameAction{
    revealCell: (idx:number)=>void,
    startGame: (prob:number)=>void,
}
const generateGrid=(prob:number):cellValue[]=>{
    const nDiamond= Math.floor(16*prob/100);
    let i=0;
    const matrix:cellValue[]= Array(16).fill(0);
    while(i<nDiamond){
        const idx=Math.floor(Math.random()*16);
        if(matrix[idx]===0){
            matrix[idx]=1;
            i++;
        }
    }
    return matrix;
}
export const useGameStore=create<GameAction&GameState>()(persist(devtools(
    (set) => ({
        grid: [],
        revealed: Array(16).fill(false),
        score: 0,
        probability: 50,
        highestScore:0,
        gameOver:true,
        revealCell: (idx:number)=>(set(state=>{
            const newReveal= [...state.revealed];
            newReveal[idx]=true;
            const isDiamond=state.grid[idx]===1;
            const newScore=isDiamond?state.score+10:state.score;
            return{
                revealed: newReveal,
                score: isDiamond?state.score+10:state.score,
                gameOver: !isDiamond,
                highestScore: newScore>=state.highestScore?newScore:state.highestScore,
            }
        })),
        startGame:(prob:number)=>set(()=>({
            score:0,
            grid: generateGrid(prob),
            gameOver:false,
            probability:prob,
            revealed:Array(16).fill(0),
        }))
    })
),{name:"Game Store"}))