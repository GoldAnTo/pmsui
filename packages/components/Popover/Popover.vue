<template>
    <transition name="popup">
        <div v-if="popupOptions.show" v-dialogDrag class="layer" @click="hideLayer">
            <el-card
                id="child"
                class="box-card custom_popup"
                :class="[sizeClass, zoomFlag ? 'zoom' : '']"
                ref="childRef"
                :style="{ ...styleClass, outline: 'none' }"
            >
                <template #header>
                    <div class="title header-pop" @dblclick="handleZoom">
                        <span class="fl" :style="{ ...titleStyle }">
                            <span
                                style="width: 3px; height: 14px; background: linear-gradient(180deg,#ffcc8b, #f09625);;border-radius: 2px; margin-right: 6px;"
                            ></span>
                            {{ popupOptions.title }}
                        </span>
                        <span @click="close" class="btn-close" />
                    </div>
                </template>
                <div class="content-wrapper" id="content-wrapper" v-loading="popupLoading">
                    <slot name="content" :childPop="popupOptions.child" />
                </div>
                <div class="button-wrapper" v-if="$slots.button">
                    <slot name="button"></slot>
                </div>
            </el-card>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { ElCard, ElLoading } from 'element-plus';
defineOptions({
    name: 'CubePop'
})


// 定义props
const props = defineProps({
    popupOptions: {
        type: Object,
        default: () => ({
            title: '属性', // 标题名称
            show: false, // 显示隐藏
            id: '', // 传输id
            name: '', // 标题额外名称
            child: {
                title: '属性', // 标题名称
                show: false // 显示隐藏
            }
        })
    },
    sizeClass: {
        type: String,
        default: 'content'
    },
    styleClass: {
        type: Object,
        default: () => ({
            width: '50vw',
            height: '50vh'
        })
    },
    titleStyle: {
        type: Object,
        default: () => ({})
    }
});

// 定义emits
const emit = defineEmits(['handleEnter', 'handleClose', 'handleClick']);

// 定义数据
const zoomFlag = ref(false);
const popupLoading = ref(false);
const childRef = ref(null);

// 监听popupOptions的变化
watch(() => props.popupOptions, (value) => {
    if (value.child && value.child.show) {
        document.onkeydown = (e) => {
            const key = e.keyCode;
            if (key === 27) {
                value.child.show = false;
            }
        };
    } else if (value.show) {
        document.onkeydown = handlerKey;
    } else {
        document.onkeydown = null;
    }
}, { deep: true });


// 定义方法
const handlerKey = (e) => {
    e.stopPropagation();
    const key = e.keyCode;
    if (key === 27) {
        close();
    } else if (key === 13) {
        emit('handleEnter');
    }
};

const hideLayer = (e) => {
    const child = childRef.value;
    if (props.popupOptions.clickLayerClose && child && !child.contains(e.target)) {
        close();
    }
};

const close = () => {
    props.popupOptions.show = false;
    emit('handleClose');
};

const fn_handleAdd = (context = 'add') => {
    setTimeout(() => {
        const child = childRef.value;
        if (child) {
            let width = child.offsetWidth;
            let height = child.offsetHeight;
            child.style.height = context === 'add' ? height + 10 + 'px' : height - 10 + 'px';
            child.style.width = context === 'add' ? width + 10 + 'px' : width - 10 + 'px';
        }
    }, 0);
};

const handleClick = (tab) => {
    emit('handleClick', tab);
};

const handleZoom = () => {
    zoomFlag.value = !zoomFlag.value;
};
</script>

<style scoped>
@import "./style.scss";
</style>