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
  // console.log(voteOrder, "vote");

  const sortDate = () => {
    dateOrder ? setDateOrder(true) : setDateOrder(true);
    setVoteOrder(false);
    // setList(list);
    const sortByDate = list.sort((a, b) => {
      // if (b.createdDt > a.createdDt && dateOrder) {
      //   return 1;
      // } else {
      //   return -1;
      // }
      var aa = a.createdDt.split("-").reverse().join(),
        bb = b.createdDt.split("-").reverse().join();
      return aa > bb ? -1 : aa < bb ? 1 : 0;
    });
    console.log(sortByDate, "sort by date");
    setList(sortByDate);
    console.log(dateOrder, "vote off date on");
  };

  // useEffect(() => {

  // }, [voteOrder]);

  // useEffect(() => {
  //   const sortByDate = list.sort((a, b) => {
  //     if (b.createdDt > a.createdDt && dateOrder) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  //   console.log(sortByDate, "sort by date");
  //   setList(sortByDate);
  // }, [dateOrder]);

  const [visible, setVisible] = React.useState(false);

  const dayjs = require("dayjs");

  let now = dayjs();

  console.log(now.format("DD-MM-YYYY"));

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    clonedList.push(values);
    setList(clonedList);
    setVisible(false);
  };

  // const [test, setTest] = useState(false);
  // const toggler = () => {
  //   test ? setTest(false) : setTest(true);
  // };

  return (
    <div>
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
        {list.map((value, key) => {
          return <ChallengeCard key={value.id} value={value} />;
        })}
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
