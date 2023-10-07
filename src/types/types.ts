export type Character = {
    id?: number;
    thumbnail?: string;
    name?: string;
}

export type Serie = {
    id?: number;
    title?: string
    characters?: Character[]
}

export type Event = {
    id?: number;
    title?: string
    characters?: Character[]
}

export type CharacterListElement = {
    character?: Character;
    series?: Serie[];
    events?: Event[];
}