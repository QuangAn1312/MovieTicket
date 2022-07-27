
import React from 'react'
import  './HeaderHome.module.scss';
import { UserOutlined } from '@ant-design/icons';


type Props = {};

const HeaderHome = (props: Props) => {
  return (
    <header id="heading-homemovie" className= " p-4 dark:text-gray-100 z-50 heading-home" >
      <div className="container flex justify-between h-16 mx-auto heading-home">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">

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
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded"> <UserOutlined /> Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
          <UserOutlined /> Sign up
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

