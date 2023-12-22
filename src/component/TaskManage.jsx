import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider.jsx";
import { Avatar, message, Modal } from "antd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const TaskManage = () => {
  const { userDetails } = useContext(authContext);
  const { register, handleSubmit } = useForm();
  console.log(userDetails);
  const [isOpen, setIsOpen] = useState(false);
  const onsubmit = (data) => {
    data.email = userDetails?.email;
    console.log(data);
    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: async (data) => {
      await axios.post("http://localhost:3000/add/task", data).then((res) => {
        console.log(res.data);
      });
    },
    onSuccess: (data) => {
      message.success("task created successfully");
      console.log(data);
    },
  });

  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/get/task/${userDetails?.email}`)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [userDetails?.email]);
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const active = [...tasks];
    const complete = [...CompletedTodos];
    const [movedTask] = active.splice(source.index, 1);

    if (destination.droppableId === "complete") {
      // Moving to the "complete" droppable
      complete.splice(destination.index, 0, movedTask);
    } else {
      // Moving to the "todo" droppable
      active.splice(destination.index, 0, movedTask);
    }

    setCompletedTodos([...complete]);
    // Instead of: setTasks(active);
    setTasks([...active]);
  };

  return (
    <>
      <div className="relative bg-yellow-50 flex font-deca  max-h-screen">
        <div className=" bg-white shadow-md h-screen w-60">
          <div className="flex flex-col justify-between h-[90%] ">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <Avatar
                  src={userDetails?.photoURL}
                  className={"w-16 h-16 mb-8"}
                />
                <h1 className="text-xl font-bold leading-none">
                  <span className="text-softBlue">
                    {userDetails?.displayName}
                  </span>
                </h1>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li>
                    <div className="flex text-white bg-softBlue hover:bg-yellow-50 rounded-xl font-bold text-sm  py-3 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                      </svg>
                      Task list
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className=""
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </button>{" "}
              <span className="font-bold text-sm ml-2">Logout</span>
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <main className="ml-60 pt-16   ">
            <div className="px-6 py-8">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-8 mb-5">
                  <h1 className="text-3xl font-bold mb-10">
                    Messaging ID framework development for the marketing branch
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-stretch">
                      <div className="text-gray-400 text-xs">
                        Members
                        <br />
                        connected
                      </div>
                      <div className="h-100 border-l mx-4"></div>
                      <div className="flex flex-nowrap -space-x-3">
                        <div className="h-9 w-9">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://ui-avatars.com/api/?background=random"
                          />
                        </div>
                        <div className="h-9 w-9">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://ui-avatars.com/api/?background=random"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          className="bi bi-chat-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                        onClick={() => setIsOpen(true)}
                      >
                        Open
                      </button>
                      <Modal
                        open={isOpen}
                        footer={null}
                        onCancel={() => setIsOpen(false)}
                      >
                        <form
                          onSubmit={handleSubmit(onsubmit)}
                          className={"px-8 space-y-6 font-deca "}
                        >
                          <h1 className={"text-xl font-bold"}>Add Task</h1>
                          <p>Enter Your Task Details</p>
                          <div className="mb-6 font-deca">
                            <p>Title</p>
                            <input
                              {...register("title")}
                              type="text"
                              id="default-input"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>{" "}
                          <div className="mb-6">
                            <p>Description</p>
                            <input
                              {...register("description")}
                              type="text"
                              id="default-input"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <input
                            type="submit"
                            className={
                              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            }
                          />
                        </form>
                      </Modal>
                    </div>
                  </div>

                  <hr className="my-10" />

                  <div className="grid grid-cols-2 gap-x-20">
                    <Droppable droppableId="todo">
                      {(provided) => (
                        <div
                          className={
                            "border-t-2 border-gray-300 dark:border-gray-600 dark"
                          }
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <p className={"text-center"}>ToDo</p>
                          {tasks &&
                            tasks?.map((data, index) => (
                              <Task key={data.id} task={data} index={index} />
                            ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>

                    <Droppable droppableId="complete">
                      {(provided) => (
                        <div
                          className={
                            "border-t-2 border-gray-300 dark:border-gray-600 dark"
                          }
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <p className={"text-center"}>Complete Task</p>
                          {CompletedTodos.map((data, index) => (
                            <Task key={data._id} task={data} index={index} />
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </DragDropContext>
      </div>
    </>
  );
};

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task._id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            border: "1px solid #000",
            padding: "8px",
            margin: "4px",
            cursor: "move",
          }}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <div className={"flex items-center justify-between"}>
            <p>task.deadline</p>
            <p>task.Priority</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};
