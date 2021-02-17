import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CurrencyDirhamIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dirham",
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
      "d": "M8.5 19h-3.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 4v9"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 13.01v-.01"
    }), createTextVNode(" ")]);
  }

};