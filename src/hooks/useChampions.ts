import { useQuery } from '@tanstack/react-query';

async function fetchData() {
  const result = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.1.1/data/fr_FR/champion.json`);
  const json = await result.json();
  return json;
}

export function useChampions() {
  const { data, isError, isLoading } = useQuery(['champions'], fetchData);

  return {
    data,
    isError,
    isLoading,
  };
}