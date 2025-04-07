'use client';

import React, { useEffect, useState } from 'react';
import Profile from "./components/Profile";
import ProjectsPage from "./components/Projects";
import { baseUrl } from "./lib/utils";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Always listen to scroll
    const handleScroll = () => {
      if (window.scrollY > 500 && !isCollapsed) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCollapsed]);


  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`${baseUrl}/api/projects`);
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      } else {
        console.error('Error fetching projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="flex container mx-auto">
      <Profile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <ProjectsPage projects={projects} isCollapsed={isCollapsed} />
    </main>
  );
}
