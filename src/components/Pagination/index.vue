<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)" :class="{ active: pageNo == 1 }">1</button>

        <button v-if="startNumAndEndNum.start > 2">···</button>

        <!-- 中间部分 -->
        <button v-for="(page, index) in startNumAndEndNum.end" :key="index" v-if="page >= startNumAndEndNum.start"
            @click="$emit('getPageNo', page)" :class="{ active: pageNo == page }">{{ page }}</button>

        <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
        <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo', totalPage)">{{ totalPage }}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)"
           >下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>
  
<script>
/* 对于分页器而言，自定义前提需要知道四个前提条件。
pageNo:当前第几个
pagesize:代表每一页展示多少条数据
total:代表整个分页一共要展示多少条数据
continues:代表分页连续页码个数 */
export default {
    name: "Pagination",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        //总共多少页
        totalPage() {
            //向上取整
            return Math.ceil(this.total / this.pageSize);
        },
        //计算出连续的页码的起始数字与结束数字(连续页码的数字最少是5)
        startNumAndEndNum() {
            //先定义两个变量存储起始数字与结束数字
            let start = 0, end = 0;
            //连续页码数字5，如果出现不正常的现象：总页数没有连续页码多
            if (this.continues > this.totalPage) {
                start = 1;
                end = this.totalPage;
            } else {
                //正常现象
                start = this.pageNo - parseInt(this.continues / 2)
                end = this.pageNo + parseInt(this.continues / 2)
                //对于不正常现象的纠正
                if (start < 1) {
                    start = 1;
                    end = this.continues;
                }
                if (end > this.totalPage) {
                    end = this.totalPage;
                    start = this.totalPage - this.continues + 1;
                }
            }
            return { start, end };
        }
    }
}
</script>
  
<style lang="less" scoped>
.pagination {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>
  