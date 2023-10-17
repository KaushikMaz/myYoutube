import { v4 as uuidv4 } from 'uuid';

export const  ButtonShimmer=()=>{
    const arrButton = Array(9).fill(null);
    
    return (
    
      <div className="flex">
        {arrButton.map((_) => (
          <div
            key={uuidv4()}
            className=" md:px-3 w-28 h-7 md:w-40 md:h-10 md:py-1 m-1 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
        </div>
    )}
     
  
export const VideoShimmer=()=>{
  const arrVideo=Array(6).fill(null)
  const videoKeys=Array.from({length:arrVideo.length},()=>uuidv4())
  return(
    
    <div className="flex flex-wrap md:mr-[6rem] md:ml-[15rem] mt-[5rem] md:mt-[7rem]">
      {arrVideo.map((_, index) => (
        <div className="flex flex-col" key={videoKeys[index]}>
          <div className="w-screen md:w-[20rem] h-[12rem] m-1 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
          <div className="w-[18rem] h-[1rem] ml-4 md:ml-1 mb-1 border border-gray-300 rounded-lg  bg-gray-300 animate-pulse"></div>
          <div className="w-[16rem] h-[1rem] ml-4 md:ml-1 border border-gray-300 rounded-lg mb-5 bg-gray-300 animate-pulse"></div>
        </div>
        
      ))}
    </div>
    

  )

}
export const ExploreContentShimmer=()=>{
  const arr=Array(3).fill(null)

  return(
    <div className="flex md:flex-col ">
      <div className=" flex md:mr-[10rem] md:ml-[15rem] md:mt-[4rem]">
        {arr.map((_) => (
          <div className="flex flex-col ">
            <div
              key={uuidv4()}
              className=" w-screen md:w-[19.5rem] h-[14rem] md:h-[11rem] m-1 md:m-2 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
            ></div>
            <div className="w-[18rem] h-[1rem] ml-4 md:ml-2 mb-1 border border-gray-300 rounded-lg  bg-gray-300 animate-pulse"></div>
            <div className="w-[16rem] h-[1rem] ml-4 md:ml-2 mb-1 border border-gray-300 rounded-lg bg-gray-300 animate-pulse "></div>
            <div className="w-[10rem] h-[1rem] ml-2 mb-1 border border-gray-300 rounded-lg bg-gray-300 animate-pulse hidden md:block"></div>
            <div className="w-[5rem] h-[1rem] ml-2 border border-gray-300 rounded-lg bg-gray-300 animate-pulse hidden md:block"></div>
          </div>
          
        ))}
        </div>
      <div className=' hidden md:block mr-[8rem] ml-[15rem] mt-9 w-[60rem] h-8 mb-2 border border-gray-300 rounded-lg bg-gray-300 animate-pulse'></div>
        

      
    </div>
  )

}

 