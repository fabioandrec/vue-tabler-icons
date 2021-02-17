import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'Devices2Icon',
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
      "class": "icon icon-tabler icon-tabler-devices-2",
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
      "d": "M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "13",
      "y": "4",
      "width": "8",
      "height": "16",
      "rx": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "19",
      "x2": "10",
      "y2": "19"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "8",
      "x2": "17",
      "y2": "8.01"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "17",
      "cy": "16",
      "r": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "15",
      "x2": "9",
      "y2": "19"
    }), createTextVNode(" ")]);
  }

};