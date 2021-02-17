import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'DeviceMobileVibrationIcon',
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
      "class": "icon icon-tabler icon-tabler-device-mobile-vibration",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "4",
      "y": "4",
      "width": "10",
      "height": "16",
      "rx": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "5",
      "x2": "10",
      "y2": "5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "17",
      "x2": "9",
      "y2": "17.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 6l-2 3l2 3l-2 3l2 3"
    }), createTextVNode(" ")]);
  }

};