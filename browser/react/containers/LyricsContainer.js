import React from 'react'
import store from '../store';
import Lyrics from '../components/Lyrics'
import {setLyrics} from '../action-creators/lyrics';
import axios from 'axios';


export default class LyricsContainer extends React.Component {

  constructor (){
    super();
      this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState(store.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({songQuery: song})
  }

  handleSubmit(){

      if (this.state.artistQuery && this.state.songQuery) {
      console.log(this.state);
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
      .then(response => {
          const setLyricsAction = setLyrics(response.data.lyric);
          store.dispatch(setLyricsAction);
        });

      }

      // .then(res => res.map(r => r.data))
      // .then(data => this.onLoad(...data));

  }


  render() {

    return (
      <Lyrics
      text={this.state.text}
      setArtist={this.setArtist}
      setSong={this.setSong}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
      />
    )

  }

}

