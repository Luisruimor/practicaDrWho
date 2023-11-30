# Practica 3 Backend - Los viajes de la TARDIS
1. [Enunciado](#enunciado)
2. [Docu API](#documentación)
3. [Archivo Postman](practica4drwho.postman_collection.json)

## Enunciado
Doctor Who cumple 60 años y los episodios especiales están a la vuelta de esquina, así que vamos a hacer un API REST para ayudar a la TARDIS (Time And Relative Dimension In Space) organizarse ante la nueva reiterada llegada de David Tennant.

La Tardis guarda los siguientes datos en sus memorias Gallifreyanas según lo que ha visitado en sus diferentes viajes.
- Dimensiones  --> Con los planetas visitados en la misma
- Planetas --> Con las personas relevantes a las experiencias en el mismo
- Personas
- Actual camuflaje de la TARDIS
- Número de regeneración del Time Lord que la use
- Año en el que se encuentra actualmente
  Las dimensiones, planetas y personas se deberán guardar en diferentes colecciones de mongo atlas y ser relacionadas por id's entre si llegando a una sola final en la que se guarde cada TARDIS.
  El api deberá de poseer llamadas para ver, crear y modificar TARDISs además de todos los elementos de su interior, cada llamada tendrá que ser del método requerido por su funcionalidad.

----------------------------------------------------------------------------------------------------------------------

En el repositorio el readme deberá funcionar como documentación del API indicando todos los endpoints y parámetros necesarios para su uso.

El uso de mongo y la publicación en deno deploy es obligatoria.

-----------------------------------------------------------------------------------------------------------------------

Un archivo no ejecutable mediante deno por algún tipo de error no será corregido y por tanto evaluado automáticamente con un 0.
El trabajo será exclusivamente individual sin permitir hacer parejas o entregas conjuntas de ningún tipo.
La entrega se hará en una release de GitHub en un repositorio antes del día 15 de Noviembre a las 11:00 AM, un trabajo que no cumpla esta cláusulas de entrega será evaluado automáticamente con un 0.

## Documentación
Esta API está diseñada para almacenar y gestionar las memorias Gallifreyanas de tu TARDIS. Aquí puedes registrar cada memoria con su nombre, localización, y más detalles. Con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar), puedes gestionar cualquier memoria almacenada en tu TARDIS. ¡Empieza a organizar tus aventuras a través del tiempo y el espacio ahora!

BASE URL:`https://practica4drwho.deno.dev/`

### TardisSchema
| Nombre      | Tipo              | Descripción                      |
|-------------|-------------------|----------------------------------|
| _id         | ObjectId          | Identificador único de la TARDIS |
| dimensiones | DimensionSchema[] | Dimensiones de la TARDIS         |
| planetas    | PlanetaSchema[]   | Planetas de la TARDIS            |
| personas    | PersonaSchema[]   | Personas de la TARDIS            |
| camuflaje   | string            | Camuflaje actual de la TARDIS    |
| año         | number            | Año actual de la TARDIS          |

### GET todas las TARDIS
Obtiene todas las TARDIS registradas en la base de datos.

GET `https://practica4drwho.deno.dev/api`

````json
[
    {
        "_id": "6568621b3ae511a9a8f048d0",
        "dimensionesID": [
            {
                "_id": "6568621a3ae511a9a8f048b2",
                "nombre": "Dimensión Alfa",
                "planetasID": [
                    {
                        "_id": "6568621a3ae511a9a8f048aa",
                        "nombre": "Planeta A1",
                        "personasID": [
                            {
                                "_id": "6568621a3ae511a9a8f048a6",
                                "nombre": "Alex",
                                "sexo": false
                            },
                            {
                                "_id": "6568621a3ae511a9a8f048a8",
                                "nombre": "Aria",
                                "sexo": true
                            }
                        ]
                    },
                    {
                        "_id": "6568621a3ae511a9a8f048b0",
                        "nombre": "Planeta A2",
                        "personasID": [
                            {
                                "_id": "6568621a3ae511a9a8f048ac",
                                "nombre": "Alan",
                                "sexo": false
                            },
                            {
                                "_id": "6568621a3ae511a9a8f048ae",
                                "nombre": "Alice",
                                "sexo": true
                            }
                        ]
                    }
                ]
            }, 
            {
                "_id": "6568621b3ae511a9a8f048c0",
                //...
            },
    //...
]
````

### GET una TARDIS (por ID)
Obtiene una TARDIS registrada en la base de datos por su ID.

GET `https://practica4drwho.deno.dev/api/:id`

````json
{
    "_id": "6568621b3ae511a9a8f048d0",
    "dimensionesID": [
        {
            "_id": "6568621a3ae511a9a8f048b2",
            "nombre": "Dimensión Alfa",
            "planetasID": [
                {
                    "_id": "6568621a3ae511a9a8f048aa",
                    "nombre": "Planeta A1",
                    "personasID": [
                        {
                            "_id": "6568621a3ae511a9a8f048a6",
                            "nombre": "Alex",
                            "sexo": false
                        },
                        {
                            "_id": "6568621a3ae511a9a8f048a8",
                            "nombre": "Aria",
                            "sexo": true
                        }
                    ]
                },
                {
                    "_id": "6568621a3ae511a9a8f048b0",
                    "nombre": "Planeta A2",
                    "personasID": [
                        {
                            "_id": "6568621a3ae511a9a8f048ac",
                            "nombre": "Alan",
                            "sexo": false
                        },
                        {
                            "_id": "6568621a3ae511a9a8f048ae",
                            "nombre": "Alice",
                            "sexo": true
                        }
                    ]
                }
            ]
        },
        {
            "_id": "6568621b3ae511a9a8f048c0",
            "nombre": "Dimensión Beta",
            "planetasID": [
                {
                    "_id": "6568621a3ae511a9a8f048b8",
                    "nombre": "Planeta B1",
                    "personasID": [
                        {
                            "_id": "6568621a3ae511a9a8f048b4",
                            "nombre": "Brian",
                            "sexo": false
                        },
                        {
                            "_id": "6568621a3ae511a9a8f048b6",
                            "nombre": "Bella",
                            "sexo": true
                        }
                    ]
                },
                {
                    "_id": "6568621b3ae511a9a8f048be",
                    "nombre": "Planeta B2",
                    "personasID": [
                        {
                            "_id": "6568621a3ae511a9a8f048ba",
                            "nombre": "Bruce",
                            "sexo": false
                        },
                        {
                            "_id": "6568621a3ae511a9a8f048bc",
                            "nombre": "Beth",
                            "sexo": true
                        }
                    ]
                }
            ]
        },
        {
            "_id": "6568621b3ae511a9a8f048ce",
            "nombre": "Dimensión Gamma",
            "planetasID": [
                {
                    "_id": "6568621b3ae511a9a8f048c6",
                    "nombre": "Planeta G1",
                    "personasID": [
                        {
                            "_id": "6568621b3ae511a9a8f048c2",
                            "nombre": "Gary",
                            "sexo": false
                        },
                        {
                            "_id": "6568621b3ae511a9a8f048c4",
                            "nombre": "Gina",
                            "sexo": true
                        }
                    ]
                },
                {
                    "_id": "6568621b3ae511a9a8f048cc",
                    "nombre": "Planeta G2",
                    "personasID": [
                        {
                            "_id": "6568621b3ae511a9a8f048c8",
                            "nombre": "Gordon",
                            "sexo": false
                        },
                        {
                            "_id": "6568621b3ae511a9a8f048ca",
                            "nombre": "Grace",
                            "sexo": true
                        }
                    ]
                }
            ]
        }
    ],
    "camuflaje": "Cabina telefónica",
    "año": 3021
}
````

### GET Descargar una TARDIS (por ID)
Descarga una TARDIS registrada en la base de datos por su ID. El propósito es que la Tardis que quieres modificar con el método PUT, se descargue en tu ordenador para que puedas modificarla.

GET `https://practica4drwho.deno.dev/api/:id/download`

### POST una TARDIS
Crea una nueva TARDIS en la base de datos.

POST `https://practica4drwho.deno.dev/api` añadiendo un body json con las siguientes características:

````json
{
  "dimensionesID":[
    {
      "nombre":"Dimensión Gallifrey",
      "planetasID":[
        {
          "nombre":"Gallifrey",
          "personasID":[
            {
              "nombre":"Doctor",
              "sexo":false
            },
            {
              "nombre":"Romana",
              "sexo":true
            }
          ]
        },
        {
          "nombre":"Trenzalore",
          "personasID":[
            {
              "nombre":"Clara",
              "sexo":true
            },
            {
              "nombre":"Strax",
              "sexo":false
            }
          ]
        }
      ]
    }
  ],
  "camuflaje":"Tumba Egipcia",
  "año":340
}
````
### PUT una TARDIS (por ID)
Actualiza una TARDIS registrada en la base de datos por su ID.

PUT `https://practica4drwho.deno.dev/api/:id` añadiendo un body json con las mismas características que en el método POST.

### DELETE una TARDIS (por ID)
Elimina una TARDIS registrada en la base de datos por su ID.

DELETE `https://practica4drwho.deno.dev/api/:id`