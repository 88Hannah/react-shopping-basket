import {useState, useRef, useEffect} from 'react';

function useIsHovered() {

    const [isHovered, setIsHovered] = useState(false);

    const hoverRef = useRef(null);

    const enter = () => {
        setIsHovered(true);
    };

    const leave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        hoverRef.current.addEventListener("mouseenter", enter);
        hoverRef.current.addEventListener("mouseleave", leave);

        return () => {
            hoverRef.current.removeEventListener("mouseenter", enter);
            hoverRef.current.removeEventListener("mouseleave", leave);
        };

    }, []);

    return [isHovered, hoverRef];
};

export default useIsHovered;