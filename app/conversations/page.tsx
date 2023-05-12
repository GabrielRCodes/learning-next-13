"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
import useRoutes from "../hooks/useRoutes";

const Home = () => {

  const { isOpen } = useConversation();

  const routes = useRoutes()

  return (
    <div
      className={clsx(`
        "lg:pl-80 h-full lg:block"
      `,
        !isOpen ? "block" : "hidden"
      )}
    >
      <EmptyState />
    </div>
  )
}

export default Home