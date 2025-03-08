import { MatchStatus } from "../types/match-status";
import { Team } from "./team";

export interface MatchResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}

export interface Match {
  time: Date;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}
