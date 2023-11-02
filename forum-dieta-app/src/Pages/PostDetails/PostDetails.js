import { useParams } from "react-router-dom";

function PostDetails() {
    const { id } = useParams();
    return(<main className={"main__sect main content"}>
        <p>Esta é uma página de post completa da notícia {id}</p>
    </main>);
}

export default PostDetails;