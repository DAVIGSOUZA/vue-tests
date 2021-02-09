<template>
    <div class="post-container">
        
        <div class="post-header">
            <img class="user-pic" v-bind:src="userPic" alt="">
            <p> {{userName}}</p>
        </div>

        <img class="post-pic" v-bind:src="postPic" alt="">

        <div class="post-footer">
            <Counter 
                v-bind:icon="likeIcon" 
                v-on:icon-click="toggleLike" 
                v-bind:counter="likeCount"
            />

            <Counter 
                icon="/comment_icon.svg" 
                v-on:icon-click="toggleComments" 
                v-bind:counter="comments.length"
            />

        </div>

        <AddComment v-if="showComments" v-on:add-comment="addComment"/>
        <div v-if="showComments" >
            <div v-for="comment in comments" v-bind:key="comment.id">
                <p>
                    {{ comment.comment }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './Counter.vue';
    import AddComment from "./AddComment";

    export default {
        name: "Post",

        components: {
            Counter,
            AddComment
        },

        props: {
            userName: String,
            userPic: String,
            postPic: String
        },

        data() {
            return {
                comments: [],
                showComments: false,
                liked: false,
                likeIcon: "/favorite-white.svg",
                likeCount: 0
            }
        },

        methods: {
            addComment (newComment) {
                this.comments = [...this.comments, newComment]
            },

            toggleComments () {
                this.showComments = !this.showComments
            },

            toggleLike () {
                this.liked = !this.liked
                if (this.liked) {
                    this.likeIcon = "/favorite.svg"
                    this.likeCount += 1
                } else {
                    this.likeIcon = "/favorite-white.svg"
                    this.likeCount -= 1
                }
            }
        }
    }
</script>

<style scoped>
    .post-container {
        border: 1px solid gray;
        width: 300px;
        margin-bottom: 10px;
    }

    .post-header {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .post-footer {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
    }

    .user-pic {
        height: 30px;
        width: 30px;
        margin-right: 10px;
        border-radius: 50%;
    }

    .post-pic {
        width: 100%;
    }
</style>