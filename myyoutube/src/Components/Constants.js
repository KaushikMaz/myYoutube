
const config = require('../config.js');

const GOOGLE_API_Key = config.GOOGLE_API_Key;

export const Button_Contents=["Live", "Gaming","Sports","Cricket","Football","WWE","INDIA","Virat Kohli","BIG BOSS","Tech","Bangalore","Tesla","Thread", "Flood"]

export const YOUTUBE_API_KEY="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_Key;

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="