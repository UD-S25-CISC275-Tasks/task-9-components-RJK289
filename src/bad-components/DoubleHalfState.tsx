import { useState } from "react";

function useDoubleHalfState() {
    return useState<number>(10);
}

export const [dhValue, setDhValue] = useDoubleHalfState();
