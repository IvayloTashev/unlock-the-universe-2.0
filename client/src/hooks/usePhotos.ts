import { useEffect, useState } from "react";
import { getAllPhotos } from "../api/photosAPI";
import type { PhotosType } from "../types";


export const useGetAllPhotos = () => {
    const [photos, setPhotos] = useState<PhotosType[] | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAllPhotos() as PhotosType[];
                setPhotos(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, [photos])

    return photos
}
