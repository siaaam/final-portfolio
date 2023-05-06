import AuthorInfo from "@components/Sections/AuthorInfo";
import RecentBlogs from "@components/Sections/RecentBlogs";
import RecentNotes from "@components/Sections/RecentNotes";
import RecentProjects from "@components/Sections/RecentProjects";
import React from "react";
export default function Home() {
  return (
    <>
      <AuthorInfo />
      <RecentNotes />
      <RecentBlogs />
      <RecentProjects />
      {/* <Line /> */}
    </>
  );
}
