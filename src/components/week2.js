import week2 from '../img/week2.png'


const Week2 = () => {
  return (
    <div className="weekContainer">
      <img src={week2}></img>
      <div className="weekTextContainer">
        <h2 className="weekTextHeading">Galaxy Z Fold4 | Flip4</h2>
        <h2 className="weekTextdesc">
        Unfold your world.
        </h2>
        <div className="weekTextBtnContainer">
          <button className="sliderTextBtn weekTextBtn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Week2;
