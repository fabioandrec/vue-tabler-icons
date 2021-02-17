import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CreditCardOffIcon',
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
      "class": "icon icon-tabler icon-tabler-credit-card-off",
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
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "11",
      "x2": "11",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "11",
      "x2": "21",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "15",
      "x2": "7.01",
      "y2": "15"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "15",
      "x2": "13",
      "y2": "15"
    }), createTextVNode(" ")]);
  }

};