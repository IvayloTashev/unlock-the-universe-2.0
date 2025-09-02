import { useEffect, useState } from "react"
import type { AstronautType, CelestialBodyType, MissionType } from "../types";
import { getAllAstronauts, getAllCelestialBodies, getAllMissions, getAstronautById, getCelestialBodybyId, getMissionById } from "../api/sapeceAPI";

//CelestialBodies
export const useGetAllCelestialBodies = () => {
    const [spaceData, setSpaceData] = useState<CelestialBodyType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await getAllCelestialBodies() as CelestialBodyType[];
                setIsLoading(false);
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {spaceData, isLoading};
}

export const useGetCelestialBodybyId = (id: string) => {
    const [spaceData, setSpaceData] = useState<CelestialBodyType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await getCelestialBodybyId(id) as CelestialBodyType;
                setIsLoading(false);
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {spaceData, isLoading};
}

//Astronauts
export const useGetAllAstronauts = () => {
    const [astronautsData, setAstronautsData] = useState<AstronautType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {

            try {
                setIsLoading(true);
                const result = await getAllAstronauts() as AstronautType[];
                setIsLoading(false);
                setAstronautsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {astronautsData, isLoading};
}

export const useGetAstronautById = (id: string) => {
    const [astronautsData, setAstronautsData] = useState<AstronautType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await getAstronautById(id) as AstronautType;
                setIsLoading(false);
                setAstronautsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {astronautsData, isLoading};
}

//Missions
export const useGetAllMissions = () => {
    const [missionsData, setMissionsData] = useState<MissionType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {

            try {
                setIsLoading(true);
                const result = await getAllMissions() as MissionType[];
                setIsLoading(false);
                setMissionsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {missionsData, isLoading};
}

export const useGetMissionById = (id: string) => {
    const [missionsData, setMissionsData] = useState<MissionType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await getMissionById(id) as MissionType;
                setIsLoading(false);
                setMissionsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return {missionsData, isLoading};
}