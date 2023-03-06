import useState from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
// import Card from './components/shared/Card'
// import { NavLink } from 'react-router-dom'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]) //Use spread op to get all the current feedback array and then add new feedback to the front of it!
    }

    const deleteFeedback = (id) => {
        // console.log('App', id)
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
        
    }

    return (
        <>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                         <FeedbackForm handleAdd={addFeedback} />
                         <FeedbackStats feedback ={feedback}/>
                         <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }
                    ></Route>

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post*" element={<Post />} />
                </Routes>
                {/* <Card>
                    <NavLink to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        About
                    </NavLink>
                </Card> */}
                <AboutIconLink />
            </div>
        </Router>
        </>
    )
}

export default App;
