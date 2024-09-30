const title = "Zelev Perfumería";
const email = "Zelevperfumeria@gmail.com"; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573192310635"; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Zelev Perfumería es una empresa dedicada a la creación de aromas únicos y envolventes, elaborados con pasión y cuidado. Nuestra misión es ofrecer perfumes que evoquen emociones y recuerdos, permitiendo a nuestros clientes experimentar una conexión profunda con cada fragancia.",
        description2: "En Zelev Perfumería, creemos en el poder de los aromas para transformar el ambiente y realzar momentos especiales. Nos enorgullece ofrecer productos que combinan calidad y elegancia, y estamos comprometidos con la satisfacción total de nuestros clientes. Explora nuestro mundo de fragancias en nuestra página web."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Aromas con amor",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565695419964&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
