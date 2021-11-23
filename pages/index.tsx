import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header/Header";
import NewTaskMenu from "../components/NewTaskMenu/NewTaskMenu";

const Home: NextPage = () => {
  const [newTaskMenuActive, setNewTaskMenuActive] = useState(false);
  return (
    <div>
      <Header
        setNewTaskMenuActive={setNewTaskMenuActive}
        newTaskMenuActive={newTaskMenuActive}
      />
      <AnimatePresence>{newTaskMenuActive && <NewTaskMenu />}</AnimatePresence>
    </div>
  );
};

export default Home;
