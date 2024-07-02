import Nike_phantom from './Nike_phantom.png'
import Nike_phantomR from './Nike_phantomR.png'
import Nike_phantomL from './Nike_phantomL.png'
import Real_back_purple from './Real_back_purple.png'
import Real_front_purple from './Real_front_purple.png'
import NikeBall_adult from './NikeBall_adult.png'
import Blue_shorts from './Blue_shorts.png'

let offerProducts = [
    {
        id: 1,
        name: "Nike Phantom GT Light Green FG",
        category: "Shoes",
        image: [Nike_phantom, Nike_phantomL, Nike_phantomR],
        new_price: 80.0,
        old_price: 195.0,
    },
    {
        id: 2,
        name: "Real Madrid purple shirt",
        category: "Shirts",
        image: [Real_back_purple, Real_front_purple],
        new_price: 40.0,
        old_price: 80.0,
    },
    {
        id: 3,
        name: "Nike ball size 5",
        category: "Balls&Pads",
        image: [NikeBall_adult],
        new_price: 15.0,
        old_price: 30.0,
    },
    {
        id: 4,
        name: "Blue Adidas shorts with number 90",
        category: "Socks&Shorts",
        image: [Blue_shorts],
        new_price: 10.0,
        old_price: 20.0,
    },
]

export default offerProducts