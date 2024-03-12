import TwitterHeaderComponent from "./TwitterHeaderComponent"
import TweetFormComponent from "./TweetFormComponent"
import Tweets from "../Tweets"


export default function MainContentComponent(){
    return(
<div className="w-3/5 border border-gray-600 h-auto  border-t-0">
  <TwitterHeaderComponent/>
  <hr className="border-gray-600" />
  <TweetFormComponent/>
  <hr className="border-blue-800 border-4" />  
  <Tweets/>
  <hr className="border-gray-600" />
</div>
    )
}


