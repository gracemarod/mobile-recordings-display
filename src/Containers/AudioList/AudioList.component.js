import React, { Component, setState } from 'react';
import Audio from '../../Components/Audio/Audio.component';


export default class AudioList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }

      proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      targetUrl = 'http://880b2d1b.ngrok.io/files';
      componentDidMount(){
          fetch(this.proxyUrl+this.targetUrl)
                .then((res => res.json()))
                .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items:result.files
                    });
                }).catch((err)=>{
                    console.log(err);
                    return err;
                }
                )
      }   
    render(){
        return(
            <div style={styles.row}>
                {this.state.items.map((files, index) => {
                    return <Audio
                                style={styles}
                                link={files}
                                key = {index}
                            />
                        
                })}
            </div>
        );
    }
}

const styles = {

    row:{
        display:'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center'
    },
    column:{
        display:'flex',
        margin:20
    }
}