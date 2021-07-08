import React from 'react';


const Layout_grid = () => {
  return (
    <section className="w-full bg-white">  
  <div className="w-full px-5 py-10 mx-auto max-w-7xl">
    <h1 className="mb-1 text-4xl leading-none text-gray-900"><a href="#_">The Project Blog</a></h1>
    <p className="text-lg font-medium text-gray-500">Designs and layouts to help you with your app.</p>
    <div className="h-full pb-10 mt-8">
      <div className="h-full overflow-hidden rounded-xl group">
        <a href="#_" className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-60 hover:scale-110" style={{backgroundImage: 'url("https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg")'}}>
        </a>
        <div className="w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
          <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>
        </div>
      </div>
    </div>

    <div className="">
        <div className="overflow-hidden shadow-sm rounded-xl">
          <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
            <img className="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg" />
          </a>
          <div className="px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
            <p className="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
          </div>
        </div>
    </div>  

  </div>

</section>
  )
}

export default Layout_grid