import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ReceiptTaxIcon',
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
      "class": "icon icon-tabler icon-tabler-receipt-tax",
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
      "x1": "9",
      "y1": "14",
      "x2": "15",
      "y2": "8"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "9.5",
      "cy": "8.5",
      "r": ".5",
      "fill": "currentColor"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "14.5",
      "cy": "13.5",
      "r": ".5",
      "fill": "currentColor"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
    }), createTextVNode(" ")]);
  }

};