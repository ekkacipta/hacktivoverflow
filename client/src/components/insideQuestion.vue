<template>
     <div class="col-8">
            <main style="display:flex; justify-content: space-between; margin: 10px">
                    <h1 style="margin-top: 8px">All Questions</h1>
                    <button type="button" class="btn btn-light-blue" @click="setLocationQnA">Ask Questions</button>
            </main>


            <div class="list-group-flush">
                    <div class="list-group-item" style="display: flex;">
                        <div class="col-2">
                            <center>
                            <span class="row-3">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;" @click="upvotesClick(QnA.id)"><i class="fas fa-sort-up"></i></h4>
                            </span>
                            <span class="row-3">
                                <center>
                                    <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;">{{QnA.upvotes.length - QnA.downvotes.length}}</h4>
                                </center>
                            </span>
                            <span class="row-3">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;" @click="downvotesClick(QnA.id)"><i class="fas fa-sort-down"></i></h4>
                            </span>

                            <span class="row-3">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;"><i class="fas fa-star"></i></h4>
                            </span>

                            </center>
                        </div>

                        <div class="col-10">
                                <h2>{{QnA.title}}</h2>
                                <h4 v-html="QnA.description"></h4>

                            <span><i class="fas fa-edit"></i></span>
                            <span><i class="fas fa-trash" @click="deleteQuestion(QnA.id)"></i></span>
                            
                        </div>


                    </div>
                    <!-- ANSWER -->
                    <div class="list-group-item" style="display: flex;" v-for="data in QnA.answer" :key="data._id">
                        <div class="col-2">
                            
                            <center>
                            <span class="row-4">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;" @click="upvotesClickAnswers(data._id)"><i class="fas fa-sort-up"></i></h4>
                            </span>
                            <span class="row-4">
                                <center>
                                    <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;">{{data.upvotes.length - data.downvotes.length}}</h4>
                                </center>
                            </span>
                            <span class="row-4">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;"><i class="fas fa-sort-down"></i></h4>
                            </span>

                            </center>
                        </div>

                        <div class="col-10">
                                <h2>{{data.title}}</h2>
                                <h4 v-html="data.description"></h4>

                            <span><i class="fas fa-edit"></i></span>
                            <span><i class="fas fa-trash" @click="deleteAnswer({questionId: QnA.id, answerId: data._id})"></i></span>
                            
                        </div>


                    </div>
                    <!--  -->
            </div>
            <!-- FORM -->
            <div class="col-8 mt-5" style="display:flex; justify-content: center; align-items: start;">
                <div class="md-form">
                    <input id="input-char-counter" type="text" length="10" class="form-control" placeholder="Title" v-model="form.title">
                    <label for="input-char-counter"></label>
                    <div id="inside">
                        <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>

                    </div>
                    <button type="submit" class="btn btn-primary" @click="answerPost(QnA.id)">Submit</button>
                    <button type="button" class="btn btn-primary" @click="setLocationInside">Cancel</button>
                </div>
            </div>
            <!--  -->
        </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import formQnA from '@/components/formQnA.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'inside',
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
        ...mapState(['QnA', 'form'])
    },
    methods: {
        ...mapActions(['upvotesClick', 'downvotesClick', 'answerPost', 'deleteQuestion', 'deleteAnswer', 'upvotesClickAnswers']),
        ...mapMutations(['setLocationInside', 'setLocationQnA'])
    },
    // mounted(){
        
    // }
}
</script>
