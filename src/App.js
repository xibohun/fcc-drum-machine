import "./App.css"
import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component{

    state = {
        keys :[
            "Q", "W", "E", "A", "S", "D", "Z", "X", "C"
        ]
        
    }

    sounds = [
    {
        key: "Q",

       sound : " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
        key: "w",
       sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
       key: "E",
       sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
       key: "A",
       sound:" https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
        key: "S",
        sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
       key: "D",
       sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
        key: "Z",
       sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
       key: "X",
       sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    },
    {
        key: "C",
        sound: " https://:3.amazons.com/freecodecamp/drums/heater-2.mp3"
    }

















    ]

    render(){
        const {text, sound } = this.state

        return(
            <div id="drum-machine" className="container">
                <div id="display" className="display">
                    <h1> play a sound</h1>
                   { sounds.map((sound, idx) =>(
                        <Box text={sound.key} key={idx} audio={sound.mp3}/>
                    ))}
                    
                </div>
                

            </div>
        )
    }
}


class  Box extends React.Component {

    state = {currentID: " "}
    constructor (props){
        super(props);
        this.audio = React.createRef();
    }
    componentDidMount(){
        this.audio.current.addEventListener('ended', (e) =>{
            const parent = e.target.parentNode
            parent.classList.remove('active')
        })

    }
    

   
    playSound = () =>{
        this.audio.current.play()
        const parent = audio.current.parentNode
        parent.classList.add('active')
        const display = parent.parentNode
        display.querySelector("h1").innerText = `${id} is playing`
    }


    handleKey = (e) =>{
        if(e.key.toUpperCase === props.text){
            this.audio.current.play()
        }

    }
    render() {
        return(
            <div className="box active drum-pad" onClick= {this.playSound} id={`drum ${text}`}>

            {props.text}
            <audio ref= {this.audio} src={audio} className="clip" id={text} />

    </div>
        )
}
}

document.addEventListener('keydown', (e) =>{
    const id = e.key.toUpperCase()
    const audio = document.getElementById(id)

    if(audio){
        audio.pause()
        const parent = audio.parentNode
        parent.classList.add('active')
        audio.play()
        audio.addEventListener('ended', () =>{
            parent.classList.remove('active')
        })
    }
})

export default App
