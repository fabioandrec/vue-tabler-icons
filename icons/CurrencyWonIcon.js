import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CurrencyWonIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-won",
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
      "d": "M4 6l3.245 11.358a0.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a0.85 .85 0 0 0 1.624 -.035l3.245 -11.358"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21 10h-18"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21 14h-18"
    }), createTextVNode(" ")]);
  }

};