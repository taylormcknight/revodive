function ImageGrid(props) {
    return (
        <div className="grid-wrapper">
            <ul className={"grid photo-grid " + " " + props.className}>
                { props.children }
            </ul>
        </div>
    )
}
export default ImageGrid;