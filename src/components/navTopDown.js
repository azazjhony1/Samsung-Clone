
import './navTopDown.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';




const NavTopDown = (props) => {
    const [shrink, setShrink] = useState(false);
    const [expand, setExpand] = useState(true);

    

    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="transition"
      >
        <div className={!expand ? `transContainer liftUp` : `transContainer`} onMouseLeave={() => {
            setShrink(true);
            setExpand(false);
            props.setDown(false);
        }}>

          <p>{props.expand}</p>

        </div>
      </CSSTransition>
    )

}

export default NavTopDown;