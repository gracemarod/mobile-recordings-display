import React from 'react';
import './App.css';
import AudioList from './Containers/AudioList/AudioList.component';


function App() {
  return (
    <div className="App">
      <h1>  Welcome to Mobile Recordings!</h1>
        <div style={styles.listContainer}>
          <AudioList/>
        </div>
    </div>
  );
}

export default App;

const styles = {
  listContainer: {
    margin:50,
    display:'flex',
    justifyContent:'center'
  }
}