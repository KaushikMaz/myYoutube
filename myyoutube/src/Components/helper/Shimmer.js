
export const  FrontShimmer=()=>{
    const arrButton = Array(9).fill(null);
    const arrVideo=Array(6).fill(null)
    return (
    <div className="flex flex-col">
      <div className="flex">
        {arrButton.map((_, index) => (
          <div
            key={index}
            className="px-3 w-40 h-10 py-1 m-1 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex flex-wrap mr-[9rem] mt-[2rem]">
        {arrVideo.map((_, index) => (
          <div
            key={index}
            className="p-3 w-[20rem] h-[12rem] m-3 border border-gray-300 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>

    );
  };
  
  


 