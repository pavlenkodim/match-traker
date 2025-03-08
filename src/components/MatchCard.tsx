import { useState } from "react";

import ChevronUpIcon from "./icons/ChevronUpIcon";
import Player from "./Player";
import cn from "../utils/cn";
import Label from "./ui/Label";

import { MatchStatus } from "../types/match-status";
import { Match } from "../interfaces/match";

const labelText: Record<MatchStatus, string> = {
  Ongoing: "Live",
  Scheduled: "Match preparing",
  Finished: "Finished",
};

const labelVariant: Record<MatchStatus, "success" | "warning" | "danger"> = {
  Ongoing: "success",
  Scheduled: "warning",
  Finished: "danger",
};

const MatchCard = ({
  awayScore,
  awayTeam,
  homeScore,
  homeTeam,
  status,
}: Match) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-[12px] bg-dark-secondary px-[36px] py-[15px] rounded-sm transition-colors duration-200 ",
        !isOpen ? "hover:bg-dark-additional cursor-pointer" : ""
      )}
      onClick={handleOpen}
    >
      <div className="w-full flex justify-between items-center cursor-pointer">
        <div className="flex gap-2 items-center">
          <div>
            <img src={"/avatar.png"} alt={homeTeam.name} />
          </div>
          <div>
            <div>{homeTeam.name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px] items-center">
          <div>
            {homeScore}
            <span> : </span>
            {awayScore}
          </div>
          <Label variant={labelVariant[status]}>{labelText[status]}</Label>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <div>{awayTeam.name}</div>
          </div>
          <div>
            <img src={"/avatar.png"} alt={awayTeam.name} />
          </div>
          <div
            className={cn(!isOpen ? "rotate-180 scale-75" : "", "duration-200")}
          >
            <ChevronUpIcon />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-full flex gap-[32px] mt-[32px]">
          <div className="flex flex-col gap-[8px] flex-1/2">
            <div className="flex flex-row gap-[8px]">
              {homeTeam.players.map((player) => (
                <Player key={player.id} {...player} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-[12px] bg-dark-additional min-h-[52px] rounded-sm px-[12px] py-[8px]">
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Points:
                </span>
                {homeTeam.points}
              </div>
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Место:
                </span>
                {homeTeam.place}
              </div>
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Всего убийств:
                </span>
                {homeTeam.total_kills}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] flex-1/2">
            <div className="grid grid-cols-3 gap-[8px]">
              {awayTeam.players.map((player) => (
                <Player key={player.id} {...player} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-[12px] bg-dark-additional min-h-[52px] rounded-sm px-[12px] py-[8px]">
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Points:
                </span>
                {awayTeam.points}
              </div>
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Место:
                </span>
                {awayTeam.place}
              </div>
              <div className="flex items-center justify-center">
                <span className="text-white-secondary opacity-40 mr-[8px]">
                  Всего убийств:
                </span>
                {awayTeam.total_kills}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
