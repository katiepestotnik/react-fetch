const GiphyDisplay = ({ tag }) => {
    const loaded = () => {
        return (
            <div>
                <h3>{tag.data.title}</h3>
                <img src={tag.data.images.fixed_width.url} alt={tag.data.slug} />
            </div>
        )
    }
    const loading = () => {

    }
    return tag? loaded():loading()

}
export default GiphyDisplay