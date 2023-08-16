
export const  ButtonShimmer=()=>{
    const arrButton = Array(9).fill(null);
    
    return (
    
      <div className="flex">
        {arrButton.map((_, index) => (
          <div
            key={index}
            className="px-3 w-40 h-10 py-1 m-1 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
        </div>
    )}
     
  
export const VideoShimmer=()=>{
  const arrVideo=Array(6).fill(null)
  return(
    
    <div className="flex flex-wrap mr-[8rem] ml-[12rem] mt-[7rem]">
      {arrVideo.map((_, index) => (
        <div className="flex flex-col">
          <div
            key={index}
            className=" w-[20rem] h-[12rem] m-1 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
          <div className="w-[18rem] h-[1rem] ml-1 mb-1 border border-gray-300 rounded-lg  bg-gray-300 animate-pulse"></div>
          <div className="w-[16rem] h-[1rem] ml-1 border border-gray-300 rounded-lg mb-5 bg-gray-300 animate-pulse"></div>
        </div>
        
      ))}
    </div>
    

  )

}
export const ExploreContentShimmer=()=>{
  const arr=Array(3).fill(null)

  return(
    <div ClassName="flex flex-col ">
      <div className=" flex mr-[8rem] ml-[12rem] mt-[4rem]">
        {arr.map((_, index) => (
          <div className="flex flex-col ">
            <div
              key={index}
              className=" w-[20rem] h-[12rem] m-2 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
            ></div>
            <div className="w-[18rem] h-[1rem] ml-2 mb-1 border border-gray-300 rounded-lg  bg-gray-300 animate-pulse"></div>
            <div className="w-[16rem] h-[1rem] ml-2 border border-gray-300 rounded-lg bg-gray-300 animate-pulse"></div>
          </div>
          
        ))}
        </div>
      <div className='mr-[8rem] ml-[12.5rem] mt-9 w-[62rem] h-10 mb-2 border border-gray-300 rounded-lg bg-gray-300 animate-pulse'></div>
        

      
    </div>
  )

}

 