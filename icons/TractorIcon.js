import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TractorIcon',
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
      "class": "icon icon-tabler icon-tabler-tractor",
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
      "cx": "7",
      "cy": "15",
      "r": "4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "15",
      "x2": "7",
      "y2": "15.01"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "19",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10.5",
      "y1": "17",
      "x2": "17",
      "y2": "17"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 5h-1a1 1 0 0 0 -1 1v4"
    }), createTextVNode(" ")]);
  }

};