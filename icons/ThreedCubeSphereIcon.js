import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ThreedCubeSphereIcon',
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
      "class": "icon icon-tabler icon-tabler-3d-cube-sphere",
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
      "d": "M6 17.6l-2 -1.1v-2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 10v-2.5l2 -1.1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 4.1l2 -1.1l2 1.1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 6.4l2 1.1v2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20 14v2.5l-2 1.12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 19.9l-2 1.1l-2 -1.1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "14",
      "y2": "10.9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18",
      "y1": "8.6",
      "x2": "20",
      "y2": "7.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "14.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "18.5",
      "x2": "12",
      "y2": "21"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 12l-2 -1.12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "8.6",
      "x2": "4",
      "y2": "7.5"
    }), createTextVNode(" ")]);
  }

};