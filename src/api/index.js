const API = {
    url: 'https://api.nestoria.co.uk/api/',

    getListings(query) {
        fetch(`${API.url}${query}`)
            .then((response) => response.json())
            .catch((error) => error);
    },
};

 export default API;
