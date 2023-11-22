import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Greenhouse() {
  const {themeName} = useContext(ThemeContext);
  const theme = themeName === "day" ? dayImage : nightImage;

  return (
    <section>
      <img  className='greenhouse-img'
            src={theme}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
