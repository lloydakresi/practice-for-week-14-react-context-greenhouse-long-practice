import { createContext, useContext, useState, useEffect } from "react";

export const ClimateContext = createContext();

export const useClimate = ()=> useContext(ClimateContext);

export default function ClimateProvider({children}){

    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [desiredTemp, setDesiredTemp] = useState(50);
    const [desiredHumidity, setDesiredHumidity] = useState(40);

    useEffect(() => {
        if (desiredTemp === temperature) {return}

        let amount = desiredTemp - temperature < 0 ? -1 : 1;
        let timer = setTimeout(() => {
          setTemperature(temperature + amount);
        }, 1000);

        return () => {
          clearTimeout(timer);
        }
      }, [desiredTemp, temperature]);

      useEffect(() => {
        if (desiredHumidity === humidity) {return}

        let amount = desiredHumidity - humidity < 0 ? -2 : 2;
        let timer = setTimeout(() => {
          setHumidity(humidity + amount);
        }, 1000);

        return () => {
          clearTimeout(timer);
        }
      }, [desiredHumidity, humidity]);

    return(
    <ClimateContext.Provider
    value={{ temperature, setTemperature, humidity, setHumidity }}
    >
        {children}
    </ClimateContext.Provider>
    )
}

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
