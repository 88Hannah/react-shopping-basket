import {useState, useEffect} from 'react';

function useSessionStorage(dataName) {

    const [value, setValue] = useState(JSON.parse(sessionStorage.getItem(dataName)) || []);

    useEffect(() => {
        sessionStorage.setItem(dataName, JSON.stringify(value))
    }, [value]);

    return [value, setValue];
};

export default useSessionStorage;