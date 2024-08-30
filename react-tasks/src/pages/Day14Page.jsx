// src/pages/Day14Page.jsx
import React from "react";
import Card from "../components/Day14/Card";

const Day14Page = () => {
  const cardData = {
    title: "Beautiful Landscape",
    description: "A beautiful view of mountains during sunset.",
    imageUrl: "https://example.com/landscape.jpg",
  };

  return (
    <div>
      <h1>Day 14 Task</h1>
      <Card
        title={cardData.title}
        description={cardData.description}
        imageUrl={cardData.imageUrl}
      />
    </div>
  );
};

export default Day14Page;
