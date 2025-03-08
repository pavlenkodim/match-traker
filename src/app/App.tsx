import { useQuery } from "@tanstack/react-query";

import AttentionIcon from "../components/icons/AttentionIcon";
import RefreshIcon from "../components/icons/RefreshIcon";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SkeletonCard from "../components/ui/SkeletonCard";
import MatchCard from "../components/MatchCard";
import cn from "../utils/cn";
import apiClient from "../utils/apiClient";

import { MatchResponse } from "../interfaces/match";

function App() {
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
  return (
    <>
      <Container>
        <header className="flex justify-between items-center pt-[42px] pb-[20px]">
          <h1 className="text-3xl font-bold">Match Tracker</h1>
          <div className="flex gap-[12px] items-center">
            {error && (
              <div className="bg-dark-secondary rounded-sm py-[17px] px-[24px] flex gap-[12px] items-center">
                <AttentionIcon />
                Ошибка: не удалось загрузить информацию
              </div>
            )}
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
            {isLoading ? (
              <SkeletonCard />
            ) : (
              response?.data?.matches.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))
            )}
          </div>
        </main>
        <footer className="p-[32px]"></footer>
      </Container>
    </>
  );
}

export default App;
