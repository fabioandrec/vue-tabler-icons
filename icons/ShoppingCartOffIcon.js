import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ShoppingCartOffIcon',
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
      "class": "icon icon-tabler icon-tabler-shopping-cart-off",
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
      "cy": "19",
      "r": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 17a2 2 0 1 0 2 2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 17h-11v-11"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 3l18 18"
    }), createTextVNode(" ")]);
  }

};