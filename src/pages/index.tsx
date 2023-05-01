import AuthorInfo from "@components/Sections/AuthorInfo";
import RecentNotes from "@components/Sections/RecentNotes";
import React, { useEffect, useState } from "react";
export default function Home() {
  return (
    <>
      <AuthorInfo />
      <RecentNotes />
    </>
  );
}
