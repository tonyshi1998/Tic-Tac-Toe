import classes from "./Grid.module.css";
import { useState } from "react";

const Grid = (props) => {
    const [cellOne, setCellOne] =  useState(" ")
    const [cellTwo, setCellTwo] =  useState(" ")
    const [cellThree, setCellThree] =  useState(" ")
    const [cellFour, setCellFour] =  useState(" ")
    const [cellFive, setCellFive] =  useState(" ")
    const [cellSix, setCellSix] =  useState(" ")
    const [cellSeven, setCellSeven] =  useState(" ")
    const [cellEight, setCellEight] =  useState(" ")
    const [cellNine, setCellNine] =  useState(" ")
    const [winner, SetWinner] = useState(" ")
    const [turn, setTurn] = useState("O")

    const advanceTurn = props =>{
        if (turn === "O"){
            setTurn("X")
            return
        }
        setTurn("O")
        //Checkwin()
    }

    const onOneHandler = event =>{
        event.preventDefault();
        setCellOne(turn)
        advanceTurn()
    }

  return (
    <div className={classes.board}>
      <div onClick={onOneHandler}> {cellOne} </div>
      <div> {cellTwo} </div>
      <div> {cellThree} </div>
      <div> {cellFour} </div>
      <div> {cellFive} </div>
      <div> {cellSix} </div>
      <div> {cellSeven} </div>
      <div> {cellEight} </div>
      <div> {cellNine} </div>
    </div>
  );
};

export default Grid;
