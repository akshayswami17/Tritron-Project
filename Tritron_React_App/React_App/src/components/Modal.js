import React from 'react';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
};

export default Modal;
