import React, { Component } from 'react';
import loading from '../loading.gif'


export default class Spinner extends Component {
    render() {

        return(
        <div className='justify-content-center text-center'>
            <img src={loading} alt='loading'/>
        </div>
        
        )

    }
}