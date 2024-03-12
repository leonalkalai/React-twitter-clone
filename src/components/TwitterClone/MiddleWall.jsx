import HomePad from "./MiddleWall/HomePad"
import Tweet from "./MiddleWall/TweetComponent"
import UploadedImage from "./MiddleWall/UploadedImage";
import parse from 'html-react-parser';

const tweets = [
  {
    name:"Embrime Kounoup",
    profileImage:"https://raw.githubusercontent.com/leonalkalai/React-twitter-clone/main/src/assets/images/embrimekounoup.jpg",
    userName: "ShonaDesign",
    publishDate: "16 April",
    uploadedImage: "",
    text:`Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
    I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
    [07/100]
    <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>`
  },
  {
    name:"Haivan Doctor",
    profileImage:"https://raw.githubusercontent.com/leonalkalai/React-twitter-clone/main/src/assets/images/haivandoctor.jpg",
    userName: "ShonaDesign",
    publishDate: "16 April",
    uploadedImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80",
    text:`Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
    I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
    [07/100]
    <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>`
  },
  {
    name:"Tamam Bereket",
    profileImage:"https://raw.githubusercontent.com/leonalkalai/React-twitter-clone/main/src/assets/images/tamambereket.jpg",
    userName: "ShonaDesign",
    publishDate: "16 April",
    uploadedImage: "",
    text:`Day 07 of the challenge <span className="text-blue-400">#100DaysOfCode</span> 
    I was wondering what I can do with <span className="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
    [07/100]
    <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>`
  }
]

function TweetBlock(props){
  return(
  <>
    <div className="flex flex-shrink-0 p-4 pb-0">
      <a href="#" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-10 w-10 rounded-full" src={props.profileImage}/>
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white">
              {props.name}
              <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @{props.userName} . {props.publishDate}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="pl-16">
      <p className="text-base width-auto font-medium text-white flex-shrink">
          {props.text}
      </p>
      {props.uploadedImage===""?"":<UploadedImage uploadedImage={props.uploadedImage}/>}
      <div className="flex">
        <div className="w-full">
          <div className="flex items-center">
            <div className="flex-1 text-center">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </a>
            </div>
            <div className="flex-1 text-center py-2 m-2">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
              </a>
            </div>
            <div className="flex-1 text-center py-2 m-2">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </a>
            </div>
            <div className="flex-1 text-center py-2 m-2">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </a>
            </div>
            <div className="flex-1 text-center py-2 m-2">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>
              </a>
            </div>
            <div className="flex-1 text-center py-2 m-2">
              <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
 }
 

export default function MiddleWall(){
    return(
<div className="w-3/5 border border-gray-600 h-auto  border-t-0">


<HomePad />

<hr className="border-gray-600" />

<Tweet/>

<hr className="border-blue-800 border-4" />

     
{tweets.map((tweet, index) => {
  return (
    <TweetBlock key={index} 	   
      name={tweet.name} 
      profileImage={tweet.profileImage}
      userName= {tweet.userName}
      publishDate ={tweet.publishDate}
      uploadedImage ={tweet.uploadedImage}
      text= {parse(tweet.text)}
      >
      {parse(tweet.text)}
    </TweetBlock>
  );
})}



	  


<hr className="border-gray-600" />


</div>
    )
}



