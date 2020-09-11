import React from 'react'

const Button = () => {
    return(
        <React.Fragment>
            <button className="btn waves-effect waves-light red" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
        </React.Fragment>
    )
}

export default Button