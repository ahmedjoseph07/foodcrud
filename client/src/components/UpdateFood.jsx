import React from "react";
import { Link } from "react-router-dom";


const UpdateFood = () => {
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
              <div className="create flex gap-1 w-48 h-10   items-center rounded-md font-semibold cursor-pointer">
                <img className="h-6" src="/cart2.svg" alt="" />
                <Link to="/"> Create Food</Link>
              </div>
              <div className="all flex gap-1  w-48 h-10 mt-3 text-gray-800 font-semibold cursor-pointer">
                <img className="h-6" src="/food1.svg" alt="" />
                <Link to="/allfood">All Food</Link>
              </div>
            </div>
          </div>
        </div>


        <div className="main flex-1 bg-white">
          <h3 className="text-gray-800 mx-4 my-5 font-bold">
            Update Food Item
          </h3>
          <form action="">
          <div className="line-wrap mx-4">
            <div className="line1 flex flex-wrap w-full gap-2">
              <div className="w-[30%] h-12  my-4 ">
                <label htmlFor="foodname"><h4>Food Name</h4></label>
                <input id="foodname" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="text" />
              </div>
              <div className="w-[30%] h-12 my-4 ">
                <label htmlFor="foodcode"><h4>Food Code</h4></label>
                <input id="foodcode" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="number" />
              </div>
              <div className="w-[30%] h-12 my-4">
                <label htmlFor="foodimg"> <h4>Food Image</h4></label>
                <input id="foodimg" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="text" />
              </div>
            </div>
            <div className="line2 flex flex-wrap w-full gap-2 ">
              <div className="w-[30%] h-12 my-4">
                <label htmlFor="foodcat"><h4>Food Catagory</h4></label>
                <input id="foodcat" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="text" />
              </div>
              <div className="w-[30%] h-12  my-4">
                <label htmlFor="qty"><h4>QTY</h4></label>
                <input id="qty" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="number" />
              </div >
              <div className="w-[30%] h-12  my-4">
                <label htmlFor="price"><h4>Price</h4></label>
                <input id="price" className="border-solid border-gray-200 border h-full w-full rounded-lg" type="number"/>
              </div>
            </div>
          </div>
          <button className="mx-4 my-12 rounded-xl bg-[#5A67BA] text-white px-8 py-2 font-bold">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
