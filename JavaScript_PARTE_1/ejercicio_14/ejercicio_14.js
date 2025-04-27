function obtenerSigno(zodiaco) {
    const [dia, mes, año] = zodiaco.split("-").map(Number);

    const signos = [
        { signo: "Aries", inicio: { dia: 21, mes: 3 }, fin: { dia: 19, mes: 4 } },
        { signo: "Tauro", inicio: { dia: 20, mes: 4 }, fin: { dia: 20, mes: 5 } },
        { signo: "Geminis", inicio: { dia: 21, mes: 5 }, fin: { dia: 20, mes: 6 } },
        { signo: "Cancer", inicio: { dia: 21, mes: 6 }, fin: { dia: 22, mes: 7 } },
        { signo: "Leo", inicio: { dia: 23, mes: 7 }, fin: { dia: 22, mes: 8 } },
        { signo: "Virgo", inicio: { dia: 23, mes: 8 }, fin: { dia: 22, mes: 9 } },
        { signo: "Libra", inicio: { dia: 23, mes: 9 }, fin: { dia: 22, mes: 10 } },
        { signo: "Escorpio", inicio: { dia: 23, mes: 10 }, fin: { dia: 21, mes: 11 } },
        { signo: "Sagitario", inicio: { dia: 22, mes: 11 }, fin: { dia: 21, mes: 12 } },
        { signo: "Capricornio", inicio: { dia: 22, mes: 12 }, fin: { dia: 19, mes: 1 } },
        { signo: "Acuario", inicio: { dia: 20, mes: 1 }, fin: { dia: 18, mes: 2 } },
        { signo: "Piscis", inicio: { dia: 19, mes: 2 }, fin: { dia: 20, mes: 3 } }
    ];

    for (let i = 0; i < signos.length; i++) {
        const signo = signos[i];

        if (
            (mes === signo.inicio.mes && dia >= signo.inicio.dia) ||
            (mes === signo.fin.mes && dia <= signo.fin.dia) ||
            (mes > signo.inicio.mes && mes < signo.fin.mes)
        ) {
            console.log(`Tu signo zodiacal es ${signo.signo}.`);
            return;
        }
    }
}

obtenerSigno("23-03-2002");
obtenerSigno("15-08-2002");
