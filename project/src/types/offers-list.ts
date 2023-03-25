export type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type OfferCity = {
    name: string;
    location : OfferLocation;
};

export type OfferHost = {
    id: number;
    name : string;
    isPro : boolean;
    avatarUrl : string;
};

export type Offer = {
    city: OfferCity;
    previewImage: string;
    images: string[];
    title: string;
    isPremium: boolean;
    rating: number;
    type: string;
    bedrooms: number;
    maxAdults: number;
    price: number;
    goods: string[];
    host: OfferHost;
    description: string;
    location: OfferLocation;
    id: number;
};

export type City = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };

export type Point = {
    title: string;
    lat: number;
    lng: number;
  };

export type Review = {
    id: number;
    user: RviewUser;
    rating: number;
    comment: string;
    date: string;
};

export type RviewUser = {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
};
