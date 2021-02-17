import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TrophyIcon',
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
      "class": "icon icon-tabler icon-tabler-trophy",
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
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "21",
      "x2": "16",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "17",
      "x2": "12",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "4",
      "x2": "17",
      "y2": "4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 4v8a5 5 0 0 1 -10 0v-8"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "5",
      "cy": "9",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "19",
      "cy": "9",
      "r": "2"
    }), createTextVNode(" ")]);
  }

};