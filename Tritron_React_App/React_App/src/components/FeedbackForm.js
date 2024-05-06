import { useReducer, useState } from 'react';
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

    const sendData = (e) => {
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

        // Here you can send the feedback data to your backend or handle it as required
        console.log("Feedback data:", feedback);
        // Clear the form after submission
        dispatch({ type: 'reset' });
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
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => sendData(e)}>Submit</button>
                
                </div>
            </form>
        </div>
    )
}
