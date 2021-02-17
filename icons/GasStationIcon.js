import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'GasStationIcon',
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
      "class": "icon icon-tabler icon-tabler-gas-station",
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
      "d": "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "20",
      "x2": "15",
      "y2": "20"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 7v1a1 1 0 0 0 1 1h1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "11",
      "x2": "14",
      "y2": "11"
    }), createTextVNode(" ")]);
  }

};