export interface IPropsPremiumCard {
    id: string,
    selectedID: string,
    handleSelect: (v: string) => void,
    title: string;
    description: string;
    suggestion?: string;
}

export interface ISuggest {
    id: string,
    title: string,
    description: string,
    suggestions?: string
}