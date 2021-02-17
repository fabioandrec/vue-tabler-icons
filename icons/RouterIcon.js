import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'RouterIcon',
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
      "class": "icon icon-tabler icon-tabler-router",
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
      "x": "3",
      "y": "13",
      "width": "18",
      "height": "8",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "17",
      "x2": "17",
      "y2": "17.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "17",
      "x2": "13",
      "y2": "17.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "13",
      "x2": "15",
      "y2": "11"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11.75 8.75a4 4 0 0 1 6.5 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8.5 6.5a8 8 0 0 1 13 0"
    }), createTextVNode(" ")]);
  }

};