import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'VideoPlusIcon',
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
      "class": "icon icon-tabler icon-tabler-video-plus",
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
      "d": "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "3",
      "y": "6",
      "width": "12",
      "height": "12",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "12",
      "x2": "11",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "10",
      "x2": "9",
      "y2": "14"
    }), createTextVNode(" ")]);
  }

};