import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'KeyboardShowIcon',
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
      "class": "icon icon-tabler icon-tabler-keyboard-show",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "2",
      "y": "3",
      "width": "20",
      "height": "12",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "7",
      "x2": "6",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "7",
      "x2": "10",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "14",
      "y1": "7",
      "x2": "14",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "7",
      "x2": "18",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "11",
      "x2": "6",
      "y2": "11.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "11",
      "x2": "18",
      "y2": "11.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "11",
      "x2": "14",
      "y2": "11"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 19l2 2l2 -2"
    }), createTextVNode(" ")]);
  }

};