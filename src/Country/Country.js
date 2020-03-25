import React from 'react';
import LineChart from '../Chart/LineChart';
const Country  = ({countryData}) =>{
    const isData = () => {
        if(countryData && countryData.location && countryData.location.timelines) {
            return true
        }
        return false;
    }
    return (
        <>
        {isData() && (
             <div>
                 <LineChart data={countryData} />
             </div>
        )}
        </>
       
    )
}
export default Country;