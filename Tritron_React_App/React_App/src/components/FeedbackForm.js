// // import React, { useState } from 'react';

// // const FeedbackForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     feedback: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     fetch('http://localhost:8080/submitFeedback', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log('Feedback submitted successfully:', data);
// //         // You can add further logic here, such as showing a success message.
// //       })
// //       .catch(error => console.error('Error submitting feedback:', error));
// //   };

// //   return (
// //     <div>
// //       <h2>Feedback Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="name">Name:</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="feedback">Feedback:</label>
// //           <textarea
// //             id="feedback"
// //             name="feedback"
// //             value={formData.feedback}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Submit Feedback</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default FeedbackForm;



// // FeedbackForm.css
// /* Add your custom styles here */

// // FeedbackForm.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './FeedbackForm.css'; // Import custom CSS

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     feedback: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://localhost:8080/submitFeedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Feedback submitted successfully:', data);
//         // You can add further logic here, such as showing a success message.
//       })
//       .catch(error => console.error('Error submitting feedback:', error));
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="feedback" className="form-label">Feedback:</label>
//           <textarea
//             id="feedback"
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit Feedback</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;




// FeedbackForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './FeedbackForm.css'; // Import custom CSS

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    ratings: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Feedback submitted successfully:', data);
        // You can add further logic here, such as showing a success message.
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ratings" className="form-label">Ratings:</label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comments" className="form-label">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
