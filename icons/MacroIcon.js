import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'MacroIcon',
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
      "class": "icon icon-tabler icon-tabler-macro",
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
      "d": "M6 15a6 6 0 1 0 12 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 15a6 6 0 0 0 -6 6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 21a6 6 0 0 0 -6 -6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 21v-10"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z"
    }), createTextVNode(" ")]);
  }

};