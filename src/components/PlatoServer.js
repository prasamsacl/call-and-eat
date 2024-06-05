import axios from 'axios';

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

// Función para obtener todos los platos
export const getAllPlatos = async () => {
    const respuesta = await fetch(API_BASE_URL + "platos/");
    return respuesta.json();
};

// Función para obtener los detalles de un plato por su ID
export const getPlatoPorId = async (platoId) => {
    const respuesta = await fetch(API_BASE_URL + `platos/${platoId}/`);
    return respuesta.json();
};

export const sendDatosPago = async (datosPago) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/pago_final/', datosPago, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

document.addEventListener("DOMContentLoaded", async function() {
    const platoId = 1; // ID del plato que deseas obtener
    const plato = await getPlatoPorId(platoId);
    console.log(plato);
});