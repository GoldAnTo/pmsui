import { describe, test, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Popover from './Popover.vue';

describe("Popover.vue", () => {
    // Props: popupOptions
    it("should render the layer when popupOptions.show is set to true", () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.layer').exists()).toBe(true);
    });

    it("should not render the layer when popupOptions.show is set to false", () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: false } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.layer').exists()).toBe(false);
    });

    // Props: sizeClass
    it("should have the correct size class when sizeClass prop is set", () => {
        const wrapper = mount(Popover, {
            props: { sizeClass: "large" },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.classes()).toContain('large');
    });

    // Props: styleClass
    it("should apply the correct styles when styleClass prop is set", () => {
        const wrapper = mount(Popover, {
            props: { styleClass: { width: '60vw', height: '60vh' } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.attributes('style')).toBe('width: 60vw; height: 60vh; outline: none;');
    });

    // Props: titleStyle
    it("should apply the correct title styles when titleStyle prop is set", () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { title: '测试标题' }, titleStyle: { color: 'red' } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.fl').attributes('style')).toBe('color: red;');
    });

    // Props: popupOptions.child
    it("should render the child content when popupOptions.child.show is set to true", () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true, child: { show: true, title: '子标题' } } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.header-pop').exists()).toBe(true);
        expect(wrapper.find('.header-pop').text()).toContain('子标题');
    });

    // Props: popupOptions.child
    it("should not render the child content when popupOptions.child.show is set to false", () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true, child: { show: false, title: '子标题' } } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.header-pop').exists()).toBe(false);
    });

    // Events: handleClose
    it("should emit the handleClose event when the close button is clicked", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        await wrapper.find('.btn-close').trigger('click');
        expect(wrapper.emitted().handleClose).toBeTruthy();
        expect(wrapper.emitted().handleClose.length).toBe(1);
    });

    // Events: handleEnter
    it("should emit the handleEnter event when the Enter key is pressed", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().handleEnter).toBeTruthy();
        expect(wrapper.emitted().handleEnter.length).toBe(1);
    });

    // Events: handleClick
    it("should emit the handleClick event when a button inside the content is clicked", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            slots: {
                button: `<button type="button" @click="handleClick('test')">Click</button>`,
            },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        await wrapper.find('.button-wrapper button').trigger('click');
        expect(wrapper.emitted().handleClick).toBeTruthy();
        expect(wrapper.emitted().handleClick.length).toBe(1);
        expect(wrapper.emitted().handleClick[0][0]).toBe('test');
    });

    // Method: handleZoom
    it("should toggle the zoom class when the handleZoom method is called", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        await wrapper.find('.title').trigger('dblclick');
        expect(wrapper.classes()).toContain('zoom');

        await wrapper.find('.title').trigger('dblclick');
        expect(wrapper.classes()).not.toContain('zoom');
    });

    // Method: hideLayer
    it("should close the layer when clicking outside the content and popupOptions.clickLayerClose is true", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true, clickLayerClose: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        await wrapper.find('.layer').trigger('click');
        expect(wrapper.emitted().handleClose).toBeTruthy();
        expect(wrapper.emitted().handleClose.length).toBe(1);
    });

    // Method: hideLayer
    it("should not close the layer when clicking outside the content and popupOptions.clickLayerClose is false", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true, clickLayerClose: false } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        await wrapper.find('.layer').trigger('click');
        expect(wrapper.emitted().handleClose).toBeFalsy();
    });

    // Method: handlerKey
    it("should close the layer when pressing the Esc key", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().handleClose).toBeTruthy();
        expect(wrapper.emitted().handleClose.length).toBe(1);
    });

    it("should emit the handleEnter event when pressing the Enter key", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().handleEnter).toBeTruthy();
        expect(wrapper.emitted().handleEnter.length).toBe(1);
    });

    // Slot: content
    it("should render the content slot", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            slots: {
                content: `<div>测试内容</div>`,
            },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.content-wrapper').text()).toBe('测试内容');
    });

    // Slot: button
    it("should render the button slot when $slots.button is true", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            slots: {
                button: `<button type="button">测试按钮</button>`,
            },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.button-wrapper').exists()).toBe(true);
        expect(wrapper.find('.button-wrapper button').text()).toBe('测试按钮');
    });

    it("should not render the button slot when $slots.button is false", async () => {
        const wrapper = mount(Popover, {
            props: { popupOptions: { show: true } },
            global: {
                stubs: ["el-card", "el-loading"],
            },
        });
        expect(wrapper.find('.button-wrapper').exists()).toBe(false);
    });
});