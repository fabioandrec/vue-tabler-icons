import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BrightnessDownIcon',
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
      "class": "icon icon-tabler icon-tabler-brightness-down",
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
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "5",
      "x2": "12",
      "y2": "5.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "7",
      "x2": "17",
      "y2": "7.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19",
      "y1": "12",
      "x2": "19",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "17",
      "x2": "17",
      "y2": "17.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "19",
      "x2": "12",
      "y2": "19.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "17",
      "x2": "7",
      "y2": "17.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "5",
      "y1": "12",
      "x2": "5",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "7",
      "x2": "7",
      "y2": "7.01"
    }), createTextVNode(" ")]);
  }

};