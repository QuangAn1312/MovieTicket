import axios from 'axios';
import { DOMAIN } from '../../util/config';
import { http } from '../../util/config';






export const getCarouselAction = (maNhom = 'GP04') => {
  return (dispatch: any) => {

    const result = http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)

    Promise.prototype.then((result: { data: { content: any; }; }) => {
      console.log('result', result);
      console.log('result', result.data)

      dispatch({
        type: 'SET_CAROUSEL',
        arrImg: result.data.content
      })

      Promise.prototype.catch(error => {
        console.log('error', { error })
        // console.log('error', error.response.data)
      })
    });

  }
}