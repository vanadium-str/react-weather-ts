import React from 'react';
import Form from "../containers/FormControl";
import Weather from "../containers/Weather";

const Data: React.FC = (): JSX.Element => {

        return (
            <div>
                <Form/>
                <Weather/>
            </div>
        );
}

export default Data;