import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS Files/FeedbackForm.css';

export default function FeedbackForm() {
    const init = {
        username: "",
        ratings: "",
        comments: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val }
            case 'reset':
                return init;
            default:
                return state;
        }
    }

    const [feedback, dispatch] = useReducer(reducer, init);
    const [errorMsgs, setErrorMsgs] = useState(init);
    const navigate = useNavigate();

    const sendFeedback = (e) => {
        e.preventDefault();
        const requiredFields = ['username', 'ratings', 'comments'];
        const newErrorMsgs = { ...errorMsgs };
    
        for (const field of requiredFields) {
            newErrorMsgs[field] = "";
        }
    
        for (const field of requiredFields) {
            if (!feedback[field]) {
                newErrorMsgs[field] = "This field is required";
            }
        }
    
        // Check if any error messages exist
        for (const field of requiredFields) {
            if (newErrorMsgs[field]) {
                setErrorMsgs(newErrorMsgs);
                return;
            }
        }
    
        // Convert ratings to an integer
        const ratingsInt = parseInt(feedback.ratings);
        if (isNaN(ratingsInt)) {
            console.error("Invalid rating value:", feedback.ratings);
            return;
        }
    
        // Send feedback data to the server
        const feedbackData = {
            username: feedback.username,
            ratings: ratingsInt,
            comments: feedback.comments
        };
    
        console.log("Feedback data:", feedbackData); // Log the feedback data
    
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feedbackData) // Stringify the feedback data here
        };
    
        fetch("http://localhost:8080/feedbackform", reqOptions)
            .then(resp => {
                if (resp.ok) {
                    console.log(resp.status);
                    return resp.json();
                } else {
                    throw new Error("Server error");
                }
            })
            .then(data => {
                alert("Feedback submitted successfully!");
                navigate('/');
            })
            .catch(error => {
                console.error("Error submitting feedback:", error);
            });
    }
    
    
    

    return (
        <div className="feedback-container">
            <h1 className='feedback-heading'>Feedback Form</h1>
            <form>
                <div className="form-group-fb">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" name="username"
                        value={feedback.username}
                        onChange={(e) => dispatch({ type: 'update', fld: 'username', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.username}</div>
                </div>
                <div className="form-group-fb">
                    <label htmlFor="ratings" className="form-label">Ratings:</label>
                    <select className="form-control" id="ratings" name="ratings"
                        value={feedback.ratings}
                        onChange={(e) => dispatch({ type: 'update', fld: 'ratings', val: e.target.value })}
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.ratings}</div>
                </div>
                <div className="form-group-fb">
                    <label htmlFor="comments" className="form-label">Comments:</label>
                    <textarea className="form-control" id="comments" name="comments"
                        value={feedback.comments}
                        onChange={(e) => dispatch({ type: 'update', fld: 'comments', val: e.target.value })}
                        required
                    />
                    <div className="error-msg" style={{ color: 'red' }}>{errorMsgs.comments}</div>
                </div>
                <div className="form-row">
                    <button type="reset" className="btn btn-danger mb-3" onClick={() => dispatch({ type: 'reset' })}>Clear</button>
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => sendFeedback(e)}>Submit</button>
                </div>
            </form>
        </div>
    );
}
