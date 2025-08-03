import { useEffect, useState } from "react"
import type { AstronautType, CelestialBodyType, MissionType } from "../types";
import { getAllAstronauts, getAllCelestialBodies, getAllMissions, getAstronautById, getCelestialBodybyId, getMissionById } from "../api/sapeceAPI";

//CelestialBodies
export const useGetAllCelestialBodies = () => {
    const [spaceData, setSpaceData] = useState<CelestialBodyType[] | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getAllCelestialBodies() as CelestialBodyType[];
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return spaceData;
}

export const useGetCelestialBodybyId = (id: string) => {
    const [spaceData, setSpaceData] = useState<CelestialBodyType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getCelestialBodybyId(id) as CelestialBodyType;
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return spaceData;
}

//Astronauts
export const useGetAllAstronauts = () => {
    const [astronautsData, setAstronautsData] = useState<AstronautType[] | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getAllAstronauts() as AstronautType[];
                setAstronautsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return astronautsData;
}

export const useGetAstronautById = (id: string) => {
    const [astronautsData, setAstronautsData] = useState<AstronautType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAstronautById(id) as AstronautType;
                setAstronautsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return astronautsData;
}

//Missions
export const useGetAllMissions = () => {
    const [missionsData, setMissionsData] = useState<MissionType[] | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getAllMissions() as MissionType[];
                setMissionsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return missionsData;
}

export const useGetMissionById = (id: string) => {
    const [missionsData, setMissionsData] = useState<MissionType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getMissionById(id) as MissionType;
                setMissionsData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return missionsData;
}