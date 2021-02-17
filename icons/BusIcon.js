import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BusIcon',
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
      "class": "icon icon-tabler icon-tabler-bus",
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
      "cx": "6",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "18",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "16 5 17.5 12 22 12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "2",
      "y1": "10",
      "x2": "17",
      "y2": "10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "5",
      "x2": "7",
      "y2": "10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "5",
      "x2": "12",
      "y2": "10"
    }), createTextVNode(" ")]);
  }

};