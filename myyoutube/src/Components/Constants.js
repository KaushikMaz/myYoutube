import {useSelector} from "react-redux"


export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API_KEY="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY ;

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_RESULTS="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

export const Video_CategoriesAPI="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key=" + GOOGLE_API_KEY;

// export const Music_Videos_API= "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&id=10&regionCode=IN&key=" + GOOGLE_API_Key; 
export const Music_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&hl=en&regionCode=IN&videoCategoryId=10&key=" + GOOGLE_API_KEY
export const Music_API_US="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&hl=en&regionCode=US&videoCategoryId=10&key=" + GOOGLE_API_KEY
export const Music_API_FR="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&hl=fr&regionCode=FR&videoCategoryId=10&key=" + GOOGLE_API_KEY
export const News_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&hl=en&regionCode=IN&videoCategoryId=25&key=" + GOOGLE_API_KEY
export const News_API_US="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&hl=en&regionCode=US&videoCategoryId=25&key=" + GOOGLE_API_KEY

export const Sports_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&hl=en&regionCode=IN&videoCategoryId=17&key=" + GOOGLE_API_KEY
export const Gaming_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&hl=en&regionCode=IN&videoCategoryId=20&key=" + GOOGLE_API_KEY
export const Live_API= "https://youtube.googleapis.com/youtube/v3/liveBroadcasts?broadcastStatus=active&key=" + GOOGLE_API_KEY

export const FrontBanner=({name,description, backgroundColor})=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    return(
      <div className={`${isMenuOpen? 'w-[73%] left-[15rem] ': 'w-full'} hidden md:block relative text-center rounded-lg mt-14`}>
        <div className={`${backgroundColor} pb-8 pt-8  text-gray-100`}>
            <h1  className='font-bold '>{name}</h1>
            <h3 className="font-thin"> {description}</h3>
        </div>
        
      </div>

    )
  }

  export const mergedObjects=(array)=>{
    const mergeObject={}
    for(let i=0;i<=array.length;i++){
      const newObject=array[i]
      if(newObject){
        Object.assign(mergeObject,newObject)
      }
    }
    return mergeObject;
  }
 
 export  const videoSearch=(details,videoId)=>{
    for(const category in details){
      if(details.hasOwnProperty(category)){
        const categoryData=details[category];
        if( categoryData.hasOwnProperty(videoId)){
          return categoryData[videoId]
        }
      }
      
    }
 
   return null
  }

  export const getVideoData = (json) => {
    if (json?.items) {
      return json.items.map((obj) => {
        const { id } = obj;
        const { channelTitle, title } = obj.snippet || {};
        const { description } = obj.snippet?.localized || {};
        const { likeCount, viewCount } = obj.statistics || {};
        return { [id]: { channelTitle, title, description, likeCount, viewCount } };
      });
    } else {
      return [];
    }
  };

  export const getSearchVideoData = (json) => {
    if (json?.items) {
      return json.items.map((obj) => {
        const { videoId } = obj?.id
        const { channelTitle, title,description } = obj.snippet || {};
        const { likeCount, viewCount } = obj.statistics || {};
        return { [videoId]: { channelTitle, title, description,likeCount,viewCount} };
      });
    } else {
      return [];
    }
  };
  
const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  export function generateRandomName() {
   return nameList[Math.floor(Math.random() * nameList.length)];
         };


export function generateRandomString(){
    // program to generate random strings

const result = Math.random().toString(36).substring(2,17);
return result

}