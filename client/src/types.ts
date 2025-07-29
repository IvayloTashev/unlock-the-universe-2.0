export interface NasaPodType {
    copyright?: string,
    date: string,
    explanation: string,
    hdurl?: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

export interface PlanetType {
    _ownerId: string,
    title: string,
    image: string,
    facts: string,
    introduction: string,
    namesake: string,
    potentialForLife: string,
    sizeAndDistance: string,
    orbitAndRotation: string,
    moons: string,
    formation: string,
    structure: string,
    surface: string,
    atmosphere: string,
    magnetosphere: string,
    _createdOn: number,
    _id: string,
}

export type PlanetName =
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune";