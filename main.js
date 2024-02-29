const RESPUESTA = "C A R S"

// function equivocar() {

//     if (i == 1) {

//         alert("Te quedaste sin intentos! Que lastima.")

//     } else {

//         alert("Te equivocaste te quedan " + (i - 1) + " intentos")

//     }

// }


// function acertar() {

//     alert("Adivinaste la pelicula!: " + RESPUESTA)

//     i = 0

// }


// function repetir() {

//     alert("Ya elegiste esa letra! Elige otra.")

//     i = i + 1

// }

for (let i = 4; i > 0; i--) {

    let letra = prompt("Adivina una letra de la pelicula! Puedes equivocarte 4 veces: _ _ _ _").toLowerCase()

    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

        if (i == 1) {

            alert("Te quedaste sin intentos! Que lastima.")

        } else {

            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

        }

    } else if (letra == "c") {

        for (i = i; i > 0; i--) {

            letra = prompt("Adivinaste la C! Adivina otra letra: C _ _ _").toLowerCase()

            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                if (i == 1) {

                    alert("Te quedaste sin intentos! Que lastima.")

                } else {

                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                }

            } else if (letra == "a") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la A! Adivina otra letra: C A _ _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la R! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }
            } else if (letra == "r") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la R! Adivina otra letra: C _ R _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "s") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la S! Adivina otra letra: C _ _ S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la R! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else {

                alert("Ya elegiste esa letra! Elige otra.")

                i = i + 1

            }
        }

    } else if (letra == "a") {

        for (i = i; i > 0; i--) {

            letra = prompt("Adivinaste la A! Adivina otra letra: _ A _ _").toLowerCase()

            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                if (i == 1) {

                    alert("Te quedaste sin intentos! Que lastima.")

                } else {

                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                }

            } else if (letra == "r") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la R! Adivina otra letra: _ A R _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "s") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la S! Adivina otra letra: _ A _ S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la R! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "c") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la C! Adivina otra letra: C A _ _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la R! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else {

                alert("Ya elegiste esa letra! Elige otra.")

                i = i + 1

            }

        }

    } else if (letra == "r") {

        for (i = i; i > 0; i--) {

            letra = prompt("Adivinaste la R! Adivina otra letra: _ _ R _").toLowerCase()

            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                if (i == 1) {

                    alert("Te quedaste sin intentos! Que lastima.")

                } else {

                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                }

            } else if (letra == "s") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la S! Adivina otra letra: _ _ R S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "a") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la A! Adivina otra letra: _ A R _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "c") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la C! Adivina otra letra: C _ R _").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: C A R _").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "s") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "s") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la S! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else {

                alert("Ya elegiste esa letra! Elige otra.")

                i = i + 1

            }

        }

    } else {

        for (i = i; i > 0; i--) {

            letra = prompt("Adivinaste la S! Adivina otra letra: _ _ _ S").toLowerCase()

            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                if (i == 1) {

                    alert("Te quedaste sin intentos! Que lastima.")

                } else {

                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                }

            } else if (letra == "c") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la C! Adivina otra letra: C _ _ S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la R! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "a") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la A! Adivina otra letra: _ A _ S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C A _ S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "r") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "r") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else if (letra == "r") {

                for (i = i; i > 0; i--) {

                    letra = prompt("Adivinaste la R! Adivina otra letra: _ _ R S").toLowerCase()

                    if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                        if (i == 1) {

                            alert("Te quedaste sin intentos! Que lastima.")

                        } else {

                            alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                        }

                    } else if (letra == "c") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la C! Adivina otra letra: C _ R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "a") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else if (letra == "a") {

                        for (i = i; i > 0; i--) {

                            letra = prompt("Adivinaste la A! Adivina otra letra: _ A R S").toLowerCase()

                            if (letra != "c" && letra != "a" && letra != "r" && letra != "s") {

                                if (i == 1) {

                                    alert("Te quedaste sin intentos! Que lastima.")

                                } else {

                                    alert("Te equivocaste te quedan " + (i - 1) + " intentos")

                                }

                            } else if (letra == "c") {

                                alert("Adivinaste la pelicula!: " + RESPUESTA)

                                i = 0

                            } else {

                                alert("Ya elegiste esa letra! Elige otra.")

                                i = i + 1

                            }

                        }

                    } else {

                        alert("Ya elegiste esa letra! Elige otra.")

                        i = i + 1

                    }

                }

            } else {

                alert("Ya elegiste esa letra! Elige otra.")

                i = i + 1

            }

        }

    }

}