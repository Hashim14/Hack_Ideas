import React, { useState, useEffect } from "react";
import ChallengeCard from "./challengeCard";
import Tasks from "../challenges.json";
import { Button } from "antd";
import CreateForm from "./createForm";

const List = () => {
  const [list, setList] = useState(Tasks);
  const [voteOrder, setVoteOrder] = useState(false);
  const [dateOrder, setDateOrder] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const clonedList = [...list];

  useEffect(() => {
    sortDate();
  }, []);

  const sortDate = () => {
    dateOrder ? setDateOrder(true) : setDateOrder(true);
    setVoteOrder(false);
    const sortByDate = clonedList.sort((a, b) => {
      var aa = a.createdDt.split("-").reverse().join(),
        bb = b.createdDt.split("-").reverse().join();
      return aa > bb ? -1 : aa < bb ? 1 : 0;
    });
    console.log(sortByDate, "sort by date");
    setList(sortByDate);
    console.log(dateOrder, "vote off date on");
  };

  const voteToggle = () => {
    voteOrder ? setVoteOrder(true) : setVoteOrder(true);
    setDateOrder(false);
    const sortByVote = clonedList.sort((a, b) => {
      if (b.upVotes > a.upVotes) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortByVote);
    setList(sortByVote);
    console.log(dateOrder, "vote on date off");
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    clonedList.push(values);
    setList(clonedList);
    setVisible(false);
  };

  return (
    <div>
      <div style={{ alignContent: "center" }}>
        <div
          className="d-flex justify-content-center"
          style={{ marginLeft: "29vw" }}
        >
          <Button
            onClick={() => {
              setVisible(true);
            }}
            style={{ marginRight: "10px" }}
          >
            ADD IDEAS
          </Button>
          <div
            type="button"
            className={dateOrder ? "fw-bolder" : "fw-light"}
            onClick={sortDate}
            style={{ marginTop: "5px", marginLeft: "6px" }}
          >
            NEWEST
          </div>
          <div
            type="button"
            className={voteOrder ? "fw-bolder" : "fw-light"}
            onClick={voteToggle}
            style={{ marginTop: "5px", marginLeft: "4px" }}
          >
            POPULAR
          </div>
        </div>
        <div style={{ maxHeight: "calc(125vh - 350px)", overflowX: "hidden" }}>
          {list.map((value, key) => {
            return <ChallengeCard key={value.id} value={value} />;
          })}
        </div>
      </div>
      <CreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default List;
