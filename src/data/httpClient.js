const API = "https://api.themoviedb.org/3/"

export async function get(path) {
  const result = await fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU0MTBmODhkNGI4MDk3MDNhOGFhNGExNzQ2NTk2MyIsInN1YiI6IjY0ZDNjNTU4ZDEwMGI2MDEzOTViM2E1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHgqus2dNkxdPHcoEjzuFHygS7rvT1apHFEOqvghjVQ"
    }
  })
  return await result.json()
}