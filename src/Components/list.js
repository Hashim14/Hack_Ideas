import React, { useState, useEffect } from "react";
import ChallengeCard from "./challengeCard";
import Tasks from "../challenges.json";
import { Button } from "antd";
import CreateForm from "./createForm";

const List = () => {
  const [list, setList] = useState(Tasks);

  const [voteOrder, setVoteOrder] = useState(false);
  const [istoggle, setIsToggle] = useState(false);
  const clonedList = [...list];
  const voteToggle = () => {
    // setIsToggle(!istoggle);
    setVoteOrder(true);
    console.log(voteOrder, "vote");
  };

  // useEffect(() => {
  //   const sortByVote = list.sort((a, b) => {
  //     return b.upVotes - a.upVotes;
  //   });
  //   console.log(sortByVote);
  //   setList(sortByVote);
  // }, [voteToggle]);

  const [dateOrder, setDateOrder] = useState(true);
  const [dateToggle, setDateToggle] = useState(false);
  const sortDate = () => {
    setDateToggle(!dateToggle);
    setDateOrder(dateToggle);
    console.log(dateOrder, "vote");
  };

  useEffect(() => {
    const sortByDate = list.sort((a, b) => {
      return b.createdDt - a.createdDt;
    });
    console.log(sortByDate);
    setList(sortByDate);
  }, [sortDate]);

  const [visible, setVisible] = React.useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    clonedList.push(values);
    setList(clonedList);
    setVisible(false);
  };

  return (
    <>
      <div style={{ marginLeft: "250px", alignContent: "center" }}>
        <div className="d-flex justify-content-center">
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            Button
          </Button>
          <div type="button" onClick={sortDate}>
            Created Date
          </div>
          <span className="text-muted"> | </span>
          <div type="button" onClick={voteToggle}>
            {voteOrder === false ? <mark>Up Vote</mark> : "Up Vote"}
          </div>
        </div>
        {list.map((value) => {
          return <ChallengeCard value={value} />;
        })}
      </div>
      <CreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default List;
