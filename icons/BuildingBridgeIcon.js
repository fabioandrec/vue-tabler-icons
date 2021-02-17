import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BuildingBridgeIcon',
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
      "class": "icon icon-tabler icon-tabler-building-bridge",
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
      "x1": "6",
      "y1": "5",
      "x2": "6",
      "y2": "19"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "5",
      "x2": "18",
      "y2": "19"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "2",
      "y1": "15",
      "x2": "22",
      "y2": "15"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "10",
      "x2": "12",
      "y2": "15"
    }), createTextVNode(" ")]);
  }

};