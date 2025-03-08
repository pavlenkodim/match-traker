import { Player as PlayerType } from "../interfaces/player";

const Player = ({ username, kills }: PlayerType) => {
  return (
    <div className="flex gap-[4px] justify-between items-center bg-dark-additional rounded-sm px-[12px] py-[8px] w-full max-w-[286px] max-h-[52px]">
      <div className="flex gap-[4px] items-center justify-between">
        <img
          src="/avatar-player.png"
          alt={username}
          className="max-w-[36px] max-h-[36px] mr-[8px]"
        />
        {username || "Player"}
      </div>
      <div>
        <span className="text-white-secondary opacity-40 mr-[8px]">
          Убийств:
        </span>
        {kills || 0}
      </div>
    </div>
  );
};

export default Player;
