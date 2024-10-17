import { useMemo } from "react";

export const usePagination = (cartPage) =>{
    const totalWidth = useMemo(() =>{
        const width = 1100;
        return (cartPage) * width;
    });
    return totalWidth;
};

