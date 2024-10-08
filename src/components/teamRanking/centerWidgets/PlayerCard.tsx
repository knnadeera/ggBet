import React from "react";
import { IPlayer } from "../../../utils/interfaces/teamRank.interface";
import { Image } from "react-bootstrap";
import "./playerCard.scss";

interface IProp {
  player: IPlayer;
}
const PlayerCard = ({ player }: IProp) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <Image
          src={player.image}
          alt="profile"
          width={100}
          className="tr-player-image"
        />
        <div className="tr-player-name">
          <Image src={player.flag} alt="flag" width={15} className="me-1" />
          {player.name}
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
