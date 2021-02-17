import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ListCheckIcon',
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
      "class": "icon icon-tabler icon-tabler-list-check",
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
      "d": "M3.5 5.5l1.5 1.5l2.5 -2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3.5 11.5l1.5 1.5l2.5 -2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3.5 17.5l1.5 1.5l2.5 -2.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "6",
      "x2": "20",
      "y2": "6"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "12",
      "x2": "20",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "18",
      "x2": "20",
      "y2": "18"
    }), createTextVNode(" ")]);
  }

};