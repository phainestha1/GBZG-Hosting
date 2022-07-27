import React, { useState, useEffect, SetStateAction } from "react";
import type { NextPage } from "next";
import { JSONTypes, loadJSONData } from "../controllers/dataController";
import Image from "next/image";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState<JSONTypes[] | undefined>([]);

  useEffect(() => {
    const configureMainPage = async () => {
      const response: JSONTypes[] = loadJSONData();
      setList(response);
    };

    setTitle("가 보 자 고~");

    configureMainPage();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{title}</h1>
      {list?.map((item) => (
        <div key={item.title}>
          <Image src={item.image} alt="image" width="100" height="100" />
          <h1>{item.title}</h1>
        </div>
      ))}
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
