<template>
  <div id="app">
    <HelloWorld msg="InstaPosts"/>
    <div class="add-post-container">
        <h3>Novo Post</h3>
        <form v-on:submit="addPost">
            <input 
                class="input"
                v-model="userName"
                name="userName"
                placeholder="Digite seu nome..."
                type="text"
            >
              <input 
                class="input"
                v-model="userPicUrl"
                name="userPicUrl"
                placeholder="URL da foto de perfil..."
                type="text"
            >
              <input 
                class="input"
                v-model="postImgUrl"
                name="postImgUrl"
                placeholder="URL da foto do post..."
                type="text"
            >
            <button class="add-post-button" type="submit" value="submit">Postar</button>
        </form>
    </div>

    <Post v-bind:key="post.id" 
      v-for="post in posts"
      v-bind:userName="post.userName"
      v-bind:userPic="post.userPic"
      v-bind:postPic="post.postPic"
    />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Post from "./components/Post";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Post
  },

  data() {
    return{
      userName: "",
      userPicUrl: "",
      postImgUrl: "",

      posts: [
        {
          id: 1,
          userName: "usuário",
          userPic: "https://picsum.photos/50?random=1",
          postPic: "https://picsum.photos/300?random=1"
        }
      ]
    }
  },

  methods: {
    addPost(event) {
      event.preventDefault()
      console.log(this.inputsPost)
      const newPost = {
        id: Date.now(),
        userName: this.userName,
        userPic: this.userPicUrl,
        postPic: this.postImgUrl,
      }
      this.posts = [newPost, ...this.posts]
      this.userName =""
      this.userPicUrl =""
      this.postImgUrl =""
      console.log(this.posts)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .add-post-container {
      border: 1px solid black;
      width: 300px;
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .input {
      width: 80%;
      margin: 4px;
  }

  .add-post-button{
      width: 80%;
      padding: 4px;
      margin: 8px;
  }
</style>
