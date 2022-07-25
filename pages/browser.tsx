import { GetServerSideProps, NextPage } from "next";
import React, { useEffect } from "react";
import { IncomingHttpHeaders } from "http";
import I from "../components/a";

type Props = {
  browser: string;
};

const index: NextPage<Props> = (props) => {
  useEffect(() => {
    console.log("555555555");
  }, [props]);
  return (
    <div>
      <I browser="" />
      <h1>你的浏览器是 {props.browser}</h1>
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers: IncomingHttpHeaders = context.req.headers;
  const browser = headers["user-agent"];
  return {
    props: {
      browser,
    },
  };
};
