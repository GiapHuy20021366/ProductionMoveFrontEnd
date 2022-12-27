import React from 'react';

function Popup({headerTitle, body, cancel, submit, onSubmit}) {
    return (
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{headerTitle}</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        {body}
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">{cancel}</button>
                        <button className="btn btn-primary" onClick={onSubmit}>{submit}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup