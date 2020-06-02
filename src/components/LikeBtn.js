import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
class LikeBtn extends React.Component {
    state = {
      likes: false
    };
  
    addLike = () => {
     if(this.state.likes === false){
      this.setState({likes: true});
     } else {
      this.setState({likes: false});
     }
    };
  
    render() {
      const likes = this.state.likes;
      if (likes === false) {
        return (
          <div>
            <button
              className="likebtn"
              onClick={this.addLike}
            >
              <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#9eadc8" }} />
            </button>
          </div>
        );
      }
      if (likes === true) {
        return (
          <div>
            <button className="likebtn" onClick={this.addLike}>
              <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "red" }} />
            </button>
          </div>
        );
      }
    }
  }


export default LikeBtn;