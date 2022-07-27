import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("가 보 자 고~");
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{title}</h1>
      <h1>가보자고~</h1>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
