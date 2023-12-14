const options = {
    method: 'GET',
    headers: {
    }
};

export async function getFilmeId(titulo) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${titulo}&include_adult=false&language=pt-br&page=1`;
    const response = await fetch(url, options)
    const data = await response.json()
    return data.results[0].id
}

export async function getDadosFilme(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-br`

    const response = await fetch(url, options)
    const data = await response.json()

    const filme = {
        id: id,
        nome: data.title,
        poster: data.poster_path,
        genero: data.genres.map((genero) => genero.name).join(', '),
    }

    return filme
};
