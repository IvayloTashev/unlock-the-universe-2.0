import { useEffect, useState } from "react";
import { getAllPhotos, getOnePhoto } from "../api/photosAPI";
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
    }, [])

    return photos
}

export const useGetOnePhoto = (id: string) => {
    const [photo, setPhoto] = useState<PhotosType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getOnePhoto(id) as PhotosType;
                setPhoto(result);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        })();
    }, [])

    return photo
}
