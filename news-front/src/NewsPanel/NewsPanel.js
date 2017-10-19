import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'text-spinners/spinners.css'

import React from 'react';
import './NewsPanel.css';
import NewsCard from '../NewsCard/NewsCard';
import _ from 'lodash';

class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = { news:[] };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.loadMoreNews();
        this.loadMoreNews = _.debounce(this.loadMoreNews, 3000);
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if(window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
            this.loadMoreNews();
        }
    }

    loadMoreNews() {
        const news_url = 'http://' + window.location.hostname + ':3000/news';
        const request = new Request(news_url, {method: 'GET'});

        fetch(request)
            .then((res) => res.json())
            .then((news) => {
                this.setState({
                    news: this.state.news.concat(news)
                });
            });
    }

    render() {
        const news_list = this.state.news.map(
            function (news) {
                return (
                    <li className='collection-item' key={news.digest}>
                        <NewsCard news = {news} />
                    </li>
                );
            }
        );

        return (
            <div>
                <ul className='collection'>
                    {news_list}
                </ul>
                <div className='loading_section'>
                    <span className='loading'>Loading</span>
                </div>
            </div>
        );
    }
}

export default NewsPanel;