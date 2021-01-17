function ImageList(props) {
    return (
        <div>
            <ul className="image-list">
                { props.children }
            </ul>
        </div>
    )
}
export default ImageList;