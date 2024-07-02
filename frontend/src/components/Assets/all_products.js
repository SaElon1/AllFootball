import Adidas_pads from './Adidas_pads.png'
import Adidas_padsR from './Adidas_padsR.png'
import Adidas_shorts from './Adidas_shorts.png'
import Arsenal_shirt from './Arsenal_shirt.png'
import Black_socks from './Black_socks.png'
import BlackW_socks from './BlackW_socks.png'
import Blue_socks from './Blue_socks.png'
import Blue_shorts from './Blue_shorts.png'
import Espanyol_back from './Espanyol_back.png'
import Espanyol_front from './Espanyol_front.png'
import Macron_shorts from './Macron_shorts.png'
import Manu_back from './Manu_back.png'
import Manu_front from './Manu_front.png'
import Nike_phantomV from './Nike_phantomV.png'
import Nike_phantomVR from './Nike_phantomVR.png'
import Nike_phantomVL from './Nike_phantomVL.png'
import Nike_phantom from './Nike_phantom.png'
import Nike_phantomR from './Nike_phantomR.png'
import Nike_phantomL from './Nike_phantomL.png'
import Nike_phantom3 from './Nike_phantom3.png'
import Nike_phantom3R from './Nike_phantom3R.png'
import Nike_phantom3L from './Nike_phantom3L.png'
import NikeBall_adult from './NikeBall_adult.png'
import Nikeball_kids from './Nikeball_kids.png'
import Penalty_ball from './Penalty_ball.png'
import Phantom_kids from './Phantom_kids.png'
import Phantom_kidsR from './Phantom_kidsR.png'
import Phantom_kidsL from './Phantom_kidsL.png'
import Puma_pads from './Puma_pads.png'
import Puma_padsR from './Puma_padsR.png'
import Puma_shoes from './Puma_shoes.png'
import Puma_shoesL from './Puma_shoesL.png'
import Puma_shoesR from './Puma_shoesR.png'
import Real_back_purple from './Real_back_purple.png'
import Real_front_purple from './Real_front_purple.png'
import Red_socks from './Red_socks.png'
import Sporting_back from './Sporting_back.png'
import Sporting_front from './Sporting_front.png'
import Özil_back from './Özil_back.png'
import Özil_front from './Özil_front.png'

let all_product = [
    {
        id: 1,
        name: "Adidas shin pads",
        category: "Balls&Pads",
        image: [Adidas_pads, Adidas_padsR],
        new_price: 10.0,
        old_price: 15.0,
    },
    {
        id: 2,
        name: "Adidas black shorts",
        category: "Socks&Shorts",
        image: [Adidas_shorts],
        new_price: 9.0,
        old_price: 14.0,
    },
    {
        id: 3,
        name: "Arsenal shirt",
        category: "Shirts",
        image: [Arsenal_shirt],
        new_price: 20.0,
        old_price: 40.0,
    },
    {
        id: 4,
        name: "Black cutted socks",
        category: "Socks&Shorts",
        image: [Black_socks],
        new_price: 5.0,
        old_price: 15.0,
    },
    {
        id: 5,
        name: "Black & White socks",
        category: "Socks&Shorts",
        image: [BlackW_socks],
        new_price: 5.0,
        old_price: 15.0,
    },
    {
        id: 6,
        name: "Blue Adidas shorts with number 90",
        category: "Socks&Shorts",
        image: [Blue_shorts],
        new_price: 10.0,
        old_price: 20.0,
    },
    {
        id: 7,
        name: "Blue Adidas socks",
        category: "Socks&Shorts",
        image: [Blue_socks],
        new_price: 6.0,
        old_price: 18.0,
    },
    {
        id: 8,
        name: "Espanyol shirt with number 20",
        category: "Shirts",
        image: [Espanyol_back, Espanyol_front],
        new_price: 15.0,
        old_price: 30.0,
    },
    {
        id: 9,
        name: "Macron black shorts",
        category: "Socks&Shorts",
        image: [Macron_shorts],
        new_price: 10.0,
        old_price: 15.0,
    },
    {
        id: 10,
        name: "Cristiano Ronaldo Manchester Uniteds red shirt with number 7",
        category: "Shirts",
        image: [Manu_back,Manu_front],
        new_price: 25.0,
        old_price: 45.0,
    },
    {
        id: 11,
        name: "Nike Phantom GT Red/Purple FG",
        category: "Shoes",
        image: [Nike_phantomV, Nike_phantomVL, Nike_phantomVR],
        new_price: 60.0,
        old_price: 150.0,
    },
    {
        id: 12,
        name: "Nike Phantom GT Yellow FG/AG",
        category: "Shoes",
        image: [Nike_phantom3, Nike_phantom3L, Nike_phantom3R],
        new_price: 70.0,
        old_price: 170.0,
    },
    {
        id: 13,
        name: "Nike Phantom GT Light Green FG",
        category: "Shoes",
        image: [Nike_phantom, Nike_phantomL, Nike_phantomR],
        new_price: 80.0,
        old_price: 195.0,
    },
    {
        id: 14,
        name: "Nike ball size 5",
        category: "Balls&Pads",
        image: [NikeBall_adult],
        new_price: 15.0,
        old_price: 30.0,
    },
    {
        id: 15,
        name: "Nike ball size 3",
        category: "Balls&pads",
        image: [Nikeball_kids],
        new_price: 10.0,
        old_price: 20.0,
    },
    {
        id: 16,
        name: "Penalty Scandinavian ball size 5",
        category: "Balls&Pads",
        image: [Penalty_ball],
        new_price: 10.0,
        old_price: 15.0,
    },
    {
        id: 17,
        name: "Phantom Ghost kids AG",
        category: "Shoes",
        image: [Phantom_kids,Phantom_kidsL,Phantom_kidsR],
        new_price: 30.0,
        old_price: 50.0,
    },
    {
        id: 18,
        name: "Puma shin pads",
        category: "Balls&Pads",
        image: [Puma_pads, Puma_padsR],
        new_price: 5.0,
        old_price: 15.0,
    },
    {
        id: 19,
        name: "Puma Future Turf kids",
        category: "Shoes",
        image: [Puma_shoes,Puma_shoesL,Puma_shoesR],
        new_price: 20.5,
        old_price: 40.0,
    },
    {
        id: 20,
        name: "Real Madrid purple shirt",
        category: "Shirts",
        image: [Real_front_purple,Real_back_purple],
        new_price: 40.0,
        old_price: 80.0,
    },
    {
        id: 21,
        name: "Red Adidas cutted socks",
        category: "Socks&Shorts",
        image: [Red_socks],
        new_price: 5.0,
        old_price: 10.0,
    },
    {
        id: 22,
        name: "Cristiano Ronaldo Sporting Lissabon shirt with number 28",
        category: "Shirts",
        image: [Sporting_back,Sporting_front],
        new_price: 50.0,
        old_price: 100.0,
    },
    {
        id: 23,
        name: "Mesut Özil Real Madrid shirt with number 10",
        category: "Shirts",
        image: [Özil_back, Özil_front],
        new_price: 40.0,
        old_price: 80.0,
    },
]

export default all_product








