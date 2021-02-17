import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'FileZipIcon',
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
      "class": "icon icon-tabler icon-tabler-file-zip",
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
      "d": "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "5",
      "x2": "10",
      "y2": "5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "7",
      "x2": "12",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "9",
      "x2": "10",
      "y2": "9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "11",
      "x2": "12",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "13",
      "x2": "10",
      "y2": "13"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "15",
      "x2": "12",
      "y2": "15"
    }), createTextVNode(" ")]);
  }

};