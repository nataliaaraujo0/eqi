import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import api from '../services/api';

export function useFetch(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(url, options)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setFetching(false);
            });
    }, [url]);

    return { isFetching, data, error };
}
