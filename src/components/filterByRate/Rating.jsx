import React from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ RateInput, setrateInput, isRating }) => {
  return (
    <Flex gap="middle" vertical>
      {isRating ? (
        <Rate tooltips={desc} onChange={setrateInput} value={RateInput} />
      ) : (
        <Rate tooltips={desc} disabled value={RateInput} />
      )}
    </Flex>
  );
};
export default Rating;
