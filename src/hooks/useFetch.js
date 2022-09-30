import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            await fetch(url)
                .then(response => response.json())
                .then(response => setData(response))
                .catch(error => console.log(error))
        }

        fetchData();
    }, [url])
    return [data];
}