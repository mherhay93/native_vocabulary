export interface IPropsTimeRange {
    selectCount: (value: number) => void;
    selectTime: (value: string) => void;
}

export enum timeRange {
    'START' = 'START',
    'END' = 'END'
}