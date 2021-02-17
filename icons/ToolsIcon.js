import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ToolsIcon',
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
      "class": "icon icon-tabler icon-tabler-tools",
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
      "d": "M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "14.5",
      "y1": "5.5",
      "x2": "18.5",
      "y2": "9.5"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "12 8 7 3 3 7 8 12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "8",
      "x2": "5.5",
      "y2": "9.5"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "16 12 21 17 17 21 12 16"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "17",
      "x2": "14.5",
      "y2": "18.5"
    }), createTextVNode(" ")]);
  }

};