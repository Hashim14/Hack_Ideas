import React from "react";
import { CaretUpFilled } from "@ant-design/icons";
import { Button, Badge, Space } from "antd";

const ChallengeCard = ({ value }) => {
  // console.log(value,"value read")
  const [voteToggle, setVoteToggle] = React.useState(false);
  const upVote = () => {
    setVoteToggle(!voteToggle);
    voteToggle ? (value.upVotes -= 1) : (value.upVotes += 1);
  };

  const [voteCount, setVoteCount] = React.useState(value.upVotes);
  React.useEffect(() => {
    const upVoteCount = value.upVotes;
    setVoteCount(upVoteCount);
    console.log("upvote hook");
  }, [voteToggle]);
  const bgColor = value.tags;
  return (
    <div className="d-flex justify-content-center">
      {/* {List.map((value) => {
        return ( */}
      <div className="card w-50 m-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">{value.title}</h5>
            <small>{value.createdDt}</small>
          </div>
          <p className="card-text">{value.description}</p>
          <div className="d-flex justify-content-between">
            <span className="badge bg-success" style={{ maxHeight: "20px" }}>
              {value.tags}
            </span>

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
