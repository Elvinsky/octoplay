function NewsTile({width, height}) {
    return (
        <img
            src={`https://via.placeholder.com/${width}x${height}?text=News+Placeholder`}
            alt="news"
            className=" transition-all duration-300 hover:scale-105 hover:shadow"
        />
    );
}

export default NewsTile;
