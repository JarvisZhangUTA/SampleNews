import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

import React from 'react';
import './NewsCard.css';

class NewsCard extends React.Component {

    render() {
        return (
            <div className='news-section row' onClick={() => this.redirectToUrl(this.props.news.url)}>
                <h4>{this.props.news.title}</h4>
                <p>{this.props.news.description}</p>
                <p>{this.props.news.time}</p>
            </div>
        );
    }

    redirectToUrl(url) {
        window.open(url, '_blank');
    }
}

export default NewsCard;