import Image from "next/image"
import Link from "next/link"




const Movie = ({ movie }) => {
  const { id, title, poster_path, release_date } = movie
  const imagePath = "https://image.tmdb.org/t/p/original"


  return (
    <div className='border border-black flex flex-col justify-between'>
      <Link href={`/${id}`}>
        <Image src={`${imagePath}${poster_path}`} alt='img' width={800} height={800} />
      </Link>
      <h2 className='font-bold'>{title}</h2>
      <span className='text-[.8rem] mt-2'>{release_date}</span>
    </div>
  )
}

export default Movie