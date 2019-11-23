import { getDateOfHours } from './utils';

export const events = [
    {
        startTime: getDateOfHours(11, 40), 
        endTime: getDateOfHours(13, 40),
        title: "Lunch", 
        location:"Boltzmannstraße 3, 85748 Garching",
    }
];

export const offers = [
    [
        {
            startTime: getDateOfHours(11),
            endTime: getDateOfHours(11, 20),
            startLocation: "Giesing",
            startLocationCoordinate: { 
                lat: 48.110904,
                lng: 11.5926632
            },
            destination: "Garching Forscungszentrum",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 12.99,
        },
        {
            startTime: getDateOfHours(11, 20),
            endTime: getDateOfHours(11, 50),
            startLocation: "Giesing",
            startLocationCoordinate: { 
                lat: 48.110904,
                lng: 11.5926632
            },
            destination: "Garching Forscungszentrum",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 10,
        }
    ]
]