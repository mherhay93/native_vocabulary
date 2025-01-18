export interface IPropsInputRange {
    min: number;
    max: number;
    step: number;
    initialValue: number;
    label?: string;
    onValueChange: (value: number) => void;
}