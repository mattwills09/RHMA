import React from "react";

function Visual({ icon, title, children, quarter }) {
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>
                    <strong>
                        <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
                        {/* <img src={require('./Dataviz.png')} /> */}
                    </strong>
                </h3>
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Visual;
