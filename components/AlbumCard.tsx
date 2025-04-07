// components/AlbumCard.tsx
import Image from 'next/image'

type AlbumProps = {
  title: string
  coverImage: string
  year: string
  artist: string
}

export default function AlbumCard({ title, coverImage, year, artist }: AlbumProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition transform">
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={300}
        className="object-cover w-full h-60"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{artist}</p>
        <p className="text-xs text-gray-500">{year}</p>
      </div>
    </div>
  )
}
