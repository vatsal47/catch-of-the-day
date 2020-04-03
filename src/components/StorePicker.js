import React, {Fragment} from 'react'; 

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Please Enter Store</h2>
                <input type="text" placeholder="Store Name"  required/>
                <button type="submit">Visit Store -></button>
            </Fragment>
        )
    }
}

export default StorePicker