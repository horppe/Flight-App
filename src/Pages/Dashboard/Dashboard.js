import React, { Component } from 'react';
import "./Dashboard.css";
import axios from 'axios';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                : 'none',
      background            : "none",
    }
  };
  
export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    state = {
       topStates: [],
       allStates: [],
       modalIsOpen: true
    }

    openModal = () => {
    this.setState({modalIsOpen: true});
    }
    
    afterOpenModal = () => {
    // references are now sync'd and can be accessed.
        
    }
    
    closeModal = () => {
    this.setState({modalIsOpen: false});
    }

    componentDidMount = () => {
        axios.get("https://opensky-network.org/api/states/all").then(res => {
            const states = res.data.states;
            const obj = {};
            // Append all same country objects into an array in the same property
            states.forEach(state => {
                if(state[2]){
                    if(obj[state[2]]){
                        obj[state[2]] = [ ...obj[state[2]], state ];
                    } else {
                        obj[state[2]] = [ state ];
                    }
                }
            })

            // convert object into array
            let arr = []
            Object.keys(obj).forEach(key => arr.push(obj[key]))
            // sort array
            arr = arr.sort((a, b) => b.length - a.length)

            this.setState({allStates: arr, topStates: arr.slice(0, 10)})
          //  console.log(arr)
        }).catch(err => console.log(err))
    }

    handleImageSelect = (image) => {
        console.log("Image", image)
    }
    handleThumbnailClick = (image) => {
        console.log("thumbnail", image)
    }

    onClickState = stateArray => {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
        console.log("State array", stateArray)
    }

  

    render = () => {
        const {topStates} = this.state;
        console.log("Top States", topStates )
        return (
            <div className="dashboard-container">
                <div className="sidebar">
                    <h3>Flight App</h3>
                </div>

                <div className="content">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
            
                   <div className="modal-container">
                       <div className="section">
                            <div className="info-row"> 
                                <div>
                                Departing flights in the last 5-minutes:
                                </div>
                                <div>
                                Not clear / Lack of API &#128542;
                                </div>
                            </div>

                            <div className="info-row"> 
                                <div>
                                Arriving flights in the last 5-minutes:
                                </div>
                                <div>
                                Not clear / Lack of API &#128542;
                                </div>
                            </div>

                            <div className="info-row"> 
                                <div>
                                Flight info:
                                </div>
                                <div>
                                    Not clear / Lack of API &#128542;
                                </div>
                               
                            </div>
                       </div>
                       
                   </div>
                    
                    </Modal>

                    <div className="images">
                        

                        {
                            this.state.topStates.length <= 0 ? (
                                <p>Loading...</p>
                            ) : this.state.topStates.map(state => (
                                <div onClick={() => this.onClickState(state)} className="image">
                                    <img  src="https://4brf13430svm3bnu053zbxvg-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/JFK-Airport-752x348.jpg" />
                                    <div className="image-text">{state[0][2]}</div>
                                </div>
                            ))
                        }
                       
                    </div>
                </div>
            </div>
        )
    }
}