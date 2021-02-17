import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'WiperWashIcon',
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
      "class": "icon icon-tabler icon-tabler-wiper-wash",
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
      "cy": "20",
      "r": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 6a4 4 0 0 1 .4 -1.8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 2.1a4 4 0 0 1 2 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 6a4 4 0 0 0 -.4 -1.8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 6a4 4 0 0 1 .4 -1.8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 2.1a4 4 0 0 1 2 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 6a4 4 0 0 0 -.4 -1.8"
    }), createTextVNode(" ")]);
  }

};