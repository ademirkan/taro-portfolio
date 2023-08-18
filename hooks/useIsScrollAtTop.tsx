import { useState, useEffect } from "react";

const useIsScrollAtTop = () => {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);

    useEffect(() => {
        const checkScrollPosition = () => {
            setIsScrollAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", checkScrollPosition);

        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    return isScrollAtTop;
};

export default useIsScrollAtTop;
