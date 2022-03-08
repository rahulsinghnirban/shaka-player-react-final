import './Video.css'

export default function Video(){

    return(
        <>
        <center><div  data-shaka-player-container style={{maxWidth:"45em"}}
            data-shaka-player-cast-receiver-id="BBED8D28">
            <video autoPlay data-shaka-player id="video" style={{marginLeft:"50%"},{width:"100%"},{height:"100%"},{zindex:"1"}}></video>
        </div></center>
        {/* <button id="btn">ToggleBar</button> */}
        
        </>
    );

}