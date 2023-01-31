import { SetStateAction } from "react";

export interface IItems {
    label: string;
    value: string;
}

export interface IDropDownComponent {
    setValue: React.Dispatch<React.SetStateAction<string | null>>;
    value: string | null;
    items: IItems[];
    setItems: React.Dispatch<SetStateAction<IItems[]>>;
}