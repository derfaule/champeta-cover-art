'use client';  // This marks the file as a client-side component

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [albums, setAlbums] = useState<any[]>([]);

  const fetchAlbums = async () => {
    try {
      const token = process.env.NEXT_PUBLIC_DISCOGS_TOKEN; // Use the client-side exposed token

      // Check if the token is correctly loaded
      console.log('Using Discogs Token:', token);  // Verify if the token is correct

      const res = await fetch('https://api.discogs.com/database/search?style=Champeta&per_page=100', {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DISCOGS_TOKEN}`,
        },
      });

      if (!res.ok) {
        console.error('Failed to fetch data: ', res.status, res.statusText); // Log the error if response is not ok
        return;
      }

      const data = await res.json();  // Parse the response JSON
      console.log('Fetched data:', data);
      setAlbums(data.results || []); // Update the state with fetched album data
    } catch (error) {
      console.error('Error fetching data:', error); // Log any error during fetch
    }
  };

  useEffect(() => {
    fetchAlbums(); // Call fetchAlbums when the component mounts
  }, []);

  return (
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Champeta Albums</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {albums.map((album: any) => (
          <div
            key={album.id}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white"
          >
            <Image
              src={album.cover_image}
              alt={album.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{album.title}</h2>
              <p className="text-sm text-gray-500">{album.artist || album.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
