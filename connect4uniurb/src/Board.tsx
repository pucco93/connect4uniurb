import './App.css';
import { Button } from '@chakra-ui/react'

export interface IBoardProps {
    gameSelected: boolean;
    slats: any;
    winner: string;
    selectedGame: () => void;
    winnerMessageStyle: string;
    useSkins: boolean;
}

const Board = (props: IBoardProps) => {

    return (
        <div>
            {props.gameSelected &&
                <div className="Board">
                    {props.slats}
                </div>
            }
            <div className={props.winnerMessageStyle}>
                {props.winner}
            </div>
            {(!props.gameSelected || props.winner !== '') &&
                <div>
                    <Button 
                        onClick={() => props.selectedGame()} 
                        colorScheme='blue' 
                        className='newGameButton'
                    >
                        New game
                    </Button>
                </div>
            }
        </div>
    );
};

export default Board;