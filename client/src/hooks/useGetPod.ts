import { useEffect, useState } from "react"
import { getNasaPodData } from "../api/nasaAPI";
import type { NasaPodType } from "../types";


export const useGetPod = () => {
    const [nasaPicture, setNasaPicture] = useState<NasaPodType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {

            try {
                setIsLoading(true);
                const result = await getNasaPodData();
                setIsLoading(false);
                setNasaPicture(result);
            } catch (err) {
                console.error("Error fetching NASA POD data:", err);
            }
        })();
    }, []);

    return {nasaPicture, isLoading};
}
