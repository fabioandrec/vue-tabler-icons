import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ReceiptOffIcon',
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
      "class": "icon icon-tabler icon-tabler-receipt-off",
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
      "d": "M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "7",
      "x2": "15",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "11",
      "x2": "11",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "15",
      "x2": "15",
      "y2": "15"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "11",
      "x2": "15",
      "y2": "11.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};