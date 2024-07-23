"use client";

import React from "react";
import { PlaceholdersAndVanishInput } from "./placeholder-and-vanish-input";

export function PlaceHolder({handleChatSubmit}) {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  

  return (
    <div className="">
    
      <PlaceholdersAndVanishInput
        handleChatSubmit={handleChatSubmit}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
