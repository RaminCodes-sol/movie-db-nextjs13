


export const getMovie = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    return response.json()
}