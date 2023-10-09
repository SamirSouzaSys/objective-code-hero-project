export type Character = {
    id: number;
    name: string;
    description: string,
    thumbnail: {
        path: string,
        extension: string
    };
}

export type Serie = {
    items: [{
        name: string,
        resourceURI: string
    }]
}

export type Event = {
    items: [{
        name: string,
        resourceURI: string
    }]
}

export type CharacterListElement = Character & {
    series: Serie;
    events: Event;
}

export type CharacterDataWrapper {
    results: CharacterListElement[]
}