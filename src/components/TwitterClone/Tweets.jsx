import TweetsDatabase from './Database/TweetsDatabase';
import parse from 'html-react-parser';
import Tweet from './Tweet';

export default function Tweets(){
    const tweets = TweetsDatabase();
        return (
            <>
            {tweets.map((tweet, index) => (
                <Tweet key={index} 	   
                    name={tweet.name} 
                    profileImage={tweet.profileImage}
                    userName= {tweet.userName}
                    publishDate ={tweet.publishDate}
                    uploadedImage ={tweet.uploadedImage}
                    text= {parse(tweet.text)}
                    >
                    {parse(tweet.text)}
                </Tweet>
            ))}
            </>
      );
}

