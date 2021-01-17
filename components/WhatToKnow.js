const WhatToKnow = (props) => (
    <ul className="info-box">
       <li>
            <h3>Location</h3>
            <p>
              { fldivesite.street}<br />
              { fldivesite.city}, { fldivesite.state}<br />
            </p>
        </li>
        <li>
            <h3>Hours</h3>
            <p>
              { fldivesite.hours}
            </p>
        </li>
        <li>
            <h3>Fees</h3>
            <p>
              { fldivesite.fees}
            </p>
        </li>
    </ul>
)
export default WhatToKnow;