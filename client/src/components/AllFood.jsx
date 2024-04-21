import React from "react";
import Card from './Card';
import {Link} from 'react-router-dom';

const AllFood = () => {
  return (
    <div>
      <div className="navbar w-full h-16 bg-white relative">
        <div className="wrapper w-56 bg-gray-200 h-full">
          <div className="heading flex w-26 bg-gray-200 h-6 absolute top-[20px] left-[40px] gap-1">
            <div className="logo w-6 h-6 rounded-full bg-[#5A67BA] flex justify-center items-center text-white cursor-pointer">
              G
            </div>
            <div className="name text-indigo-700 font-bold cursor-pointer">
              CRUD Food
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-[#5A67BA] border-gray-400 border-solid">
        <hr />
      </div>

      <div className="side-main flex">
        <div className="sidebar w-56 h-[calc(100vh-4rem)] bg-gray-200 ">
          <div className="menuwrapper flex justify-center items-center">
            <div className="menulist w-[200px] h-[95px] mt-6">
              <div className="menu opacity-[50%] font-[11px] text-gray-900 mb-3">
                Menu
              </div>
              <div className="create flex gap-1  w-48 h-10 text-gray-800 font-semibold cursor-pointer">
                <img className="h-6" src="/cart1.svg" alt="" />
                <Link to="/"> Create Food </Link>
              </div>
              <div className="all flex gap-1 w-48 h-10 text-[#5A67BA] bg-indigo-900 bg-opacity-20  items-center rounded-md font-semibold cursor-pointer">
                <img className="h-6" src="/food1.svg" alt="" />
                <Link to="/allfood">All Food</Link> 
              </div>
            </div>
          </div>
        </div>
        <div className="main flex-1 bg-white">
          <h3 className="mx-4 mt-5 mb-6 font-xl font-bold">All Food List</h3>
          <div className="cards mx-4">
            <div className="card flex flex-wrap gap-2">
              <Card/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllFood;
