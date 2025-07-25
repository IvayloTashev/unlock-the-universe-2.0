import { useEffect, useState } from "react"
import { getNasaPodData } from "../api/nasaAPI";
import type { NasaPodType } from "../types";


export const useGetPod = () => {
    const [nasaPicture, setNasaPicture] = useState<NasaPodType | null>(null);

    useEffect(() => {
        (async () => {

            try {
                const result = await getNasaPodData();
                setNasaPicture(result);
            } catch (err) {
                console.error("Error fetching NASA POD data:", err);
            }
        })();
    }, []);

    return nasaPicture;
}
