import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static propTypes = {
        country: PropTypes.string.isRequired,
        pagesize: PropTypes.number,
    }

    static defaultProps = {
        country: 'in',
        pagesize: '6',
    }

    changeCase = (word) => {
        return word.toUpperCase();
    }


    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.changeCase(this.props.category)} - News`
    }

    async update() {
        this.props.changeProgress(10);

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=900a7fda48434cb0a1cca79541834bb8&page=${this.state.page}&pagesize=${this.props.pagesize}`;

        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.changeProgress(30);
        let parsedata = await data.json();
        this.props.changeProgress(70);
        this.setState({

            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false

        })
        this.props.changeProgress(100)

        console.log(parsedata)
    }

    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=900a7fda48434cb0a1cca79541834bb8&page=${this.state.page}&pagesize=${this.props.pagesize}`;

        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({

            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,

        })

    }

    async componentDidMount() {
        this.update()
    }

    // it runs after the render (check the console) LIFECYCLE MEATHODS
    // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=900a7fda48434cb0a1cca79541834bb8&page=1&pagesize=${this.props.pagesize}`;

    // let data = await fetch(url);
    // let parsedata = await data.json();
    // this.setState({

    //     articles: parsedata.articles,
    //     totalResults: parsedata.totalResults,
    //     loading: false

    // })

    // console.log('parsedata')
    // console.log(parsedata)
    // this.update()

    // }

    // handlePre = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=900a7fda48434cb0a1cca79541834bb8&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;

    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     this.setState({

    //         page: this.state.page - 1,
    //         articles: parsedata.articles,
    //         loading: false

    //     })
    // }

    // handleNext = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=900a7fda48434cb0a1cca79541834bb8&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;

    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedata = await data.json();
    //         this.setState({

    //             page: this.state.page + 1,
    //             articles: parsedata.articles,
    //             loading: false

    //         })
    //     }
    // }



    render() {
        console.log('render')              //runs before componentDidMount

        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center'> My Daily News - {this.changeCase(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <hr></hr>
                    {/* npm i install react-infinite-scroll-component */}
                    <InfiniteScroll
                        // Scrolling Element  (https://codesandbox.io/s/yk7637p62z?file=/src/index.js:672-1024)
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length != this.state.totalResults}
                        loader={<Spinner />}>

                        {/* Element that comes after scrolling  */}
                        <div className='container'>
                            <div className='row'>
                                {this.state.articles.map((e) => {
                                    return <div className='col-md-4 col-sm-8' key={e.url}>
                                        <NewsItems title={e.title ? e.title.slice(0, 45) : ""} imgUrl={e.urlToImage} descriptions={e.description ? e.description.slice(0, 90) : ""} newsUrl={e.url} author={e.author} date={e.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>

                    </InfiniteScroll>


                    {/* Buttons */}
                    {/* <div className='container d-flex justify-content-between'>

                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={() => {
                            this.setState({
                                page: this.state.page - 1
                            }); this.update()
                        }}> &larr; Previous</button>

                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={() => { this.setState({ page: this.state.page + 1 }); this.update() }}> Next &rarr;</button>

                    </div> */}
                </div>
            </>
        )
    }
}

export default News;