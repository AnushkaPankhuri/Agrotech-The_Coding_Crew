import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useMemo } from 'react';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const useApi = () => {
    const { user, isAuthenticated } = useAuth();

    const apiInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080',
        });

        instance.interceptors.request.use(config => {
            console.log('Request URL:', config.url);
            console.log('Request method:', config.method);
            console.log('Request headers before sending:', config.headers);

            if (isAuthenticated && user) {
                const token = btoa(`${user.username}:${user.password}`);
                config.headers.Authorization = `Basic ${token}`;
            }
            return config;
        });

        return instance;
    }, [user, isAuthenticated]);

    return apiInstance;
};

export default api;
