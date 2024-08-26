import TabList from "./TabList";
import Header from "./Header";
import "./Container.css";
import { useState } from "react";
import TabContent from "./TabContent";

function Container() {
  const [content, setContent] = useState(
    localStorage.getItem("stored_item")
      ? JSON.parse(localStorage.getItem("stored_item"))
      : {}
  );

  const dataList = [
    {
      id: 1,
      name: "Tab1",
      title: "Content1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.",
    },
    {
      id: 2,
      name: "Tab2",
      title: "Content2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.",
    },
    {
      id: 3,
      name: "Tab3",
      title: "Content3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.",
    },
    {
      id: 4,
      name: "Tab4",
      title: "Content4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptate nulla illum, molestiae numquam! Libero quisquam harum officia, facilis facere nemo alias ab consequatur ex laborum similique dolorem debitis? Consectetur, officiis nulla beatae qui earum vitae aliquam impedit eius omnis harum id soluta at nesciunt alias ab. Amet, error.",
    },
  ];
  return (
    <>
      <Header />
      <TabList data={dataList} setContent={setContent} />
      <TabContent content={content} />
    </>
  );
}

export default Container;
