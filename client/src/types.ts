import type { ReactNode } from "react";

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

export interface CelestialBodyType {
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

export interface AstronautType {
    _ownerId: string,
    title: string,
    image: string,
    description: string,
    _createdOn: number,
    _id: string,
}

export interface MissionType {
    _ownerId: string,
    name: string,
    image: string,
    description: string,
    _createdOn: number,
    _id: string,
}

export interface PhotosType {
    _ownerId: string,
    description?: string,
    image: string,
    _createdOn: number,
    _id: string,
}

export interface CommentType {
    _ownerId: string,
    id: string,
    text: string,
    _createdOn: number,
    _id: string
}

export type PlanetName =
    | "sun"
    | "mercury"
    | "venus"
    | "earth"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune";


export interface AuthState {
    _id?: string;
    email?: string;
    accessToken?: string;
}

export interface AuthContextType {
    userId?: string;
    email?: string;
    accessToken?: string;
    isAuthenticated: boolean;
    changeAuthState: (state: AuthState) => void;
    localLogout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}
