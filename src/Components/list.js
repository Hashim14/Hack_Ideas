import React, { useState, useEffect } from "react";
import ChallengeCard from "./challengeCard";
import Tasks from "../challenges.json";
import { Button } from "antd";
import CreateForm from "./createForm";

const List = () => {
  const [list, setList] = useState(Tasks);
  const [voteOrder, setVoteOrder] = useState(false);
  const [dateOrder, setDateOrder] = useState(true);

  const clonedList = [...list];

  const voteToggle = () => {
    voteOrder ? setVoteOrder(true) : setVoteOrder(true);
    setDateOrder(false);
  };
  // console.log(voteOrder, "vote");
  
  const sortDate = () => {
    dateOrder ? setDateOrder(true) : setDateOrder(true);
    setVoteOrder(false);
    console.log(dateOrder, "date");
  };

  useEffect(() => {
    const sortByVote = list.sort((a, b) => {
      if (b.upVotes > a.upVotes && voteOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortByVote);
    setList(sortByVote);
  }, [voteOrder]);

  useEffect(() => {
    const sortByDate = list.sort((a, b) => {
      if (b.createdDt > a.createdDt && dateOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortByDate, "sort by date");
    setList(sortByDate);
  }, [dateOrder]);

  const [visible, setVisible] = React.useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    clonedList.push(values);
    setList(clonedList);
    setVisible(false);
  };

  const [test, setTest] = useState(false);
  const toggler = () => {
    test ? setTest(false) : setTest(true);
  };

  return (
    <>
      <div style={{ marginLeft: "250px", alignContent: "center" }}>
        <div className="d-flex justify-content-center">
          {test ? (
            <div type="button" onClick={toggler}>
              test
            </div>
          ) : (
            <div className="text text-muted" type="button" onClick={toggler}>
              test
            </div>
          )}
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            Button
          </Button>
          <div
            type="button"
            className={dateOrder ? "fw-bolder" : "fw-light"}
            onClick={sortDate}
          >
            Created Date
          </div>
          <span className="text-muted"> | </span>
          <div
            type="button"
            className={voteOrder ? "fw-bolder" : "fw-light"}
            onClick={voteToggle}
          >
            Up Vote
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
