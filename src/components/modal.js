import React from 'react';
import ReactDOM from 'react-dom';

// Portals allow React components to render in another part of the DOM that is outside of their parent component.
// Portal to mount our Modal component to the end of the document.body element, rather than as a child of another component.
const Modal = ({ isShowing, hide, projectName, descrp, stat }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h2>{projectName}</h2>
        <p>
          {descrp}
        </p>
        <p>Status: {stat}</p>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;