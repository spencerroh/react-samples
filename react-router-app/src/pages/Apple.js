import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { elapseFrom, elapseWhile } from '../libs/logging';
import { $state } from '../states';

const Apple = props => {
    const productIdRef = useRef(null);
    const [productId, setProductId] = useRecoilState($state.PRODUCT_ID);
    const onClick = () => {
        setProductId(productIdRef.current.value);
    }

    elapseWhile("check", () => {
        let t = 0;
        for (let i = 0; i < 100000; i++) {
            t = t + i;
        }
    });

    const elapseTo = elapseFrom("elapseFrom");
    var t = 0;
    for (let i = 0; i < 100000; i++) {
        t = t + i;
    }
    elapseTo();

    return (
        <div>
            <span>{productId}</span>
            <input type="text" ref={productIdRef}/>
            <button onClick={onClick}>Change</button>
        </div>
    );
};

Apple.propTypes = {
    
};

export default Apple;