import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'FileAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-file-analytics",
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
      "d": "M14 3v4a1 1 0 0 0 1 1h4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "17",
      "x2": "9",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "17",
      "x2": "12",
      "y2": "16"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "17",
      "x2": "15",
      "y2": "14"
    }), createTextVNode(" ")]);
  }

};