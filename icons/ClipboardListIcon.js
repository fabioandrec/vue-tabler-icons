import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ClipboardListIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  },

  setup(props, ctx) {
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const attrs = { ...ctx.attrs
    };
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    return () => createVNode("svg", mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-clipboard-list",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, { ...attrs
    }), [createTextVNode("   "), createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "9",
      "y": "3",
      "width": "6",
      "height": "4",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "9.01",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "12",
      "x2": "15",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "16",
      "x2": "9.01",
      "y2": "16"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "16",
      "x2": "15",
      "y2": "16"
    }), createTextVNode(" ")]);
  }

};