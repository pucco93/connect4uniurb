import React from 'react';
import './App.css';
import Board from './Board';
import Slat from './Square/Slat';
import { NotWinMessage, WinnerMessage } from './Constants/Constants';
import Settings from './Settings/Settings';

function App() {
  const [boardState, updateBoard] = React.useState<(string)[][]>(new Array(7).fill(new Array(6).fill('')));
  const [playerTurn, updateTurn] = React.useState<string>('Red');
  const [gameSelected, setGameSelected] = React.useState<boolean>(false);
  const [winner, setWinner] = React.useState<string>('');
  const [winnerMessageStyle, setWinnerStyle] = React.useState<string>(NotWinMessage);
  const [useSkins, updateUseSkins] = React.useState<boolean>(false);
  const [rickSkin, setRickSkin] = React.useState<string>("RickSkinA");
  const [mortySkin, setMortySkin] = React.useState<string>("MortySkinA");
  // Red = Rick
  // Blue = Morty

  /*Contruct slats allocating column from board*/
  let slats = [...Array(boardState.length)].map((x, i) =>
    <Slat
      key={i}
      holes={boardState[i]}
      handleClick={() => _handleClick(i)}
      useSkins={useSkins}
      mortySkin={mortySkin}
      rickSkin={rickSkin}
    ></Slat>
  );

  const _selectedGame = () => {
    setGameSelected(true);
    updateBoard(new Array(7).fill(new Array(6).fill('')));
    setWinnerStyle(NotWinMessage);
    setWinner("");
  };

  const _makeMove = (slatID: number) => {
    /**
     * Questa è una sintassi di ES6 che cicla sul primo array boardState, composto da arrays, all'interno del map viene definita una funzione che verrà eseguita per ogni elemento di boardState, per ognuno verrà ricostruito un nuovo array identico a quello passato come argomento.
    */
    const boardCopy = boardState.map(arr => [...arr]);
    if (boardCopy[slatID].indexOf('') !== -1) {
      let newSlat = boardCopy[slatID].reverse();
      newSlat[newSlat.indexOf('')] = playerTurn;
      newSlat.reverse();
      updateTurn(playerTurn === 'Red' ? 'Blue' : 'Red');
      updateBoard(boardCopy);
    }
  };

  /*Only make moves if winner doesn't exist*/
  const _handleClick = (slatID: number) => {
    if (winner === '') {
      _makeMove(slatID);
    }
  };

  const _checkLine = (a: string, b: string, c: string, d: string) => {
    return ((a !== '') && (a === b) && (a === c) && (a === d));
  };

  const _checkWinner = (bs: (string)[][]) => {
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
        if (_checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3])) {
          return bs[c][r] + ' wins!';
        }
      }
    }

    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (_checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
          return bs[c][r] + ' wins!';
      }
    }

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        if (_checkLine(bs[c][r], bs[c + 1][r + 1], bs[c + 2][r + 2], bs[c + 3][r + 3]))
          return bs[c][r] + ' wins!';
      }
    }

    for (let r = 0; r < 4; r++) {
      for (let c = 3; c < 6; c++) {
        if (_checkLine(bs[c][r], bs[c - 1][r + 1], bs[c - 2][r + 2], bs[c - 3][r + 3]))
          return bs[c][r] + ' wins!';
      }
    }

    return "";
  };

  /* check the winner */
  React.useEffect(() => {
    let _winner = _checkWinner(boardState);
    if (_winner !== winner) {
      setWinnerStyle(WinnerMessage);
      let tempValue = _winner;
      if (useSkins && _winner.indexOf("Red") >= 0)
        tempValue = _winner.replace("Red", "Rick");
      else if (useSkins && _winner.indexOf("Blue") >= 0)
        tempValue = _winner.replace("Blue", "Morty");
      setWinner(tempValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerTurn]);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Forza 4</h2>
      </div>
      <Settings
        useSkins={useSkins}
        updateUseSkins={() => updateUseSkins(!useSkins)}
        updateRickSkin={(newSkin: string) => setRickSkin(newSkin)}
        updateMortySkin={(newSkin: string) => setMortySkin(newSkin)}
        rickSkin={rickSkin}
        mortySkin={mortySkin}
      />
      <div className="Game">
        <Board
          gameSelected={gameSelected}
          slats={slats}
          winner={winner}
          selectedGame={_selectedGame}
          winnerMessageStyle={winnerMessageStyle}
          useSkins={useSkins}
        />
      </div>
    </div>
  );
}

export default App;