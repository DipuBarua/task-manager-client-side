
const TaskCart = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200 mt-5">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    );
};

export default TaskCart;