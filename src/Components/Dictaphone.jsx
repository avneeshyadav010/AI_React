
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { useState } from "react";
import News from "./News";
import { useSpeechSynthesis } from "react-speech-kit";
import Latest from "./Latest";




const Dictaphone = () => {
  const [message, setMessage] = useState('');
  const [source, setSource] = useState([]);
  const [category, setCategory] = useState([]);
  const [latest, setLatest] = useState([])
  const { speak } = useSpeechSynthesis();


  // useEffect(()=>{
  //     SpeechRecognition.startListening({continuous: true})
  // },[])

  const commands = [
    {
      command: ['CNN news', 'BBC news', 'FOX news'],
      callback: (source) => {
        console.log("source", source)
        let BASE_URL = "https://saurav.tech/NewsAPI/"
        if (source) {
          source = source.toLowerCase();
          if(source == "bbc news" || source == "fox news")
          BASE_URL = `${BASE_URL}/everything/${source.toLowerCase().split(" ").join("-")}.json`;
          if(source == "cnn news")
          BASE_URL = `${BASE_URL}/everything/cnn.json`;
          fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
              setSource(data.articles)
              speak({ text: `Here are the ${source}` })
              speak({ text: "would you like me to read the headline. Please say yes or no" })
            })
            .catch((error) => {
              console.log(error.message);
            })
         
        }
        setMessage(`Your order is for: ${source}`)
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 1,
      bestMatchOnly: true
    },
    {
      command: ['business news','entertainment news','general news','health news','science news','sports news','technology news'],
      callback: (category) => {
        console.log("cate",category)
        let BASE_URL = "https://saurav.tech/NewsAPI/top-headlines/category"
        if (category) {
          BASE_URL = `${BASE_URL}/${category.toLowerCase().split(' ')[0]}/in.json`;
          fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
              setCategory(data.articles)
              speak({ text: `Here are ${category}` })
              speak({ text: "would you like me to read the headline. Please say yes or no" })
            })
            .catch((error) => {
              console.log(error.message);
            })
        }
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 1,
      bestMatchOnly: true
    },
    {
      command: 'latest news',
      callback: () => {
        let BASE_URL = "https://saurav.tech/NewsAPI/sources.json"
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            setLatest(data.sources);
            speak({ text: `Here are latest news` })
            speak({ text: "would you like me to read the headline. Please say yes or no" })
          })
          .catch((error) => {
            console.log(error.message);
          })
       

      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 1,
      bestMatchOnly: true
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    },
    {
      command: "yes",
      callback: () => {
        if (source) {
          source.map((item) => {
            speak({ text: item.title });
          })
        }
        if (category) {
          category.map((item) => {
            speak({ text: item.title })
          })
        }
        if (latest) {
          latest.map((item) => {
            speak({ text: item.name })
          })
        }
      }
    },
    {
      command: "no",
      callback: () => {
        if (source || category || latest) {
          speak({ text: "Sounds good to me thankyou" });
        }
      }
    }
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <p className="text_color">Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p className="text_color">{transcript}</p>
      <p className="text_color">{message}</p>
      <div className="cards">
        {source.length > 0 && source.map((item, index) => <News key={index} data={item} />)}
        {category.length > 0 && category.map((item, index) => <News key={index} data={item} />)}
        {latest.length > 0 && latest.map((item, index) => <Latest key={index} data={item} />)}
      </div>
    </div>
  );
};
export default Dictaphone;
