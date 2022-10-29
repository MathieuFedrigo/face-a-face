import { useEffect } from "react";
import { tick, TICK_INTERVAL_IN_MS } from "../redux/boardSlice";
import { useAppDispatch } from "../redux/hooks";

export const useTimer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tickInterval = setInterval(() => dispatch(tick()), TICK_INTERVAL_IN_MS)
    return () => clearInterval(tickInterval)
  }, []);
}