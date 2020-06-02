import React from 'react';
import '../App.css';
// Lightweight library for audio playing
import ReactAudioPlayer from 'react-audio-player';
import LikeBtn from './LikeBtn';
import Shuffle from './Assets/img/shuffle.jpg';
import mediaFiles from './mediaFiles';
class Player extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      playlist: [
      {id: 1, name:'Catch Me When I Fall', author: 'Arc North ft. Sarah de Warren', img: mediaFiles.img1, audio: mediaFiles.track1}, 
      {id: 2, name:'Clear My Head', author: 'Ellis', img: mediaFiles.img2, audio: mediaFiles.track2},
      {id: 3, name:'Ruby', author: 'Jim Yosef & Alex Skrindo', img: mediaFiles.img3, audio: mediaFiles.track3},
      {id: 4, name:'Lie 2 You', author: 'Leonell Cassio', img: mediaFiles.img4, audio: mediaFiles.track4},
      {id: 5, name:'Dreams', author: 'Lost Sky', img: mediaFiles.img5, audio: mediaFiles.track5},
      {id: 6, name:'Till Dawn', author: 'Spce Cadex & Exede', img: mediaFiles.img6, audio: mediaFiles.track6},
      {id: 7, name:'Memories', author: 'VETA', img: mediaFiles.img7, audio: mediaFiles.track7}],
      playlist2: [
      {id: 1, name:'Almost (Sweet Music)', author: 'Hozier', img: mediaFiles.img8, audio: mediaFiles.track8}, 
      {id: 2, name:'Love Me Like You Do', author: 'Ellie Goulding', img: mediaFiles.img9, audio: mediaFiles.track9},
      {id: 3, name:'Nobody', author: 'Martin Jensen', img: mediaFiles.img10, audio: mediaFiles.track10},
      {id: 4, name:'One More Night', author: 'Maroon 5', img: mediaFiles.img11, audio: mediaFiles.track11},
      {id: 5, name:'Shape of You', author: 'Ed Sheeran', img: mediaFiles.img12, audio: mediaFiles.track12},
      {id: 6, name:'Somebody That I Used To Know', author: 'Gotye ft. Kimbra', img: mediaFiles.img13, audio: mediaFiles.track13},
      {id: 7, name:'You are the Reason', author: 'Calum Scott', img: mediaFiles.img14, audio: mediaFiles.track14}],
      playlist3: [
        {id: 1, name:'Eine Kleine Nachtmusik', author: 'Mozart', img: mediaFiles.img15, audio: mediaFiles.track15}, 
        {id: 2, name:'No. 14, Moonlight Sonata', author: 'Beethoven', img: mediaFiles.img16, audio: mediaFiles.track16},
        {id: 3, name:'5 Pieces in Folk Style', author: 'Schumann', img: mediaFiles.img17, audio: mediaFiles.track17},
        {id: 4, name:'Orchestral Suite No. 3, BWV 1068', author: 'Bach', img: mediaFiles.img18, audio: mediaFiles.track18},
        {id: 5, name:' Symphony No., K. 551 Jupiter', author: 'Mozart', img: mediaFiles.img19, audio: mediaFiles.track19},
        {id: 6, name:'Préludes, Op. 28: No. 15, Raindrop', author: 'Chopin', img: mediaFiles.img20, audio: mediaFiles.track20}],
      currentPlaylist: [
        {id: 1, name:'Catch Me When I Fall', author: 'Arc North ft. Sarah de Warren', img: mediaFiles.img1, audio: mediaFiles.track1}, 
        {id: 2, name:'Clear My Head', author: 'Ellis', img: mediaFiles.img2, audio: mediaFiles.track2},
        {id: 3, name:'Ruby', author: 'Jim Yosef & Alex Skrindo', img: mediaFiles.img3, audio: mediaFiles.track3},
        {id: 4, name:'Lie 2 You', author: 'Leonell Cassio', img: mediaFiles.img4, audio: mediaFiles.track4},
        {id: 5, name:'Dreams', author: 'Lost Sky', img: mediaFiles.img5, audio: mediaFiles.track5},
        {id: 6, name:'Till Dawn', author: 'Spce Cadex & Exede', img: mediaFiles.img6, audio: mediaFiles.track6},
        {id: 7, name:'Memories', author: 'VETA', img: mediaFiles.img7, audio: mediaFiles.track7}],
      random: 0,
      choice: "0",
      afterFirst: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePlaylist = this.handlePlaylist.bind(this);
  };

    handlePlaylist(event){
      let newPlaylist = false;
      this.setState({choice: event.target.value});
      switch(this.state.choice) {
        case "0":
          this.setState({currentPlaylist: this.state.playlist2});
          newPlaylist = true;
          break;
        case "1":
          this.setState({currentPlaylist: this.state.playlist3});
          newPlaylist = true;
          break;
        case "2":
          this.setState({currentPlaylist: this.state.playlist});
          newPlaylist = true;
          break;
        default:  
      }
      if(newPlaylist === true){
        this.setState({afterFirst: false}); 
      }
    }

    handleClick() {
      if(this.state.afterFirst === false){
        this.setState({afterFirst: true}); 
      }
      let rand = 0;
      let prev = 0;
      let max = this.state.currentPlaylist.length;
      rand = Math.floor(Math.random() * max);
      prev = rand;
      this.setState({ random: rand });
    }

render(){
  const { random, afterFirst, choice, currentPlaylist } = this.state;
  let playlist_options = [
    { id: 1, name: 'Chill'},
    { id: 2, name: 'Pop'},
    { id: 3, name: 'Classical' }
  ];

    return (
        <div className="App-player">
            
           <div>
            <h2>{playlist_options[choice].name} &nbsp;
            <select name="playlist_choice" id="playlist_choice" value={this.state.choice} onChange={this.handlePlaylist}>
              <option value={0}>{playlist_options[0].name}</option>
              <option value={1}>{playlist_options[1].name}</option>
              <option value={2}>{playlist_options[2].name}</option>
            </select>
            {/* <button onClick={this.handlePlaylist}>Select</button> */}
            </h2>
            </div> 

            <div className="banner" style={{ backgroundImage: "url(" + Shuffle + ")"}}>
            <p>{currentPlaylist[random].name} <br></br> {currentPlaylist[random].author}</p>
            <ReactAudioPlayer src={currentPlaylist[random].audio} autoPlay={false} controls onEnded={this.handleClick.bind(this)} autoPlay={afterFirst} />
            <button onClick={this.handleClick.bind(this)}>Shuffle</button>
            </div>

          {currentPlaylist.map(item =>
          <div key={item.id}>
            <div className="banner" style={{ backgroundImage: "url(" + item.img + ")"}}>
          <p>{item.name} <br></br> {item.author}</p>
            <ReactAudioPlayer src={item.audio} autoPlay={false} controls />
            <LikeBtn />
            </div>
          </div>
          )}
        </div>
    );
  }
}
export default Player;