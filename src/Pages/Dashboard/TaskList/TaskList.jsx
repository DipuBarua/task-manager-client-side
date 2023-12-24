import TaskCart from "./TaskCart";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const TaskList = () => {
    return (
        <div className=" grid grid-cols-3">


            {/* <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="list">
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                background: snapshot.isDragging ? 'lightblue' : 'white',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            {item.content}
                                            <TaskCart></TaskCart>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext> */}


            <div className=" bg-blue-500">
                <h2 className=" text-2xl font-bold">To-do Tasks List</h2>
                <TaskCart></TaskCart>
            </div>
            <div className=" bg-green-500">
                <h2 className=" text-2xl font-bold">Ongoing Tasks List</h2>
            </div>
            <div className=" bg-amber-500">
                <h2 className=" text-2xl font-bold">Completed Tasks List</h2>
            </div>
        </div>
    );
};

export default TaskList;