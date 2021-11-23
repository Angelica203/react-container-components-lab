import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'aHWEeZeFGSzwr8eRlBsylqdcjLipdmfw';
const URL ='https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(){
    super()
   
    
    this.state = {
        reviews: []
    }
}
componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(response => this.setState({reviews: reviews}));
}
render(){
    return(
        <div className="latest-movie-reviews">
            <h2>The Latest Reviews:</h2>
            <MovieReviews reviews={this.state.review}/>
        </div>
        );
    }
}

export default LatestMovieReviewsContainer;