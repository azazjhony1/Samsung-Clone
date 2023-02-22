
import week3 from '../img/week3.png';


const Week3 = () => {
    return (
        <div className="weekContainer">
          <img src={week3}></img>
          <div className="weekTextContainer">
            <h2 className="weekTextHeading">The Frame</h2>
            <h2 className="weekTextdesc">
            Turn your TV lounge into a private art gallery.
            <br/>
            Buy now and get two complimentary bezels of your choice.
            </h2>
            <div className="weekTextBtnContainer">
              <button className="sliderTextBtn weekTextBtn" style={{marginTop: '3em'}}>Buy Now</button>
            </div>
          </div>
        </div>
      );


}


export default Week3;