document.addEventListener('DOMContentLoaded', renderizarCalendario); 

let fechaActual = new Date();
let calendarioActual = fechaActual.getFullYear();

function obtenerPrimerDiaSemana(mes) {
    return new Date(calendarioActual, mes, 1).getDay() || 7;
}

function renderizarCalendario() { 
    const contenedorCalendario = document.querySelector('.contenedor-calendario'); 
    contenedorCalendario.innerHTML = '';

    const tituloCalendario = document.querySelector('.titulo'); 
    tituloCalendario.innerHTML = 'CALENDARIO ' + calendarioActual.toString();

    const nombresMeses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']; 
    
    for (let mes = 0; mes < 12; mes++) { 
        const tablaMes = document.createElement('table'); 
        const captionMes = document.createElement('caption'); 
        captionMes.textContent = nombresMeses[mes]; 
        tablaMes.appendChild(captionMes); 
        
        const thead = document.createElement('thead'); 
        const trDiasSemana = document.createElement('tr'); 
        const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D']; 
        diasSemana.forEach(dia => { 
            const thDia = document.createElement('th'); 
            thDia.textContent = dia; trDiasSemana.appendChild(thDia); 
        }); 
        thead.appendChild(trDiasSemana); 
        tablaMes.appendChild(thead); 

        const tbody = document.createElement('tbody'); 
        const diasEnMes = new Date(calendarioActual, mes + 1, 0).getDate(); 
        const primerDiaSemana = obtenerPrimerDiaSemana(mes);
        
        let contador = 1; 
        for (let i = 0; i < 6; i++) { 
            const trSemana = document.createElement('tr'); 
            for (let j = 0; j < 7; j++) { 
                const tdDia = document.createElement('td'); 
                if (i === 0 && j < primerDiaSemana - 1) { 
                    tdDia.textContent = ''; 
                } else if (contador <= diasEnMes) {
                    tdDia.textContent = contador;
                    contador++;
                } else {
                    break;
                }
                trSemana.appendChild(tdDia); 
            } 
            tbody.appendChild(trSemana); 
        } 
        tablaMes.appendChild(tbody); 
        contenedorCalendario.appendChild(tablaMes); 
    } 
}