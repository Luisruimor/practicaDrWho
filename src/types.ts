type Tardis = {
    dimensiones : Dimension[],
    planetas: Planeta[],
    personas: Persona[],
    camuflaje:string,
    año:number
}

type Dimension = {
    nombre:string,
    planetas: Planeta[],
}

type Planeta = {
    nombre:string,
    personas: Persona[],
}

type Persona = {
    nombre:string,
    sexo:boolean
}