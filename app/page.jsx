import React from 'react'
import Movie from '@/components/Movie'
import { getMovies } from '@/lib/getMovies'




export default async function Home() {
  const movies = await getMovies()
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">

      {/*-------Title-------*/}
      <h1 className='text-center text-purple-500 text-2xl mb-4 font-bold'>Popular Movies</h1>

      {/*-------Movies-------*/}
      <div className='w-full mx-auto grid grid-cols-fluid gap-5'>
        { movies.results.map(movie  => React.Children.toArray(<Movie movie={movie}/>)) }
      </div>

    </main>
  )
}
