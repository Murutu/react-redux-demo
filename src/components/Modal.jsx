import React from 'react'

const Modal = () => {
    return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Remove all items from your container</h4>
            <div className="btn-container">
                <button type="button" className="btn confirm-btn">confirm</button>
                <button className="btn clear-btn">cancel</button>
            </div>
        </div>
    </aside>
    )
}

export default Modal