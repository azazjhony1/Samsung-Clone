
import './something.css';
import searchIcon from '../img/searchIcon.png';
const Something = () => {
    return (
        <div className='somethingContainer'>
            <div className='question'>
                <p className='questionHeading'>Looking for Something else?</p>
            </div>
            <div className='searchContainer'>
                <div className='search'>
                    <img className='searchIcon' src={searchIcon} />
                    <input className='searchInput' type='text' placeholder='Search Keyword'/>
                </div>
            </div>

            <div className='searchBtnContainer'>
                <ul className='searchBtnList'>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>Galaxy Z Fold4</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>Galaxy Z Flip4</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>Galaxy Tab S8</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>QLED 8k</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>QLED 4k</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>Washing Machine</button>
                    </li>
                    <li className='searchBtnLi'>
                        <button className='searchBtn'>One Door Refrigerator</button>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Something;