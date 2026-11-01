export const Background = () => {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fafafa]"
        >
            <div className="bg-mesh absolute inset-0">
                <div className="bg-blob bg-blob-a" />
                <div className="bg-blob bg-blob-b" />
                <div className="bg-blob bg-blob-c" />
                <div className="bg-blob bg-blob-d" />
            </div>
            <div className="bg-grain absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]" />
        </div>
    )
}

export default Background
