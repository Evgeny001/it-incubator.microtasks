import React from 'react';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export const Site01 = () => {
    return (
        <div>
            <>
                <Header titleForHeader="NEW Header"/>
                <Body titleForBody="NEW Body"/>
                <Footer titleForFooter="NEW Footer"/>
            </>
        </div>
    );
};
