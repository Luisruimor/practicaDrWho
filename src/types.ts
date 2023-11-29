type Tardis = {
    id:string,
    dimensiones : Dimension[],
    planetas: Planeta[],
    personas: Persona[],
    camuflaje:string,
    año:number
}

type Dimension = {
    id:string,
    nombre:string,
    planetas: Planeta[],
}

type Planeta = {
    id:string,
    nombre:string,
    personas: Persona[],
}

type Persona = {
    id:string,
    nombre:string,
    sexo:boolean
}