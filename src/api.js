import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID k_t7yauljN1GbDZOMA30PblYm-M-2XhmpGWnmhmymys'
        },
        params: {
            query: term
        },
    });

    return response.data.results;
};

export default searchImages;