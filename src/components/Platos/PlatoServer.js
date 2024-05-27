const API_URL = "http://127.0.0.1:8000/platos/";
const API_URL2 = "http://127.0.0.1:8000/ingredient/";

export const platos = async () => {
    return await fetch(API_URL);
};
