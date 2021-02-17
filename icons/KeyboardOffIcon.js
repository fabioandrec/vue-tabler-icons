import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'KeyboardOffIcon',
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
      "class": "icon icon-tabler icon-tabler-keyboard-off",
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
      "d": "M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "10",
      "x2": "6",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "10",
      "x2": "10",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "14",
      "y1": "10",
      "x2": "14",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "10",
      "x2": "18",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "14",
      "x2": "6",
      "y2": "14.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "14",
      "x2": "18",
      "y2": "14.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "14",
      "x2": "14",
      "y2": "14"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};