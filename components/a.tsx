import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { IncomingHttpHeaders } from "http";

type Props = {
  browser: string;
};

const index: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>你的浏览器是 {props.browser}</h1>
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("77777777777777");
  const headers: IncomingHttpHeaders = context.req.headers;
  const browser = headers["user-agent"];
  return {
    props: {
      browser,
    },
  };
};
