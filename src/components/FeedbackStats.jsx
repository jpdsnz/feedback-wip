import PropTypes from 'prop-types'
function FeedbackStats({ feedback }) {
    //Calculate Ratings average
    let average = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0)

    average = average.toFixed(1).replace(/[.,]0$/, '') //Limit to only one decimal place and regex to remove trailing zeroes    
    // console.log(average)



  return (
    <div className="feedback-stats">FeedbackStats
        <h4>{FeedbackStats.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes ={
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats