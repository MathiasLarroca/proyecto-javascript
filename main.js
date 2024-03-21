const RESPUESTAS = ["CARS", "MONSTERS INC", "BUSCANDO A NEMO", "LILO Y STITCH", "EL PADRINO", "GOODFELLAS", "ROBOCOP", "EL MAGO DE OZ"]

let respuesta

let respuestaAdivinada

let letraAdivinada

let seguirJugando = true

function adivinar() {

    for (let l = 6; l > 0; l--) {

        let letraCorrecta = true

        while (letraCorrecta) {

            letraAdivinada = prompt("Tienes " + l + " intentos\n\nPor favor ingrese una letra\n\n" + respuestaAdivinada.split(" ").map(palabra => palabra.split("").join(" ")).join("  ")).toUpperCase()

            if (respuestaAdivinada.includes(letraAdivinada)) {

                alert("Ya adivinaste esa letra. Elige otra.")

            } else if (respuesta.includes(letraAdivinada)) {

                for (let m = 0; m < respuesta.length; m++) {

                    if (respuesta[m] === letraAdivinada) {

                        respuestaAdivinada = respuestaAdivinada.substring(0, m) + letraAdivinada + respuestaAdivinada.substring(m + 1)

                    }

                }

                if (respuestaAdivinada == respuesta) {

                    alert("Felicidades! Adivinaste la respuesta!\n\n" + respuesta)

                    l = 0

                    break

                }

                alert("Adivinaste la letra " + letraAdivinada + "! Siga asi!")

            } else {

                if (l == 1) {

                    alert("Te quedaste sin intentos. La respuesta correcta era " + respuesta)

                    letraCorrecta = false

                } else {

                    alert("Esa letra era incorrecta! Intente otra.")

                    letraCorrecta = false

                }

            }

        }

    }

}

alert("Bienvenido al juego del Ahorcado!")

while (seguirJugando) {

    if (confirm("Quieres ingresar una respuesta personalizada para un amigue?") == true) {

        respuesta = prompt("Ingrese su respuesta.\nNo olvides de decirle a tu amigue que categoria es!").toUpperCase()

        respuestaAdivinada = respuesta.replace(/\S/g, "_").trim()

        adivinar()

    } else {

        if (RESPUESTAS.length == 0) {

            alert("Ya utilizaste todas las respuestas disponibles. Intente con una personalizada")

        } else {

            alert("Una pelicula aleatoria sera dada como respuesta.")

                //No se por que, pero si guardo "k" con const o let me dice que queda undefined. Aparte de esto, el algoritmo no esta funcionando

                for (let j = RESPUESTAS.length - 1; j > 0; j--) {
                    var k = Math.floor(Math.random() * (j + 1))
                    [RESPUESTAS[j], RESPUESTAS[k]] = [RESPUESTAS[k], RESPUESTAS[j]]
                }

                respuesta = RESPUESTAS.pop()

                respuestaAdivinada = respuesta.replace(/\S/g, "_").trim()

                adivinar()

        }

    }

    if (confirm("Desea seguir jugando?") == false) {

        alert("Saliendo del programa")
        seguirJugando = false
    }

}