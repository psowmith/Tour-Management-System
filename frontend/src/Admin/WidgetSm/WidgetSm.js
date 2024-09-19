import React from 'react';
import './WidgetSm.css';
import newUserApi from '../adminApi/newUserApi';

const WidgetSm = () => {
  const { username } = newUserApi();
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          {username !== null && (
            <>
              <img className='widgetSmImg' src="https://imgs.search.brave.com/vRrTws13r9jDY4EkNZTe6uV6WhoBaE5Y2Q6QOUE6OFc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRY/TmxjaVV5TUhCeWIy/WnBiR1Y4Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg" alt="" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{username}</span>
              </div>
              <button className="widgetSmButton">
                Display
              </button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
