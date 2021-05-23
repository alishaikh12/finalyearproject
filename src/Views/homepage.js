import React from 'react';
import InfoHomepage from './Homepage/infoHomepage'; 
import ChartHomepage from './Homepage/chartsHomepage';
import Pakistanmap from './Homepage/pakistanmap';

export default function Homepage(){
    return(
        <div>
             {/* First component infoSection
                2) 2-3 chaRTS load hon ge
                3) pakistan map index hoga selectable hoga, 
*/}

            {/* info section of the homepage carousel with information of food insecurity */}
            <InfoHomepage/>
            {/* charts load ho ge jo food production food consumption and population growth ke charts dekha rahe ho ge */}
            <ChartHomepage/>
            {/* Pakistan ka map ho ga jis me province select kerne se data show ho ga */}
            <Pakistanmap/>
            

        </div>
    );
}