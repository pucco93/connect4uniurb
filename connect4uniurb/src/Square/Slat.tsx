import Hole from './Hole';
import '../App.css';

export interface ISlatProps {
  handleClick: () => void;
  holes: string[];
  useSkins: boolean;
  mortySkin: string;
  rickSkin: string;
}

const Slat = (props: ISlatProps) => {
  return(
    <div className="Slat" onClick={props.handleClick}>
      {
        props.holes.map((x, index) =>
          <Hole 
            key={index} 
            value={props.holes[index]}
            useSkins={props.useSkins}
            mortySkin={props.mortySkin}
            rickSkin={props.rickSkin}
          />
        )
      }
    </div>
  );
};

export default Slat;