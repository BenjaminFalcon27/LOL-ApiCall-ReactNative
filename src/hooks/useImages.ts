import { useQuery } from '@tanstack/react-query';

export function fetchImage(champion: string) {
  const url =  fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`);
  return url;
}
