import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Audio = (props) => {
    console.log(props)
    return (
        <div>
            <div style={props.style.column}>
                <img style={styles.image} src={require('../../Assets/Image/sound.png')} alt='audio icon'/>
            </div>
                <ReactAudioPlayer src={props.link} controls/>
        </div>


    );
};

export default Audio;

const styles = {
    image:{
        width:300,
        height:300,
    }
}