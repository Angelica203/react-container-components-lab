// Code MovieReviews Here
import React, { Component } from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'


// const MovieReviews =({reviews}) => (
//     <div className="review-list">
//         <{reviews.map((review)}
           
//     </div>
// )

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>
