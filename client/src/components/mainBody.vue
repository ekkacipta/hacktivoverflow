<template>
    <!-- <div class="container"> -->
        <div class="col-8">
            <main style="display:flex; justify-content: space-between; margin: 10px">
                    <h1 style="margin-top: 8px">All Questions</h1>
                    <button type="button" class="btn btn-light-blue" @click="setLocationQnA">Ask Questions</button>
            </main>

            <div class="row" style="margin: 10px; justify-content: space-between;">
                <h2 style="font-size: 21px; margin: 8px">Test</h2>
                <ul class="list-group list-group-horizontal-sm" style="height: 8px;">
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 2px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:1px">Newest</li>
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 1px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:1px">Featured</li>
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 1px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:1px">Frequent</li>
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 1px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:1px">Votes</li>
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 1px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:1px">Active</li>
                    <li class="list-group-item" style="color: gray; font-size: 14px;height: 8p;height: 35px;padding: 6px; border-left-width: 1px; border-top-width: 2px; border-bottom-width: 2px; border-right-width:2px">unanswered</li>
                </ul>
            </div>

            <div class="list-group-flush">
                    <div class="list-group-item" style="display: flex;" v-for="data in questions" :key="data._id">

                        <div class="col-2">
                            <center>
                            <span class="row-5">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;">{{data.upvotes.length + data.downvotes.length}}</h4>
                                <p style="font-size: 11px; color: gray">votes</p>
                            </span>
                            <span class="row-5">
                                <h4 style="font-size: 20px; color: gray; margin-bottom: 2px;">{{data.answer.length}}</h4>
                                <p style="font-size: 11px; color: gray">answer</p>
                            </span>
                            <span class="row-2">
                                <p style="font-size: 11px; color: gray">4 views</p>
                            </span>
                            </center>
                        </div>

                        <div class="col-10">
                            <h2 @click.prevent="setLocationInside(), questionSpesific(data._id)">{{data.title}}</h2>
                            <h4 v-html="data.description"></h4>
                        </div>

                    </div>



            </div>

        </div>
    <!-- </div> -->
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
    name: 'mainBody',
    computed: {
        ...mapState(['QnA', 'questions'])
    },
    methods: {
        ...mapMutations(['setLocationQnA']),
        ...mapActions(['allQuestion', 'questionSpesific']),
        ...mapMutations(['setLocationInside'])
        
    },
    mounted() {
        this.allQuestion()
    }
};
</script>

