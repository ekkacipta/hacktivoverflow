<template>
    <!-- <div class="row"> -->
        <!-- <div class="container"> -->
            <div class="col-2" style="border-right: solid 1px gray; min-height: 100vh;">
                <ul class="list-group">
                    Home
                </ul>
                <ul class="list-group" id="isidalem">
                    PUBLIC
                    <li><a href="#"></a>Stack Overyou</li>
                    <li><a href="#"></a>Tags</li>
                    <li><a href="#"></a>Users</li>
                    <li><a href="#"></a>Jobs</li>
                
                </ul>
            </div>
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
export default {
    name: 'sidebar'
}
</script>


<style scoped>
ul{
    margin: 5px;
    color: grey;
}
ul li{
    list-style: none;
    margin: 5px
} 
#isidalem li{
    margin-left: 10px
}
</style>
