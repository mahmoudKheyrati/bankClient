<template>
    <div style="width: 100%; height: 100%;
    top:0px ;left:0px; background-color: aquamarine;
position: absolute">
        <v-progress-circular style="margin: auto
        ;position: absolute;
        top: 50%;
        left: 50%;
        "
                             :size="70"
                             :width="7"
                             color="purple"
                             indeterminate
        />
        <p style="margin: 100px;position: absolute;
 top: 52%;

 text-align: center;
        left: 40%;;">در حال بارگذاری اطلاعات ...</p>
    </div>
</template>

<script>
    // import router from "../router";
    //
    //
    //     fetch('http://127.0.0.1:5000/isLogin')
    //         .then(function (data) {
    //             return data.json()
    //
    //         }).then(function (json) {
    //         // eslint-disable-next-line no-console
    //         console.log(json);
    //         if (json['is_ok']===true){
    //             setTimeout(function () {
    //
    //             router.push('/')
    //             },3000)
    //
    //         }else {
    //             setTimeout(function () {
    //
    //             router.push('/login')
    //             },3000)
    //         }
    //
    //
    //
    //
    //
    // });
        // Your application has indicated there's an error



    export default {
        name: "Loader"
    }

</script>

<style scoped>

</style>