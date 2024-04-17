
import { useSpeechSynthesis } from "react-speech-kit";

const Audio = () => {

    const { speak } = useSpeechSynthesis();

    return (
        <>
           <button className='btn btn-primary btn-lg' onClick={() => speak({ text: 'Hello React Js' })}>Speak</button>
        </>
    )
}

export default Audio;