import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BorderRightIcon',
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
      "class": "icon icon-tabler icon-tabler-border-right",
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
      "x1": "20",
      "y1": "4",
      "x2": "20",
      "y2": "20"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "4",
      "x2": "4",
      "y2": "4.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "4",
      "x2": "8",
      "y2": "4.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "4",
      "x2": "12",
      "y2": "4.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "4",
      "x2": "16",
      "y2": "4.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "8",
      "x2": "4",
      "y2": "8.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "8",
      "x2": "12",
      "y2": "8.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "12",
      "x2": "4",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "12",
      "x2": "8",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "12",
      "x2": "16",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "16",
      "x2": "4",
      "y2": "16.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "16",
      "x2": "12",
      "y2": "16.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "20",
      "x2": "4",
      "y2": "20.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "20",
      "x2": "8",
      "y2": "20.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "20.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "20",
      "x2": "16",
      "y2": "20.01"
    }), createTextVNode(" ")]);
  }

};