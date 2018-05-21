import React from "react";
import sudoku from "sudoku-umd";
import Board from "./Board";


class App extends React.Component {
    constructor(props) {
        super(props);

        const initialSudoku = sudoku.generate('easy');

        this.state = {
            initialSudoku,
            currentSudoku: initialSudoku,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();

        console.log(e.target.value)
        console.log(e.target.id)
        console.log(this.state.currentSudoku)

        let current = this.state.currentSudoku.split("")
        current[e.target.id] = e.target.value
        console.log(current)
        current = current.join("")
        console.log(current)

        this.setState({
           currentSudoku: current
        })

    }

    restart() {
        this.setState((prevState) => {
            return {
                initialSudoku: prevState.initialSudoku,
                currentSudoku: prevState.initialSudoku
            }
          });
    }

    restartOld() {
        this.setState({
                initialSudoku: this.state.initialSudoku,
                currentSudoku: this.state.initialSudoku
          });
    }

    newGame() {
        const newBoard = sudoku.generate('easy');
        this.setState({
            initialSudoku: newBoard,
            currentSudoku: newBoard
        })

        console.log(newBoard)
    }

    checkSudoku() {
        const finalSudoku = sudoku.solve(this.state.initialSudoku)
        if (finalSudoku === this.state.currentSudoku) {
            alert('Wygrałeś!');
        } else {
            alert('Niestety nie.');
        }
    }

    solveSudoku() {
        const finalSudoku = sudoku.solve(this.state.initialSudoku);
        this.setState({
            currentSudoku: finalSudoku
        })

        console.log(this.state.currentSudoku);
    }


    render() {
        return (
            <div>
                <Board 
                    sudoku={this.state.currentSudoku}
                    initial={this.state.initialSudoku}
                    onChange={this.handleChange}
                />
                <div className="buttons">
                    <button onClick = {this.checkSudoku.bind(this)}>Check</button>
                    <button onClick = {this.newGame.bind(this)}>New game</button>
                    <button onClick = {this.solveSudoku.bind(this)}>Solve</button>
                    <button onClick = {this.restart.bind(this)}>Restart</button>
                </div>
            </div>
        )
    }
}
  
export default App;