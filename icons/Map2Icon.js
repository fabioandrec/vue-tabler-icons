import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'Map2Icon',
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
      "class": "icon icon-tabler icon-tabler-map-2",
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
      "x1": "18",
      "y1": "6",
      "x2": "18",
      "y2": "6.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "4",
      "x2": "9",
      "y2": "17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "15",
      "x2": "15",
      "y2": "20"
    }), createTextVNode(" ")]);
  }

};