import React from 'react';
import '../App.css';

export interface IHoleProps {
    value: string;
    useSkins: boolean;
    mortySkin: string;
    rickSkin: string;
}

const Hole = (props: IHoleProps) => {
    let hole = <div className={props.value} />;
    if (props.useSkins) {
        hole = <img src="" alt="" />;
        if (props.value === "Red")
            hole = <img src={require(`../images/Ricks/${props.rickSkin}.png`)} alt="Rick" className="Rick" />;
        else if (props.value === "Blue")
            hole = <img src={require(`../images/Mortys/${props.mortySkin}.png`)} alt="Morty" className="Morty" />;
    }

    /**
     * Bug found: transform => traslate img does not work from top, fix it
     */

    return (
        <div className="Hole">
            {hole}
        </div>
    );
};

export default Hole;