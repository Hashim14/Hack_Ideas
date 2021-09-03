import React from "react";
import { CaretUpFilled } from "@ant-design/icons";
import { Button } from "antd";

const ChallengeCard = ({ value }) => {
  const [voteToggle, setVoteToggle] = React.useState(false);
  const upVote = () => {
    setVoteToggle(true);
    console.log("upVote Clicked", (value.upVotes += 1));
  };
  const [voteCount, setVoteCount] = React.useState(value.upVotes);
  React.useEffect(() => {
    const upVoteCount = (value.upVotes += 0);
    setVoteCount(upVoteCount);
  }, [voteToggle]);

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
          <div className="d-flex justify-content-between">
            <span className="badge bg-success">{value.tags}</span>
            <Button icon={<CaretUpFilled />} onClick={upVote}>
              UPVOTE {voteCount}
            </Button>
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default ChallengeCard;
