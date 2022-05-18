import classes from "./Grid.module.css";
import { Fragment, useEffect, useState } from "react";


const Grid = (props) => {
  const [grid, setGrid] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  const [winner, setWinner] = useState();
  const [turn, setTurn] = useState("O");

  useEffect(() => {
    if (
      (grid[0] != " " && grid[0] === grid[1] && grid[1] === grid[2]) ||
      (grid[0] != " " && grid[0] === grid[3] && grid[3] === grid[6]) ||
      (grid[0] != " " && grid[0] === grid[4] && grid[4] === grid[8])
    ) {
      setWinner(grid[0]);
    } else if (grid[1] != " " && grid[1] === grid[4] && grid[4] === grid[7]) {
      setWinner(grid[1]);
    } else if (
      (grid[2] != " " && grid[2] === grid[5] && grid[5] === grid[8]) ||
      (grid[2] != " " && grid[2] === grid[4] && grid[4] === grid[6])
    ) {
      setWinner(grid[2]);
    } else if (grid[3] != " " && grid[3] === grid[4] && grid[4] === grid[5]) {
      setWinner(grid[3]);
    } else if (grid[6] != " " && grid[6] === grid[7] && grid[7] === grid[8]) {
      setWinner(grid[6]);
    }
  }, [grid]);

  const advanceTurn = (props) => {
    if (turn === "O") {
      setTurn("X");
      return;
    }
    setTurn("O");
  };

  const clickHandler = (event, cellNum) => {
    if (grid[cellNum] != " ") {
      return;
    }
    setGrid((prevGrid) => {
      let newGrid = [...prevGrid];
      newGrid[cellNum] = turn;
      return newGrid;
    });
    console.log(grid);
    advanceTurn();
  };
  return (
    <Fragment>
      {winner && <h1>{winner} has won!</h1>}
      <div className={classes.board}>
        <div onClick={(event) => clickHandler(event, 0)}> {grid[0]} </div>
        <div onClick={(event) => clickHandler(event, 1)}> {grid[1]} </div>
        <div onClick={(event) => clickHandler(event, 2)}> {grid[2]} </div>
        <div onClick={(event) => clickHandler(event, 3)}> {grid[3]} </div>
        <div onClick={(event) => clickHandler(event, 4)}> {grid[4]} </div>
        <div onClick={(event) => clickHandler(event, 5)}> {grid[5]} </div>
        <div onClick={(event) => clickHandler(event, 6)}> {grid[6]} </div>
        <div onClick={(event) => clickHandler(event, 7)}> {grid[7]} </div>
        <div onClick={(event) => clickHandler(event, 8)}> {grid[8]} </div>
      </div>
    </Fragment>
  );
};

export default Grid;
