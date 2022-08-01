
import React from 'react'
import  styles from'./HeaderHome.module.scss';
import { UserOutlined } from '@ant-design/icons';
import image from '../../Assets/img/logo.jpg';


type Props = {};

const HeaderHome = (props: Props) => {
  return (
    <header id="heading" className={ `p-4  ${styles.headerHome} ` }>
      <div className="container flex justify-between h-16 mx-auto ">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img src={image} alt="logo" />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:text-violet-400 dark:border-violet-400 font-medium">Lịch Chiếu</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  font-medium ">Cụm Rạp</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  font-medium ">Tin Tức</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  font-medium ">Ứng Dụng</a>
          </li>
        </ul>
        <div className={`items-center flex-shrink-0 hidden lg:flex ${styles.headerButton} `}>
          <button className="self-center px-8 py-3 rounded"> <a href=""> <UserOutlined style={{fontSize:28}} />Sign in</a></button>
            <hr className="divide-inherit " />
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
           <a href=""> <UserOutlined  style={{fontSize:28}}/> Sign up</a>
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

  );
}
export default HeaderHome;

