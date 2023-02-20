function CommentTile({content, createdAt, author}) {
    return (
        <div className="custom-shadow flex flex-col w-full p-2 ml-3">
            <div className="flex flex-row gap-2 items-center p-3">
                <img
                    src="https://via.placeholder.com/30"
                    alt="avatar"
                    className="w-fit"
                />
                <h1 className=" text-xl font-semibold gap-3">{author}</h1>
            </div>
            <div className="ml-7">{content}</div>
            <small className=" font-light text-base self-end">
                {createdAt}
            </small>
        </div>
    );
}

export default CommentTile;
