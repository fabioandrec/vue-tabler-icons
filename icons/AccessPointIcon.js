import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'AccessPointIcon',
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
      "class": "icon icon-tabler icon-tabler-access-point",
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
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14.828 9.172a4 4 0 0 1 0 5.656"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17.657 6.343a8 8 0 0 1 0 11.314"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.168 14.828a4 4 0 0 1 0 -5.656"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6.337 17.657a8 8 0 0 1 0 -11.314"
    }), createTextVNode(" ")]);
  }

};