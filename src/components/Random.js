const Random = ({giphy}) => {
        return (
            <div>
                <h3>{giphy?.data.title}</h3>
                <img src={giphy?.data.images.fixed_width.url} alt={giphy?.data.slug} />
            </div>

        )
}
export default Random