import { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector , useDispatch} from 'react-redux'
// import BannerReducer from '../../Redux/Reducer/BannerReducer'
import { rootReducer } from '../../Redux/Types/configStore'
import axios from 'axios';
import {getCarouselAction} from '../../Redux/Actions/CarouselAction'
import  movieAPI  from '../../ServicesAPI/MovieApi'
type Props = {};


const Banner = (props: Props) => {

  const { arrImg } = useSelector((state: rootReducer) => state.BannerReducer);
  const dispath = useDispatch();

  // useEffect (async () => {
  //   try{
  //     const result = await axios({
  //       url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=1&soPhanTuTrenTrang=4',
  //       method: 'GET'
  //     });

  //   } catch (errors) {
  //     console.log('erros', errors);
  //   }
    
  // },[]);
  useEffect(()=>{

  },[]);


  const contentStyle: React.CSSProperties = {
    height: '600px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return <div key={index}>
        <div style={{ ...contentStyle, backgroundImage:`url(${item.hinhAnh})`}}>
          {/* <img src={item.hinhAnh} alt={item.hinhAnh} className="w-full opacity-0 " /> */}
        </div>
      </div>

    })
  }

  return (
    <Carousel autoplay>
      {renderImg()}
    </Carousel>
  )
}
export default Banner;