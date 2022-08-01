import {
    createAction,
    createReducer,
    AnyAction,
    PayloadAction,
} from '@reduxjs/toolkit'


const stateBanner =
{
    arrImg: [
        {
            "maPhim": 1407,
            "tenPhim": "Jurassic World",
            "biDanh": "jurassic-world",
            "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
            "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
            "maNhom": "GP04",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1422,
            "tenPhim": "Fantastic Four",
            "biDanh": "fantastic-four",
            "trailer": "https://www.youtube.com/embed/AAgnQdiZFsQ",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
            "moTa": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
            "maNhom": "GP04",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1437,
            "tenPhim": "Mad Max: Fury Road",
            "biDanh": "mad-max-fury-road",
            "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/madmax.jpg",
            "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            "maNhom": "GP04",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1482,
            "tenPhim": "The Walking Dead",
            "biDanh": "the-walking-dead",
            "trailer": "https://www.youtube.com/embed/R1v0uFms68U",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
            "moTa": "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
            "maNhom": "GP04",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        }

    ]
};

// const isActionWithNumberPayload = (
//         action: AnyAction
//       ) : action is PayloadAction<number> => {
//         return typeof action.payload === 'number'
//       }

export const BannerReducer = (state = stateBanner, action:any) => {
    switch (action.type) {
        case 'SET_CAROUSEL' :{
            state.arrImg=action.arrImg;
            return {...state}
        }


        default: return { ...state }
    }
}

