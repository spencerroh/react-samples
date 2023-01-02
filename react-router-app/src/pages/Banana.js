import React from 'react';
import LightIndicator from '../components/LightIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import StateChanger from '../components/StateChanger';
import UpBeepIndicator from '../components/UpBeepIndicator';

const Banana = () => {
    return (
        <div>
            <div>
                <LightIndicator />
                <ErrorIndicator />     
                <UpBeepIndicator /> 
            </div>
            <div>
                <StateChanger />
            </div>
        </div>
    );
};

export default Banana;