import { coins } from "./data";

export const fetcher = (searchText: string) => {
  return Promise.resolve(
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );
};