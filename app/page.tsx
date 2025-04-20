'use client';

import React, { useEffect, useState } from 'react';
import Profile from "./components/Profile";
import ProjectsPage from "./components/Projects";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Always listen to scroll
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        if (window.scrollY > 500 && !isCollapsed) {
          setIsCollapsed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCollapsed]);


  return (
    <main className="flex flex-col lg:flex-row container mx-auto">
      <Profile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <ProjectsPage isCollapsed={isCollapsed} />
    </main>
  );
}
