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
            startTime: getDateOfHours(11),
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
            numberFellowPassengers: 1,
            isShared: true,
        },
        {
            startTime: getDateOfHours(11, 30),
            endTime: getDateOfHours(11, 50),
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
            totalPrice: 10.50,
            isTaxi: false,
            isDriver: true,
            numberFellowPassengers: 2,
            isShared: true,
        },
    ]
]

//ontime, with taxi
export const events = [
    {
        startTime: getDateOfHours(18, 10), 
        endTime: getDateOfHours(19, 30),
        title: "Dinner", 
        location:"Augustiner-Keller, Arnulfstraße 52, 80335 München",
    }
];

export const offers = [
    [
        {
            startTime: getDateOfHours(17, 56),
            endTime: getDateOfHours(18, 7),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1474093,
                lng: 11.578423,
            },
            destination: "Augustiner-Keller, Arnulfstraße 52, 80335 München",
            destinationCoordinate: {
                lat: 48.1435227,
                lng: 11.5492731,
            },
            totalPrice: 16.46,
            isTaxi: true,
            isDriver: false,
            numberFellowPassengers: 3,
            isShared: true,
        },
        {
            startTime: getDateOfHours(17, 51),
            endTime: getDateOfHours(18, 5),
            startLocation: "Bavarian state library, Ludwigstraße 16, 80539 München",
            startLocationCoordinate: { 
                lat: 48.1474093,
                lng: 11.578423,
            },
            destination: "Augustiner-Keller, Arnulfstraße 52, 80335 München",
            destinationCoordinate: {
                lat: 48.1435227,
                lng: 11.5492731,
            },
            totalPrice: 18.29,
            isTaxi: true,
            isDriver: false,
            numberFellowPassengers: 1,
            isShared: true,
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