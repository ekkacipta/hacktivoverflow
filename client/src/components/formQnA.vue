<template>
    <div class="col-8 mt-5" style="display:flex; justify-content: center; align-items: start;">
        <div class="md-form">
            <input id="input-char-counter" type="text" length="10" class="form-control" placeholder="Title" v-model="form.title">
            <label for="input-char-counter"></label>
            <div id="formQnA">
                <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

            </div>
            <button type="submit" class="btn btn-primary" @click="questionPost">Submit</button>
            <button type="button" class="btn btn-primary" @click="setLocationPostHome">Cancel</button>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'formQnA',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    computed: {
        ...mapState(['form'])
    },
    methods: {
        ...mapActions(['questionPost']),
        ...mapMutations(['setLocationPostHome'])
    }
}
</script>
