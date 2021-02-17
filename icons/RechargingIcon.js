import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'RechargingIcon',
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
      "class": "icon icon-tabler icon-tabler-recharging",
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
      "d": "M7.038 4.5a9 9 0 0 0 -2.495 2.47"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3.186 10.209a9 9 0 0 0 0 3.508"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4.5 16.962a9 9 0 0 0 2.47 2.495"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10.209 20.814a9 9 0 0 0 3.5 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16.962 19.5a9 9 0 0 0 2.495 -2.47"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20.814 13.791a9 9 0 0 0 0 -3.508"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M19.5 7.038a9 9 0 0 0 -2.47 -2.495"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13.791 3.186a9 9 0 0 0 -3.508 -.02"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 8l-2 4h4l-2 4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 21a9 9 0 0 0 0 -18"
    }), createTextVNode(" ")]);
  }

};