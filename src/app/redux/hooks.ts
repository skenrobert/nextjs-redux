import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();// code de configuration redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;// code de configuration redux