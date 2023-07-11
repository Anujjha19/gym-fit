export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '5d65e11437mshd10bacb6fbb8e3ep1d95f8jsnedf17a4563a3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    params: {
        id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
        'X-RapidAPI-Key': '5d65e11437mshd10bacb6fbb8e3ep1d95f8jsnedf17a4563a3',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }

};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};