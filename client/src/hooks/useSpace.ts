import { useEffect, useState } from "react"
import type { PlanetType } from "../types";
import { getAllbyType, getOnebyId } from "../api/sapeAPI";


export const useGetAllByType = (name: string) => {
    const [spaceData, setSpaceData] = useState<PlanetType[] | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getAllbyType(name) as PlanetType[];
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return spaceData;
}

export const useGetOnebyId = (id: string) => {
    const [spaceData, setSpaceData] = useState<PlanetType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getOnebyId(id) as PlanetType;
                setSpaceData(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, []);

    return spaceData;
}