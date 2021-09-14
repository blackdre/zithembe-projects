import { ref } from "vue";
// import { projectFirestore } from "../firebase/config";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // const res = await projectFirestore.collection("posts").get();
      // posts.value = res.docs.map((doc) => {
      //   return { ...doc.data, id: doc.id };
      // });
      let data = await fetch("http://127.0.0.1:8000/api/v1/portfolio/");
      if (!data.ok) {
        throw Error("no data  available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
