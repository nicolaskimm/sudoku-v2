import React from "react";
import sudoku from "sudoku-umd";
import Board from "./Board";
import './App.css';


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

        let current = this.state.currentSudoku.split("")
        current[e.target.id] = e.target.value;
        current = current.join("");

        this.setState({
           currentSudoku: current
        })

    }

    restart() {
        const initial = this.state.initialSudoku;
        this.setState({currentSudoku: initial })
    }

    newGame() {
        const newBoard = sudoku.generate('easy');
        this.setState({
            initialSudoku: newBoard,
            currentSudoku: newBoard
        })
    }

    checkSudoku() {
        const finalSudoku = sudoku.solve(this.state.initialSudoku);
        if (finalSudoku === this.state.currentSudoku) {
            alert('You won!');
        } else {
            alert('Sorry, try again.');
        }
    }

    solveSudoku() {
        const finalSudoku = sudoku.solve(this.state.initialSudoku);
        this.setState({
            currentSudoku: finalSudoku
        })
    }


    render() {
        return (
            <div className='sudoku'>
                <h1 className='sudoku_title'> Sudoku </h1>
                <div className='sudoku_board'>
                    <Board 
                        sudoku={this.state.currentSudoku}
                        initial={this.state.initialSudoku}
                        onChange={this.handleChange}
                    />
                    <div className="sudoku_buttons">
                        <button onClick = {this.checkSudoku.bind(this)}>Check</button>
                        <button onClick = {this.newGame.bind(this)}>New game</button>
                        <button onClick = {this.solveSudoku.bind(this)}>Solve</button>
                        <button onClick = {this.restart.bind(this)}>Restart</button>
                    </div>
                </div>
            </div>
            
        )
    }
}
  
export default App;