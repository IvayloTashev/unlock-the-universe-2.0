import { useEffect, useState } from "react"
import type { AstronautType, CelestialBodyType } from "../types";
import { getAllAstronauts, getAllCelestialBodies, getAstronautbyId, getCelestialBodybyId } from "../api/sapeceAPI";

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
    const [astronautsData, setAstronautsDataData] = useState<AstronautType[] | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getAllAstronauts() as AstronautType[];
                setAstronautsDataData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return astronautsData;
}

export const useGetAstronautbyId = (id: string) => {
    const [astronautsData, setAstronautsDataData] = useState<AstronautType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAstronautbyId(id) as AstronautType;
                setAstronautsDataData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return astronautsData;
}