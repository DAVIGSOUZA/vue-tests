<template>
    <div class="form-container">
        <form v-on:submit="addComment">
            <input 
                class="input-comment"
                v-model="comment"
                name="comment"
                placeholder="Faça um comentário..."
                type="text"
            >
            <button type="submit" value="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddComment",
        data() {
            return {
                comment: ""
            }
        },
        methods: {
            addComment(event) {
                event.preventDefault()
                const newComment = {
                    id: Date.now(),
                    comment: this.comment,
                }
                this.$emit("add-comment", newComment)
                this.comment = ""
            }
        }
    }
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    padding: 8px;
}

.input-comment {
    width: 200px;
    margin-right: 5px;
}
</style>