// import React from 'react'

// export const Modal = ({num, img, title}) => (
//   <div id={"Modal-" title} className= "popupContainer">
//     <div className={"popup__content" + num}>
//       <div className="popup__top">
        
//         {/* make carasoul and video demo */}
//         <img src={img} alt={title}/>

//       </div>

//       <div className="popup__bottom">
//         <span>

//         </span>
//         <p>

//         </p>
//       </div>
//     </div>
// {/* think about rename the image neam for the title to match the prject name so you can
//   dynamically change it with onw popup jsx tag  */}    

//   </div>
// )

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;