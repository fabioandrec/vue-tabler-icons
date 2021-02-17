import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CurrencyBahrainiIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-bahraini",
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
      "d": "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 19.01v-.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 15.01v-.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 15h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869"
    }), createTextVNode(" ")]);
  }

};