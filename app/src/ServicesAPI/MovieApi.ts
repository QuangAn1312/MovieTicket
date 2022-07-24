import { Movie } from "../Interface/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieShowing: () => {
    // Khai báo hàm call API dữ liệu trả về là Movie[]
    return axiosClient.get<Movie[]>("QuanLyPhim/LayDanhSachPhim");
  },
  getMovieDetails: (movieId: string) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  // Và những còn lại liên quan đến movie...
};

export default movieAPI;
