<template>
    <p> 
        这是一个连接数量测试
    </p>
</template>

<script>
import { defaultInitialZIndex } from 'element-plus';
    export default {
        data() {
            return {
                paying:''
            }
        },
        mounted: function() {
            this.setup();
        },
        methods: {
            setup() {
                const timeId = setInterval(() => {
                    if (paying == 'success') {
                        clearInterval(this.timeId)
                    };
                    checkPaymentDone();
                },1000)
            },
            checkPaymentDone() {
                let self = this;
                let xhr = new XMLHttpRequest();
                let url = "http://127.0.0.1:9000/test";
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json")
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                    self.paying = this.responseText;
                };
                xhr.send();
            }
        }
    }
}
</script>