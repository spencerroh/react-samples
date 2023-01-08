import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { random } from 'lodash';
import ICON_TRAVEL from '../assets/icon-travel.png';

const Circle = styled.div`
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 10px solid black;
    border-radius: 50%;
    background-color: red;
    &::before {
        content: "";
        position: relative;
        display: block;
        left: 0px;
        top: 0px;
        background-color: blue;
        width: 50px;
        height: 50px;

    }
    &::after{
        content: "안녕하세요.asdfjlkjasfdoijasdofijoasdflkjsadfojosafdij 반가워요";
    }
`

const CircleComponent = () => {
    return (
        <div>
            <Circle role="checkbox" aria-labelledby='circle_label'/>
        </div>
    );
}

const Icon = styled.img`
    width: 1em;
    height: 1em;
`

const Title = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: -8px 0px 0px 0px;
    padding: 0px 0px 8px 0px;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;

    & > *:not(img) {
        flex-grow: 1;
    }

    & > img {
        flex-grow: 0;
        width: 1.25em;
        height: 1.25em;
    }
`


const Card = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    width: 300px;
    border: 1px solid #cccccc;
    border-radius: 16px;
    padding: 16px 8px;

    &:empty {
        padding-bottom: 0px;
    }
`

const Carrot = props => {
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("안녕?");
    const [status2, setStatus2] = useState("안녕?");
    const onClick = () => {
        const animal = ["고양이", "사자", "호랑이", "코끼리", "감자", "참외", "딸기"]

        let i = 0;
        do {
            i = random(0, animal.length - 1, false);
        } while (animal[i] === status);

        setStatus(animal[i]);
    }

    function delay(func, delayInMS = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(func());
            }, delayInMS);
        });
    }

    useEffect(() => {
        const func = async () => {
            const status = await delay(() => {
                return "고양이";
            });

            setStatus(status);
            setLoading(false);
        };
        func();
    }, []);

    return loading ? (
        <div>불러오는 중...</div>
    ) : (
        <div lang='ko' role="alert" aria-live='polite' aria-label={status}>
            <CircleComponent />
            <CircleComponent />
            <button onClick={() => onClick()}>Hit</button>
            <button onClick={() => {setStatus2({id: 10})}}>Hit</button>

            <div>
            <Card>
                <Title>
                    <Icon src={ICON_TRAVEL} />
                    <span>이것은 제목</span>
                    <Icon src={ICON_TRAVEL} />
                </Title>
            </Card>
            </div>    
        </div>
        
    );
};

Carrot.propTypes = {
    
};

export default Carrot;