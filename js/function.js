// Función principal
function mostrarCV() {
    alert("¡Bienvenidos a mi curriculum vitae! Soy Fátima Páez");

    let motivo;

    // Bucle para solicitar el motivo hasta que se proporcione una respuesta válida
    while (true) {
        motivo = prompt("¿Cuál es el motivo de su visita?\n[1] Proyecto Independiente\n[2] Empresa");

        // Verificar si la respuesta es válida
        if (motivo === '1' || motivo.toLowerCase() === 'proyecto independiente' ||
            motivo === '2' || motivo.toLowerCase() === 'empresa') {
            break; // Salir del bucle si la respuesta es válida
        } else {
            alert("Opción no válida. Por favor, ingrese 1 para 'Proyecto Independiente' o 2 para 'Empresa'.");
        }
    }

    // Utilizar switch para manejar las opciones
    switch (motivo) {
        case '1':
        case 'proyecto independiente':
            alert("Ingrese su nombre y apellido y un correo electrónico para ser contactado.");

            let nombreApellido = prompt("Ingrese su nombre y apellido:");
            let correo;

            // Bucle para solicitar un correo válido
            while (true) {
                correo = prompt("Ingrese su correo electrónico:");

                // Verificar si el correo es válido
                if (correo.length >= 10 && correo.includes('@')) {
                    break; // Salir del bucle si el correo es válido
                } else {
                    alert("Correo no válido. Debe contener al menos 10 caracteres y '@'.");
                }
            }

            let tipoProyecto;

            // Bucle para solicitar un tipo de proyecto con al menos 10 caracteres
            while (true) {
                tipoProyecto = prompt("Ingrese el tipo de proyecto (ejemplo: app de ventas):");

                // Verificar si la respuesta al tipo de proyecto es válida
                if (tipoProyecto.length >= 10) {
                    break; // Salir del bucle si la respuesta es válida
                } else {
                    alert("Respuesta no válida. Debe contener al menos 10 caracteres.");
                }
            }

            //  alert adicional para aclarar la disponibilidad para entrevistas
            alert("Esta es mi disponibilidad para entrevistas.\nDiscord: Fatima Paez#2514\nZoom: Fatima-Paez2023\nDías disponibles: Lunes, miercoles y viernes\nHorarios disponibles: De 09:00 a.m a 20:00 p.m");

            // Mensaje de despedida
            alert("Gracias por su visita.");

            break;

        case '2':
        case 'empresa':
            alert("Ingrese el nombre de la empresa.");

            let nombreEmpresa = prompt("Nombre de la empresa:");

            //  alert para mostrar primero la pretensión monetaria y luego los detalles de la disponibilidad
            let pretensionMonetaria = "150000 pesos"; 
            alert(`Mi pretensión monetaria es: ${pretensionMonetaria}\n\nEsta es mi disponibilidad para entrevistas.\nDiscord: Fatima Paez#2514\nZoom: Fatima-Paez2023
            \nDías disponibles: Lunes, miercoles y viernes\nHorarios disponibles:  De 09:00 a.m a 20:00 p.m`);

            // Preguntar al usuario si está interesado en el perfil
            let interesado;

            // Bucle para solicitar una respuesta válida
            while (true) {
                interesado = prompt("¿Está interesado en mi perfil?\n[1] Sí\n[2] No");

                // Verificar si la respuesta es válida
                if (interesado === '1' || interesado.toLowerCase() === 'si' || interesado === '2' || interesado.toLowerCase() === 'no') {
                    break; // Salir del bucle si la respuesta es válida
                } else {
                    alert("Respuesta no válida. Por favor, ingrese 1 para 'Sí' o 2 para 'No'.");
                }
            }

            if (interesado === '1' || interesado.toLowerCase() === 'si') {
                let correoContacto;

                // Bucle para solicitar un correo válido
                while (true) {
                    correoContacto = prompt("Ingrese su correo electrónico para contacto:");

                    // Verificar si el correo es válido
                    if (correoContacto.length >= 10 && correoContacto.includes('@')) {
                        break; // Salir del bucle si el correo es válido
                    } else {
                        alert("Correo no válido. Debe contener al menos 10 caracteres y '@'.");
                    }
                }

                alert("Gracias por su visita. Me pondré en contacto con usted.");
            } else {
                alert("Gracias por su visita. La visita ha finalizado.");
            }

            break;

        default:
            alert("Opción no válida. La visita ha finalizado.");
            break;
    }
}

// Llamada a la función principal al cargar la página
mostrarCV();

    
