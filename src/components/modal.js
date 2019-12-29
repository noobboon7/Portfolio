import React from 'react';
import ReactDOM from 'react-dom';

// Portals allow React components to render in another part of the DOM that is outside of their parent component.
// Portal to mount our Modal component to the end of the document.body element, rather than as a child of another component.
const Modal = ({ isShowing, hide, projectName, descrp, sub, stat, num }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">

      <div className={"modal__picture modal__picture--" + num}>&nbsp;</div>

        <h2 className="modal__title">{projectName}</h2>
        <h3 className="modal__sub-title">{sub}</h3>
        <hr/>

        <p className="modal__about"> {descrp} </p>

        <p className="modal__stat"> Status: {stat} </p>

        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      </div>
      
    </div>
  </>, document.body
) : null;

export default Modal;