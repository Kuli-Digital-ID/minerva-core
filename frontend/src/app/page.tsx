'use client';

import Slider from '@/components/Slider';
import Card from '@/components/Card';

const games = [
  {
    id: 1,
    name: 'Mobile Legends',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'mobile',
    dev: 'Moonton',
  },
  {
    id: 2,
    name: 'Free Fire',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'mobile',
    dev: 'Garena',
  },
  {
    id: 3,
    name: 'PUBG Mobile',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'pc',
    dev: 'PUBG Corp',
  },
  {
    id: 4,
    name: 'Valorant',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'pc',
    dev: 'Riot Games',
  },
  {
    id: 5,
    name: 'Free Fire',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'pc',
    dev: 'Garena',
  },
  {
    id: 6,
    name: 'PUBG Mobile',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'mobile',
    dev: 'PUBG Corp',
  },
  {
    id: 7,
    name: 'Valorant',
    image:
      'https://cdn.xcashshop.com/media/file-1745899338-1qhe521f-mlbb-id.webp?w=256&q=75',
    type: 'mobile',
    dev: 'Riot Games',
  },
];

const categories = [
  {
    id: 1,
    title: 'Mobile Games',
    code: 'mobile',
  },
  {
    id: 2,
    title: 'PC Games',
    code: 'pc',
  },
  {
    id: 3,
    title: 'Joki',
    code: 'joki',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Slider */}
      <Slider />

      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="All Games"
          defaultChecked
        />
        <div className="tab-content py-10">
          {/* Semua Game */}
          <div className="grid grid-cols-3 px-6 sm:grid-cols-5 xl:px-0 pb-8 xl:grid-cols-6 gap-4">
            {games.map((game) => (
              <Card
                key={game.id}
                image={game.image}
                title={game.name}
                description={game.dev}
              />
            ))}
          </div>
        </div>

        {categories.map((category) => (
          <>
            <input
              key={category.id}
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label={category.title}
            />
            <div className="tab-content py-10">
              {/* Semua Game */}
              <div className="grid grid-cols-3 px-6 sm:grid-cols-5 xl:px-0 pb-8 xl:grid-cols-6 gap-4">
                {games
                  .filter((game) => game.type === category.code)
                  .map((game) => (
                    <Card
                      key={game.id}
                      image={game.image}
                      title={game.name}
                      description={game.dev}
                    />
                  ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
