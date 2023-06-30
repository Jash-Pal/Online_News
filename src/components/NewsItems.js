import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewsItems extends Component {

    render() {
        let {title, descriptions, imgUrl, newsUrl, author, date} = this.props

        return (
            <>
                <div className="card my-2">
                    <img src={!imgUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imgUrl} className="card-img-top" alt="My News"/>
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text text-start">{descriptions}...</p>
                        <p className='card-text'><small className='text-muted'> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small> </p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-info">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems