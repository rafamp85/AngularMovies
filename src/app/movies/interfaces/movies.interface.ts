export interface IMoviesData {
    tomatoes:            Tomatoes;
    genres:              string[];
    cast:                string[];
    languages:           string[];
    directors:           string[];
    countries:           string[];
    id?:                 string;
    plot:                string;
    runtime:             number;
    num_mflix_comments?: number;
    poster?:             string;
    title:               string;
    lastupdated:         Date;
    released?:           Date;
    writers?:            string[];
    awards:              Award[];
    year:                number;
    imdb:                Imdb;
    type:                string;
    lasupdated:          Date;
    rated?:              string;
    fullplot?:           string;
}

export interface Award {
    wins:        number;
    nominations: number;
    text:        string;
}

export interface Imdb {
    rating: number;
    votes:  number;
    id:     number;
}

export interface Tomatoes {
    viewer:      Critic;
    dvd?:        Date;
    website?:    string;
    production?: string;
    lastUpdated: Date;
    critic?:     Critic;
    fresh?:      number;
    rotten?:     number;
    consensus?:  string;
    boxOffice?:  string;
}

export interface Critic {
    rating:     number;
    numReviews: number;
    meter?:     number;
}