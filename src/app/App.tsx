import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import AttentionIcon from "../components/icons/AttentionIcon";
import RefreshIcon from "../components/icons/RefreshIcon";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SkeletonCard from "../components/ui/SkeletonCard";
import MatchCard from "../components/MatchCard";
import cn from "../utils/cn";
import apiClient from "../utils/apiClient";

import { Match, MatchResponse } from "../interfaces/match";
import DropDown from "../components/ui/DropDown";

enum MatchStatus {
  All = "all",
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

function App() {
  const [matchStatus, setMatchStatus] = useState<MatchStatus>(MatchStatus.All);
  const [matches, setMatches] = useState<Match[]>([]);

  const {
    data: response,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["matches"],
    queryFn: () => apiClient.get<MatchResponse>("/fronttemp"),
  });

  useEffect(() => {
    if (response) {
      const filteredMatches = response.data.matches.filter((match) => {
        if (matchStatus === MatchStatus.All) return true;
        return match.status === matchStatus;
      });

      setMatches(filteredMatches);
    }
  }, [response, matchStatus]);

  return (
    <>
      <Container>
        <header className="flex justify-between items-center pt-[42px] pb-[20px]">
          <h1 className="text-3xl font-bold">Match Tracker</h1>
          <div className="flex gap-[12px] items-center">
            {error && (
              <div className="bg-dark-secondary w-full rounded-sm py-[17px] px-[24px] flex flex-nowrap whitespace-nowrap gap-[12px] items-center">
                <AttentionIcon />
                Ошибка: не удалось загрузить информацию
              </div>
            )}
            <DropDown
              options={[
                { value: MatchStatus.All, label: "Все статусы" },
                { value: MatchStatus.Ongoing, label: "Live" },
                { value: MatchStatus.Finished, label: "Finished" },
                { value: MatchStatus.Scheduled, label: "Match preparing" },
                {
                  value: MatchStatus.Scheduled,
                  label: "No option",
                  disabled: true,
                },
              ]}
              value={matchStatus}
              onChange={(value) => setMatchStatus(value as MatchStatus)}
            />
            <Button
              disabled={isLoading || isFetching}
              onClick={() => refetch()}
            >
              Обновить{" "}
              <RefreshIcon
                className={cn(
                  isLoading || isFetching ? "animate-spin-reverse" : ""
                )}
              />
            </Button>
          </div>
        </header>
        <main>
          <div className="flex gap-[12px] flex-col">
            {isLoading || isFetching ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : !error ? (
              matches.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))
            ) : null}
          </div>
        </main>
        <footer className="p-[32px]"></footer>
      </Container>
    </>
  );
}

export default App;
