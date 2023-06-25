

export const getMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    return response.json()
} 