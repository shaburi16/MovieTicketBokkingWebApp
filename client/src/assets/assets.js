import logo from "./logo.png";
import JioStudioLogo from "./JioStudioLogo.webp";
import googlePlay from "./googlePlay.svg";
import appStore from "./appStore.svg";
import screenImage from "./screenImage.svg";
import profile from "./profile.png";

export const assets = {
  logo,
  JioStudioLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

export const dummyTrailers = [
    {
        image: "https://i.ytimg.com/vi/bMgfsdYoEEo/hq720.jpg",
        videoUrl: 'https://www.youtube.com/embed/bMgfsdYoEEo'
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
        videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU'
    },
    {
        image: "https://i.ytimg.com/vi/BGQz3J_CL8k/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/XTnwldBXgAc'
    },
    {
        image: "https://filminformation.com/wp-content/uploads/2023/12/hi-papa-101821743.jpg",
        videoUrl: 'https://www.youtube.com/embed/80T1qoy9RSY'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Jodhaa Akbar",
        "overview": "Jodhaa is a fiery Rajput princess who is obliged to marry Mughal Emperor Akbar for political reasons. Eventually, mutual respect and admiration between the duo leads to true love.",
        "poster_path": "https://m.media-amazon.com/images/M/MV5BNzg5YWI5YjMtMjhmNi00MDQxLTlmNWUtM2IzOWMzMDNhOTMzXkEyXkFqcGc@._V1_.jpg",
        "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDFpBz7emWPg7b8GoZaTqd3R2osrWljZ5Xw&s",
        "genres": [
            { "id": 28, "name": "Romance" },
            { "id": 14, "name": "Gore" },
            
        ],
        "casts": dummyCastsData,
        "release_date": "2008-02-15",
        "original_language": "Hindi",
        "tagline": "In 16th-century India, what begins as a strategic alliance between a Mughal emperor and a Hindu princess becomes a genuine opportunity for true love.",
        "vote_average": 7.5,
        "vote_count": 34000,
        "runtime": 214,
    },
    {
    "_id": "155",
    "id": 155,
    "title": "3 Idiots",
    "overview": "Three engineering students learn lessons about friendship, success and life.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "genres": [
        { "id": 35, "name": "Comedy" },
        { "id": 18, "name": "Drama" }
    ],
    "casts": dummyCastsData,
    "release_date": "2009-12-25",
    "original_language": "hi",
    "tagline": "Don't Chase Success. Chase Excellence.",
    "vote_average": 8.0,
    "vote_count": 42000,
    "runtime": 170,
},
{
    "_id": "438631",
    "id": 438631,
    "title": "Dangal",
    "overview": "A former wrestler trains his daughters to become world-class wrestlers.",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84xOhK_tfWrR_icM0suC-Mh8A8s0xXViSYA&s",
    "genres": [
        { "id": 18, "name": "Drama" },
        { "id": 10751, "name": "Family" }
    ],
    "casts": dummyCastsData,
    "release_date": "2016-12-21",
    "original_language": "hi",
    "tagline": "Mhaari Chhoriyan Chhoron Se Kam Hai Ke?",
    "vote_average": 8.3,
    "vote_count": 39000,
    "runtime": 161,
},
{
    "_id": "297222",
    "id": 297222,
    "title": "Bajrangi Bhaijaan",
    "overview": "A man embarks on a journey to reunite a mute Pakistani girl with her family.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYzVjMjZiNGUtZjZiNy00Yzg4LWEzYzYtMmI1NDg5NWNiNjUwXkEyXkFqcGc@._V1_.jpg",
    "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI8p9hPNgwHamUn8UlG9RKi3XLYNtTEJxaw&s",
    "genres": [
        { "id": 35, "name": "Comedy" },
        { "id": 18, "name": "Drama" }
    ],
    "casts": dummyCastsData,
    "release_date": "2015-07-17",
    "original_language": "hi",
    "tagline": "A Little Girl. A Big Journey.",
    "vote_average": 8.1,
    "vote_count": 37000,
    "runtime": 163,
},
{
    "_id": "999001",
    "id": 999001,
    "title": "Pathaan",
    "overview": "An exiled RAW agent takes on a dangerous terrorist organization.",
    "poster_path": "https://image.tmdb.org/t/p/original/vqu4z0N4R48rWJ6L6zv0J4Q0rN.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/6l8A4HbU0dFj4Q5VhM4yV0bA5b.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 53, "name": "Thriller" }
    ],
    "casts": dummyCastsData,
    "release_date": "2023-01-25",
    "original_language": "hi",
    "tagline": "Bring Back The Hero.",
    "vote_average": 6.7,
    "vote_count": 25000,
    "runtime": 146,
},
    {
    "_id": "999002",
    "id": 999002,
    "title": "Shershaah",
    "overview": "Based on the life of Captain Vikram Batra, a brave Indian Army officer who fought in the Kargil War.",
    "poster_path": "https://image.tmdb.org/t/p/original/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/4dGxINxM8E6JtT0UPG6w9K0W6fD.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 18, "name": "Drama" },
        { "id": 10752, "name": "War" }
    ],
    "casts": dummyCastsData,
    "release_date": "2021-08-12",
    "original_language": "hi",
    "tagline": "The Untold Story of a Hero.",
    "vote_average": 8.4,
    "vote_count": 28000,
    "runtime": 135,
},
{
    "_id": "999003",
    "id": 999003,
    "title": "Zindagi Na Milegi Dobara",
    "overview": "Three friends set off on a road trip across Spain that changes their lives forever.",
    "poster_path": "https://image.tmdb.org/t/p/original/twBqjM5J3gM9TQ0z6e0zV8H5Y5R.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/m1n7w0Q5Yk4h6V5L8p3J7v9R2Y.jpg",
    "genres": [
        { "id": 35, "name": "Comedy" },
        { "id": 18, "name": "Drama" },
        { "id": 12, "name": "Adventure" }
    ],
    "casts": dummyCastsData,
    "release_date": "2011-07-15",
    "original_language": "hi",
    "tagline": "Seize the Day.",
    "vote_average": 8.2,
    "vote_count": 31000,
    "runtime": 155,
},
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]