import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CertificateIcon',
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
      "class": "icon icon-tabler icon-tabler-certificate",
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
      "cx": "15",
      "cy": "15",
      "r": "3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 17.5v4.5l2 -1.5l2 1.5v-4.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "9",
      "x2": "18",
      "y2": "9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "12",
      "x2": "9",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "15",
      "x2": "8",
      "y2": "15"
    }), createTextVNode(" ")]);
  }

};