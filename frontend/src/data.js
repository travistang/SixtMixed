import { getDateOfHours } from './utils';

/*
    This is the calendar!
*/

//ontime + without taxi
export const events2 = [
    {
        startTime: getDateOfHours(11, 40), 
        endTime: getDateOfHours(13, 40),
        title: "Lunch", 
        location:"Boltzmannstraße 3, 85748 Garching",
    }
];

export const offers2 = [
    [
        {
            startTime: getDateOfHours(11, 0),
            endTime: getDateOfHours(11, 20),
            startLocation: "Giesing",
            startLocationCoordinate: { 
                lat: 48.110904,
                lng: 11.5926632
            },
            destination: "Garching Forschungszentrum",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 12.99,
            isTaxi: false,
            isDriver: true,
            numberFellowPassengers: 0,
            isShared: true,
        },
        {
            startTime: getDateOfHours(11, 20),
            endTime: getDateOfHours(11, 30),
            startLocation: "Giesing",
            startLocationCoordinate: { 
                lat: 48.110904,
                lng: 11.5926632
            },
            destination: "Garching Forschungszentrum",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 30.25,
            isTaxi: true,
            isDriver: true,
            numberFellowPassengers: 0,
            isShared: false,
        },
    ]
]

//delayed, with taxi
export const events3 = [
    {
        startTime: getDateOfHours(18, 10), 
        endTime: getDateOfHours(19, 30),
        title: "Dinner", 
        location:"Augustiner-Keller, Arnulfstraße 52, 80335 München",
    }
];

export const offers3 = [
    [
        {
            startTime: getDateOfHours(17, 56),
            endTime: getDateOfHours(18, 7),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1457681,
                lng: 11.557282,
            },
            destination: "Augustiner-Keller, Arnulfstraße 52, 80335 München",
            destinationCoordinate: {
                lat: 48.1457824,
                lng: 11.557282
            },
            totalPrice: 16.46,
            isTaxi: true,
            isDriver: false,
            numberFellowPassengers: 0,
            isShared: false,
        },
        {
            startTime: getDateOfHours(17, 51),
            endTime: getDateOfHours(18, 5),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1457681,
                lng: 11.557282,
            },
            destination: "Augustiner-Keller, Arnulfstraße 52, 80335 München",
            destinationCoordinate: {
                lat: 48.1457824,
                lng: 11.557282
            },
            totalPrice: 18.29,
            isTaxi: true,
            isDriver: false,
            numberFellowPassengers: 0,
            isShared: false,
        },


    ]
]

//ontime, with taxi
export const events = [
    {
        startTime: getDateOfHours(11, 45), 
        endTime: getDateOfHours(13, 45),
        title: "DS Lecture", 
        location:"Boltzmannstraße 3, 85748 Garching",
    },
    ...events2,
    ...events3
];

export const offers = [
    [
        {
            startTime: getDateOfHours(11, 10),
            endTime: getDateOfHours(11, 20),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1474093,
                lng: 11.578423,
            },
            destination: "Boltzmannstraße 3, 85748 Garching",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 8.00,
            isTaxi: false,
            isDriver: false,
            numberFellowPassengers: 1,
            isShared: true,
        },
        {
            startTime: getDateOfHours(11, 10),
            endTime: getDateOfHours(11, 20),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1474093,
                lng: 11.578423,
            },
            destination: "Boltzmannstraße 3, 85748 Garching",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 11.40,
            isTaxi: false,
            isDriver: true,
            numberFellowPassengers: 0,
            isShared: false,
        },
        {
            startTime: getDateOfHours(11, 10),
            endTime: getDateOfHours(11, 18),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1474093,
                lng: 11.578423,
            },
            destination: "Boltzmannstraße 3, 85748 Garching",
            destinationCoordinate: {
                lat: 48.26504,
                lng: 11.6693806
            },
            totalPrice: 25.40,
            isTaxi: true,
            isDriver: false,
            numberFellowPassengers: 0,
            isShared: false,
        },
    ], ...offers2, ...offers3
]

