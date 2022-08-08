import axios from "axios";
import React from "react";

const baseURL = "http://localhost:5000/";

function Home() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setPost(response.data);
    });
  }, []);

  if (!post) return (
    <div>waiting for response</div>
  );

  return (
    <div>
      <h1>{post.res}</h1>
    </div>
  );
}
export default Home