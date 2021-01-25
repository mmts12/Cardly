import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

export function StackMenu({ onCloseMenuModal, onRemoveStack }) {
  return (
    <>
      <div className="bg-modal-stack" onClick={onCloseMenuModal}></div>
      <div className="stack-menu-modal">
        <div className="stack-menu-header">
          <span className="title-stack">List Actions</span>

          <div>
            <span className="close-menu-btn" onClick={onCloseMenuModal}>
              <CloseIcon />
            </span>
          </div>
        </div>
        <hr />
        <ul>
          <li>Add Card...</li>
          <li>Copy List...</li>
          <li>Move List...</li>
          <li className="pointer" onClick={onRemoveStack}>
            Archive This List
          </li>
        </ul>
      </div>
    </>
  );
}
