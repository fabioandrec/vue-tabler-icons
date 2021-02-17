import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BackhoeIcon',
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
      "class": "icon icon-tabler icon-tabler-backhoe",
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
      "cx": "4",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "13",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "19",
      "x2": "4",
      "y2": "19"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "15",
      "x2": "13",
      "y2": "15"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 12v-5h2a3 3 0 0 1 3 3v5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 15v-2a1 1 0 0 1 1 -1h7"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21.12 9.88l-3.12 -4.88l-5 5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z"
    }), createTextVNode(" ")]);
  }

};