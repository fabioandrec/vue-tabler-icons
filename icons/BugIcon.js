import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BugIcon',
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
      "class": "icon icon-tabler icon-tabler-bug",
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
      "d": "M9 9v-1a3 3 0 0 1 6 0v1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "13",
      "x2": "7",
      "y2": "13"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "13",
      "x2": "21",
      "y2": "13"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "14"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "19",
      "x2": "7.35",
      "y2": "17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "20",
      "y1": "19",
      "x2": "16.65",
      "y2": "17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "7",
      "x2": "7.75",
      "y2": "9.4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "20",
      "y1": "7",
      "x2": "16.25",
      "y2": "9.4"
    }), createTextVNode(" ")]);
  }

};