import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'FloatRightIcon',
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
      "class": "icon icon-tabler icon-tabler-float-right",
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
    }), createTextVNode("   "), createVNode("rect", {
      "width": "6",
      "height": "6",
      "x": "14",
      "y": "5",
      "rx": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "7",
      "x2": "10",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "11",
      "x2": "10",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "15",
      "x2": "20",
      "y2": "15"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "19",
      "x2": "20",
      "y2": "19"
    }), createTextVNode(" ")]);
  }

};