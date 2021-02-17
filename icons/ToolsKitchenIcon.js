import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ToolsKitchenIcon',
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
      "class": "icon icon-tabler icon-tabler-tools-kitchen",
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
      "d": "M4 3h8l-1 9h-6z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 18h2v3h-2z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 15v6h-1v-3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "12",
      "x2": "8",
      "y2": "18"
    }), createTextVNode(" ")]);
  }

};