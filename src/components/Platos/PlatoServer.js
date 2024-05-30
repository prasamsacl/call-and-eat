const API_BASE_URL = "http://127.0.0.1:8000/";

// Función para obtener la carta semanal
export const getCartaSemanal = async () => {
    const respuesta = await fetch(API_BASE_URL + "menu-semanal/");
    return respuesta.json();
};

// Función para obtener los detalles de un plato en la cesta de la compra por su ID
export const getPlatoEnCestaPorId = async (platoId) => {
    const respuesta = await fetch(API_BASE_URL + `cesta/${platoId}/`);
    return respuesta.json();
};

// Función para obtener la información de pago final
export const getInfoPagoFinal = async () => {
    const respuesta = await fetch(API_BASE_URL + "pago_final/");
    return respuesta.json();
};

// Función para obtener la galería de imágenes
export const getGaleria = async () => {
    const respuesta = await fetch(API_BASE_URL + "galeria/");
    return respuesta.json();
};

// Función para obtener la ubicación
export const getInfoUbicacion = async () => {
    const respuesta = await fetch(API_BASE_URL + "ubicacion/");
    return respuesta.json();
};

// Función para obtener imágenes del carrusel
export const getImagenesCarrusel = async () => {
    const respuesta = await fetch(API_BASE_URL + "imagen-carrusel/");
    return respuesta.json();
};