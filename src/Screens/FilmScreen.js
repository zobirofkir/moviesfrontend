import React from 'react'
import HeroSection from '../Components/HeroSection'
import MovieCard from '../Components/MovieCard'

const FilmScreen = () => {
  const movies = [
    {
      title: 'Movie 1',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '8.5',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
    {
      title: 'Movie 2',
      image: 'https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg',
      rating: '7.9',
    },
  ];

  return (
    <div className='bg-black text-white'>
      <HeroSection/>
      <div className="p-2 md:p-20">
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-bold m-5">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmScreen