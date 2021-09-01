import React from "react";


const ChallengeCard = ({value}) => {
  return (
    <div>
      {/* {List.map((value) => {
        return ( */}
          <div className="card w-75 m-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="mb-1">{value.title}</h5>
                <small>{value.createdDt}</small>
              </div>
              <p className="card-text">{value.description}</p>
              <div className='d-flex justify-content-between'>
                <span className='badge bg-success'>{value.tags}</span>
                <div type="button">
                  <i className="bi bi-triangle-fill">  UPVOTE  {value.upVotes}</i>
                </div>
              </div>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default ChallengeCard;
