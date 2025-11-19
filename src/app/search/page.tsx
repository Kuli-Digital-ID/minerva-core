"use client";

import Card from "@/components/Card";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const games = [
  {
    id: 1,
    name: "Mobile Legends",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "mobile",
    dev: "Moonton",
  },
  {
    id: 2,
    name: "Free Fire",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "mobile",
    dev: "Garena",
  },
  {
    id: 3,
    name: "PUBG Mobile",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "pc",
    dev: "PUBG Corp",
  },
  {
    id: 4,
    name: "Valorant",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "pc",
    dev: "Riot Games",
  },
  {
    id: 5,
    name: "Free Fire",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "pc",
    dev: "Garena",
  },
  {
    id: 6,
    name: "PUBG Mobile",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "mobile",
    dev: "PUBG Corp",
  },
  {
    id: 7,
    name: "Valorant",
    image:
      "https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75",
    type: "mobile",
    dev: "Riot Games",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    if (query.trim()) {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Hasil Pencarian untuk "{query}"
      </h1>
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-3 px-6 sm:grid-cols-5 xl:px-0 pb-8 xl:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              image={game.image}
              title={game.name}
              description={game.dev}
              onClick={() =>
                router.push(
                  `/game/${game.name.toLowerCase().replace(/\s+/g, "-")}`
                )
              }
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Tidak ada game yang ditemukan.
        </p>
      )}
    </div>
  );
}
