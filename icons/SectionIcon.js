import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'SectionIcon',
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
      "class": "icon icon-tabler icon-tabler-section",
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
      "d": "M20 20h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 20h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 20h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 20h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 20h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 4h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 4h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 4h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 4h.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 4l0 0"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "4",
      "y": "8",
      "width": "16",
      "height": "8",
      "rx": "1"
    }), createTextVNode(" ")]);
  }

};