import { getMovie } from '@/lib/getMovie'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



/*------Generate-Metadata------*/
export const generateMetadata = async ({ params : { movieId }}) => {
  const movie = await getMovie(movieId)
  
  if(!movie.id) {
    return {
      title: 'not Found!'
    }
  }
  return {
    title: movie.title,
    description: `description about ${movie.title} movie`
  }
}


/*------Generate-Static-Params------*/
export const generateStaticParams = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const data = await response.json()

  return data.results.map(movie => ({
    movieId: movie.id.toString()
  }))
}



/*------Movie-Page------*/
const page = async ({ params: { movieId }}) => {
  const imagePath = "https://image.tmdb.org/t/p/original"
  const movie = await getMovie(movieId)


  return (
    <div className='w-full flex items-center flex-col gap-3 py-7'>
        <Link href="/" className='bg-[tomato] p-2 mb-4'>back to movies</Link>
        <h1>name: {movie.title}</h1>
        <span>release-date: {movie.release_date}</span>
        <span>time: {movie.runtime} minutes</span>
        <span>{movie.status}</span>
        <Image src={imagePath + movie.backdrop_path} alt='img' width={1000} height={1000} className='w-[600px] h-[300px]' />
        <p className='w-[400px] text-center'>{movie.overview}</p>
    </div>
  )
}

export default page