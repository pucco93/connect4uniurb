import React from 'react';
import './Settings.css';
import { Select, Switch } from '@chakra-ui/react';

export interface ISettingsProps {
  useSkins: boolean;
  updateUseSkins: () => void;
  updateRickSkin: (newSkin: string) => void;
  updateMortySkin: (newSkin: string) => void;
  rickSkin: string;
  mortySkin: string;
}

const Settings = (props: ISettingsProps) => {

  const _updateMortySkin = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value)
      props.updateMortySkin(event.target.value);
  };

  const _updateRickSkin = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value)
      props.updateRickSkin(event.target.value);
  };

  return (
    <div className="settings">
      <div className="useSkinsContainer">
        <div className="useSkinsLabel">
          Do you want to use skins?
        </div>
        <Switch 
          isChecked={props.useSkins} 
          onChange={props.updateUseSkins} 
          size='lg'
        />
      </div>
      {
        props.useSkins ?
        <div className="skinsContainer">
          <div className="mortyContainer">
            <Select placeholder='Select a Morty' onChange={_updateMortySkin}>
              <option value='MortySkinA'>Evil Morty</option>
              <option value='MortySkinB'>Cop Morty</option>
              <option value='MortySkinC'>Lizard Morty</option>
            </Select>
            <img src={require(`../images/Mortys/${props.mortySkin}.png`)} alt={props.mortySkin} className="selectedImage" />
          </div>
          <div className="rickContainer">
            <Select placeholder='Select a Rick' onChange={_updateRickSkin}>
              <option value='RickSkinA'>Stupid Rick</option>
              <option value='RickSkinB'>Rick C-137</option>
              <option value='RickSkinC'>VERY Evil Rick E-22912</option>
            </Select>
            <img src={require(`../images/Ricks/${props.rickSkin}.png`)} alt={props.rickSkin} className="selectedImage" />
          </div>
        </div> 
        : ""
      }
    </div>
  );
};

export default Settings;

export const MortySkinA: string = "MortySkinA";
export const MortySkinB: string = "MortySkinB";
export const MortySkinC: string = "MortySkinC";

export const RickSkinA: string = "RickSkinA";
export const RickSkinB: string = "RickSkinB";
export const RickSkinC: string = "RickSkinC";